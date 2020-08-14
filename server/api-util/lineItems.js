const { calculateQuantityFromDates, calculateTotalFromLineItems, retrieveTotalPriceFromBookingManager } = require('./lineItemHelpers');
const { types } = require('sharetribe-flex-sdk');
const { Money } = types;

// This bookingUnitType needs to be one of the following:
// line-item/night, line-item/day or line-item/units
const bookingUnitType = 'line-item/night';
// Marketplace pre-set commission
const PROVIDER_COMMISSION_PERCENTAGE = -20;

// The provider commission in this case should be more versatile, first, we need to have our own
// commission model for the user-listed items, second, the commission rate for the booking manager items
// are fixed by the operators, typically around 15~20%, need to incorporate that into the calculation
// TODO: upload the commission rate for each boat into the sharestribe server(this gonna take a while)
// The uploading is done.


/** Returns collection of lineItems (max 50)
 *
 * Each line items has following fields:
 * - `code`: string, mandatory, indentifies line item type (e.g. \"line-item/cleaning-fee\"), maximum length 64 characters.
 * - `unitPrice`: money, mandatory
 * - `lineTotal`: money
 * - `quantity`: number
 * - `percentage`: number (e.g. 15.5 for 15.5%)
 * - `seats`: number
 * - `units`: number
 * - `includeFor`: array containing strings \"customer\" or \"provider\", default [\":customer\"  \":provider\" ]
 *
 * Line item must have either `quantity` or `percentage` or both `seats` and `units`.
 *
 * `includeFor` defines commissions. Customer commission is added by defining `includeFor` array `["customer"]` and provider commission by `["provider"]`.
 *
 * @param {Object} listing
 * @param {Object} bookingData
 * @returns {Array} lineItems
 */
exports.transactionLineItems = (listing, bookingData) => {
  const unitPrice = listing.attributes.price;
  const { startDate, endDate } = bookingData;
  // this is where the number, string and undeined thingy messed up
  const yachtId = String(listing.attributes.publicData.yachtId);

  const bmOwnCommission = (listing.attributes.publicData.commissionPercentage) * (-1);
  console.log("verifying whether the yacht is from the booking manager or real content uploader");
  console.log(yachtId);
  // console.log(bookingData);

  /**
   * If you want to use pre-defined component and translations for printing the lineItems base price for booking,
   * you should use one of the codes:
   * line-item/night, line-item/day or line-item/units (translated to persons).
   *
   * Pre-definded commission components expects line item code to be one of the following:
   * 'line-item/provider-commission', 'line-item/customer-commission'
   *
   * By default BookingBreakdown prints line items inside LineItemUnknownItemsMaybe if the lineItem code is not recognized. */

  // const booking = {
  //   code: bookingUnitType,
  //   unitPrice,
  //   quantity: calculateQuantityFromDates(startDate, endDate, bookingUnitType),
  //   yachtId,
  //   bookingData,
  //   includeFor: ['customer', 'provider'],
  // };

  var booking = {};
  var providerCommission = {}
  // This is for the booking manager process
  if (yachtId != 'undefined') {
    console.log("going through booking manager");
    real_unit_price = retrieveTotalPriceFromBookingManager(yachtId, bookingData);
    // const obligarotyFeePriceChunk = resolveBookingManagerObligatoryFees(listing, bookingData);


    // console.log("commission percentage is"+bmOwnCommission.toString());
    booking = {
      code: bookingUnitType,
      unitPrice: real_unit_price,
      quantity: 1,
      bookingData,
      includeFor: ['customer', 'provider'],

    };


    var tempFee = tempresolveBookingManagerObligatoryFees(listing,bookingData);


    var obligarotyFee={

      code:'line-item/obligatory-fee',
      unitPrice: new Money(tempFee,"EUR"),
      quantity:1,
      includeFor: ['customer', 'provider'],

    };

    providerCommission = {
      code: 'line-item/provider-commission',
      unitPrice: calculateTotalFromLineItems([booking]),
      percentage: bmOwnCommission,
      includeFor: ['provider'],
    };

    const lineItems = [booking, obligarotyFee, providerCommission];
    return lineItems;

  } else {
    console.log("going through normal process");
    booking = {
      code: bookingUnitType,
      unitPrice,
      quantity: calculateQuantityFromDates(startDate, endDate, bookingUnitType),
      yachtId,
      bookingData,
      includeFor: ['customer', 'provider'],
    };
    providerCommission = {
      code: 'line-item/provider-commission',
      unitPrice: calculateTotalFromLineItems([booking]),
      percentage: PROVIDER_COMMISSION_PERCENTAGE,
      includeFor: ['provider'],
    };

    const lineItems = [booking, providerCommission];
    return lineItems;
  }
};

// NOTE: only base prices returned from the booking manager counts towards tzeyo's commission, the obligaroty addons
// do not. Neither do the non-obligatory items
// This will be used for a long term when I sort out the auto extend feature
// For now I am asked to give total number without breakdown
const resolveBookingManagerObligatoryFees = (listing, bookingData) => {
  // The bookingData is for the 
  const publicData = listing.attributes.publicData;
  // lesson learnt, retrieve the raw object first
  const productsArray = publicData && publicData.products ? publicData.products : [];
  // console.log(productsArray);
  var toDisplayProduct = null;
  if (productsArray.length === 1) {
    // display the only product
    toDisplayProduct = productsArray[0];
  } else if (productsArray.length > 1) {
    // this part is where we determine which product do we choose to display when there is multiple products
    // by default bareboat always take precedence, then crewed, if both are absent, then we dun care and choose a random one to display
    let best_product_finder = new Map();
    for (var index = 0; index < productsArray.length; index++) {
      var cur_prd = productsArray[index];
      var cur_prd_name = cur_prd.name;
      // allPrdNames.push(cur_prd_name);
      best_product_finder.set(cur_prd_name, index);
    }
    // bareboat is the most important one
    if (best_product_finder.has('Bareboat')) {
      var bareboatIndex = best_product_finder.get("Bareboat");
      toDisplayProduct = productsArray[bareboatIndex];
    } else if (best_product_finder.has('Crewed')) {
      var crewedIndex = best_product_finder.get("Crewed");
      toDisplayProduct = productsArray[crewedIndex];
    } else {
      toDisplayProduct = productsArray[0];
    }


  }
  // var obligatoryFees = 0;
  var extras = toDisplayProduct.extras;


  var toReturn = [];
  const { startDate, endDate } = bookingData;


  for (var a = 0; a < extras.length; a++) {
    var cur_sub = extras[a];
    var temp_obli = cur_sub.obligatory;
    if (temp_obli === true) {
      var official_quantity = 0;
      var official_code = "line-item/obligatory-";
      var official_unit_price = 0;


      cur_unit = cur_sub.unit;
      if (cur_unit == "per booking") {
        official_quantity = 1;
      } else if (cur_unit == "per booking person") {
        //This part need to be changed
        official_quantity = 1;
      } else if (cur_unit == "per week") {
        official_quantity = Math.ceil(calculateQuantityFromDates(startDate, endDate, bookingUnitType) / 7);

      } else if (cur_unit == "per day") {

        official_quantity = calculateQuantityFromDates(startDate, endDate, bookingUnitType);

      } else if (cur_unit == "per day person") {
        official_quantity = calculateQuantityFromDates(startDate, endDate, bookingUnitType);
      } else if (cur_unit == "per week person") {
        official_quantity = Math.ceil(calculateQuantityFromDates(startDate, endDate, bookingUnitType) / 7);
      }
      official_unit_price = new Money(cur_sub.price * 100, "EUR");

      official_code = official_code + truncate(cur_sub.name, 20);

      var singleItem = {
        code: official_code,
        unitPrice: official_unit_price,
        quantity: official_quantity,
        includeFor: ['customer', 'provider'],
      };
      toReturn.push(singleItem);

    }
  }
  return toReturn;


}


// Here goes the temporary fuction for giving the price breakdown
// This will only calculate the total obligatory item prices without returning the detailed units

const tempresolveBookingManagerObligatoryFees = (listing, bookingData) => {
  // The bookingData is for the 
  const publicData = listing.attributes.publicData;
  // lesson learnt, retrieve the raw object first
  const productsArray = publicData && publicData.products ? publicData.products : [];
  // console.log(productsArray);
  var toDisplayProduct = null;
  var grandObligatoryFees = 0;
  if (productsArray.length === 1) {
    // display the only product
    toDisplayProduct = productsArray[0];
  } else if (productsArray.length > 1) {
    // this part is where we determine which product do we choose to display when there is multiple products
    // by default bareboat always take precedence, then crewed, if both are absent, then we dun care and choose a random one to display
    let best_product_finder = new Map();
    for (var index = 0; index < productsArray.length; index++) {
      var cur_prd = productsArray[index];
      var cur_prd_name = cur_prd.name;
      // allPrdNames.push(cur_prd_name);
      best_product_finder.set(cur_prd_name, index);
    }
    // bareboat is the most important one
    if (best_product_finder.has('Bareboat')) {
      var bareboatIndex = best_product_finder.get("Bareboat");
      toDisplayProduct = productsArray[bareboatIndex];
    } else if (best_product_finder.has('Crewed')) {
      var crewedIndex = best_product_finder.get("Crewed");
      toDisplayProduct = productsArray[crewedIndex];
    } else {
      toDisplayProduct = productsArray[0];
    }


  }
  
  var extras = toDisplayProduct.extras;
  const { startDate, endDate } = bookingData;
  for (var a = 0; a < extras.length; a++) {
    var cur_sub = extras[a];
    var temp_obli = cur_sub.obligatory;
    if (temp_obli === true) {
      var official_quantity = 0;
      cur_unit = cur_sub.unit;
      if (cur_unit == "per booking") {
        official_quantity = 1;
      } else if (cur_unit == "per booking person") {
        //This part need to be changed
        official_quantity = 1;
      } else if (cur_unit == "per week") {
        official_quantity = Math.ceil(calculateQuantityFromDates(startDate, endDate, bookingUnitType) / 7);

      } else if (cur_unit == "per day") {

        official_quantity = calculateQuantityFromDates(startDate, endDate, bookingUnitType);

      } else if (cur_unit == "per day person") {
        official_quantity = calculateQuantityFromDates(startDate, endDate, bookingUnitType);
      } else if (cur_unit == "per week person") {
        official_quantity = Math.ceil(calculateQuantityFromDates(startDate, endDate, bookingUnitType) / 7);
      }
      // official_unit_price = new Money(cur_sub.price * 100, "EUR");
      var curLineItemObligatoryFee=cur_sub.price * 100 * official_quantity;
      grandObligatoryFees=grandObligatoryFees+curLineItemObligatoryFee;

    }


  }
  
  console.log(grandObligatoryFees.toString());
  return grandObligatoryFees;


}



//this function serves as truncating the very long descriptions of the charges from booking manager.
function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};