const Decimal = require('decimal.js');
const has = require('lodash/has');
const { types } = require('sharetribe-flex-sdk');
const { Money } = types;

const { getAmountAsDecimalJS, convertDecimalJSToNumber } = require('./currency');
const { nightsBetween, daysBetween } = require('./dates');
const LINE_ITEM_NIGHT = 'line-item/night';
const LINE_ITEM_DAY = 'line-item/day';


const axios = require('axios');
//the following library is for dev purposes only
var request = require('sync-request');
/** Helper functions for constructing line items*/

// this will be the real fuction in production, but i can't figure out how async works, and the telephone meeting is in 3 hours, have to come up with some primitive stuff to brush it over
function getBmData() {
  return axios.get('https://www.booking-manager.com/api/v2/prices', {
          headers: { Authorization: `Bearer 10ff-289195919e0df4eaaa6a51fe83e891d8e3ab4f7be4a7d745309c2186764a09388f18849e5537ddf583ec3097170eba6f1104c1ce83cd43cb4e6b4e46c53e2d6` },
          params:{
              dateFrom: '2020-09-09T00:00:000Z',
              dateTo:'2020-09-18T00:00:000Z',
              yachtId:'2965700610000104391'
          }
          
      }).then((res)=>{
        return res['data'];
      })
      
  
}

function tempRetrieveBm(yachtId, startTime, endTime){
  var res = request('GET', `https://www.booking-manager.com/api/v2/prices?dateFrom=${startTime}&dateTo=${endTime}&yachtId=${yachtId}`, {
  headers: { Authorization: `Bearer 10ff-289195919e0df4eaaa6a51fe83e891d8e3ab4f7be4a7d745309c2186764a09388f18849e5537ddf583ec3097170eba6f1104c1ce83cd43cb4e6b4e46c53e2d6` },
    
  });
  actualone=JSON.parse(res.getBody().toString());
  price=actualone[0]['price'];
  return price;
}
/**
 * Calculates lineTotal for lineItem based when the product is from booking manager.
 * The total will be `unitPrice * quantity`.
 *
 * @param {Money} unitPrice
 * @param {int} quantity
 *
 * @returns {Money} lineTotal
 */
exports.retrieveTotalPriceFromBookingManager = (yachtId, dateRange) => {
  // var yachtId = "2965700610000104391";
  var { startDate, endDate } = dateRange;
  // console.log(startDate.toISOString());
  // console.log(typeof(endDate));
  var price = tempRetrieveBm(yachtId,startDate.toISOString(),endDate.toISOString())*100;

  // getBmData().then(data=>{
  //   console.log(data[0]['price']);
    
  // })
  // return new Money(1000000,"EUR");
  // NOTE: We round the total price to the nearest integer.
  //       Payment processors don't support fractional subunits.

  
    
  return new Money(price, "EUR");
};


/**
 * Calculates lineTotal for lineItem based on quantity.
 * The total will be `unitPrice * quantity`.
 *
 * @param {Money} unitPrice
 * @param {int} quantity
 *
 * @returns {Money} lineTotal
 */
exports.calculateTotalPriceFromQuantity = (unitPrice, unitCount) => {
  const amountFromUnitPrice = getAmountAsDecimalJS(unitPrice);

  // NOTE: We round the total price to the nearest integer.
  //       Payment processors don't support fractional subunits.
  const totalPrice = amountFromUnitPrice.times(unitCount).toNearest(1, Decimal.ROUND_HALF_UP);
  // Get total price as Number (and validate that the conversion is safe)
  const numericTotalPrice = convertDecimalJSToNumber(totalPrice);

  return new Money(numericTotalPrice, unitPrice.currency);
};

/**
 * Calculates lineTotal for lineItem based on percentage.
 * The total will be `unitPrice * (percentage / 100)`.
 *
 * @param {Money} unitPrice
 * @param {int} percentage
 *
 * @returns {Money} lineTotal
 */
exports.calculateTotalPriceFromPercentage = (unitPrice, percentage) => {
  const amountFromUnitPrice = getAmountAsDecimalJS(unitPrice);

  // NOTE: We round the total price to the nearest integer.
  //       Payment processors don't support fractional subunits.
  const totalPrice = amountFromUnitPrice
    .times(percentage)
    .dividedBy(100)
    .toNearest(1, Decimal.ROUND_HALF_UP);

  // Get total price as Number (and validate that the conversion is safe)
  const numericTotalPrice = convertDecimalJSToNumber(totalPrice);

  return new Money(numericTotalPrice, unitPrice.currency);
};

/**
 * Calculates lineTotal for lineItem based on seats and units.
 * The total will be `unitPrice * units * seats`.
 *
 * @param {Money} unitPrice
 * @param {int} unitCount
 * @param {int} seats
 *
 * @returns {Money} lineTotal
 */
exports.calculateTotalPriceFromSeats = (unitPrice, unitCount, seats) => {
  if (seats < 0) {
    throw new Error(`Value of seats can't be negative`);
  }

  const amountFromUnitPrice = getAmountAsDecimalJS(unitPrice);

  // NOTE: We round the total price to the nearest integer.
  //       Payment processors don't support fractional subunits.
  const totalPrice = amountFromUnitPrice
    .times(unitCount)
    .times(seats)
    .toNearest(1, Decimal.ROUND_HALF_UP);

  // Get total price as Number (and validate that the conversion is safe)
  const numericTotalPrice = convertDecimalJSToNumber(totalPrice);

  return new Money(numericTotalPrice, unitPrice.currency);
};

/**
 * Calculates the quantity based on the booking start and end dates depending on booking type.
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {string} type
 *
 * @returns {number} quantity
 */
exports.calculateQuantityFromDates = (startDate, endDate, type) => {
  if (type === LINE_ITEM_NIGHT) {
    return nightsBetween(startDate, endDate);
  } else if (type === LINE_ITEM_DAY) {
    return daysBetween(startDate, endDate);
  }
  throw new Error(`Can't calculate quantity from dates to unit type: ${type}`);
};

/**
 *
 *  `lineTotal` is calculated by the following rules:
 * - If `quantity` is provided, the line total will be `unitPrice * quantity`.
 * - If `percentage` is provided, the line total will be `unitPrice * (percentage / 100)`.
 * - If `seats` and `units` are provided the line item will contain `quantity` as a product of `seats` and `units` and the line total will be `unitPrice * units * seats`.
 *
 * @param {Object} lineItem
 * @return {Money} lineTotal
 *
 */
exports.calculateLineTotal = lineItem => {
  const { code, unitPrice, quantity, percentage, seats, units,yachtId,bookingData } = lineItem;
  // console.log(typeof yachtId);
  if (quantity) {
    return this.calculateTotalPriceFromQuantity(unitPrice, quantity);
  //   return this.retrieveTotalPriceFromBookingManager(yachtId, bookingData);
  // } else if(quantity&&(yachtId=='undefined')){
  //   return this.calculateTotalPriceFromQuantity(unitPrice, quantity);
  }
  else if (percentage) {
    return this.calculateTotalPriceFromPercentage(unitPrice, percentage);
  } else if (seats && units) {
    return this.calculateTotalPriceFromSeats(unitPrice, units, seats);
  } else {
    throw new Error(
      `Can't calculate the lineTotal of lineItem: ${code}. Make sure the lineItem has quantity, percentage or both seats and units`
    );
  }
};

/**
 * Calculates the total sum of lineTotals for given lineItems
 *
 * @param {Array} lineItems
 * @retuns {Money} total sum
 */
exports.calculateTotalFromLineItems = lineItems => {
  const totalPrice = lineItems.reduce((sum, lineItem) => {
    const lineTotal = this.calculateLineTotal(lineItem);
    return getAmountAsDecimalJS(lineTotal).add(sum);
  }, 0);

  // Get total price as Number (and validate that the conversion is safe)
  const numericTotalPrice = convertDecimalJSToNumber(totalPrice);
  const unitPrice = lineItems[0].unitPrice;

  return new Money(numericTotalPrice, unitPrice.currency);
};

/**
 * Calculates the total sum of lineTotals for given lineItems where `includeFor` includes `provider`
 * @param {*} lineItems
 * @returns {Money} total sum
 */
exports.calculateTotalForProvider = lineItems => {
  const providerLineItems = lineItems.filter(lineItem => lineItem.includeFor.includes('provider'));
  return this.calculateTotalFromLineItems(providerLineItems);
};

/**
 * Calculates the total sum of lineTotals for given lineItems where `includeFor` includes `customer`
 * @param {*} lineItems
 * @returns {Money} total sum
 */
exports.calculateTotalForCustomer = lineItems => {
  const providerLineItems = lineItems.filter(lineItem => lineItem.includeFor.includes('customer'));
  return this.calculateTotalFromLineItems(providerLineItems);
};

/**
 * Constructs lineItems that can be used directly in FTW.
 * This function checks lineItem code and adds attributes like lineTotal and reversal
 * which are added in API response and some FTW components are expecting.
 *
 * This can be used when user is not authenticated and we can't call speculative API endpoints directly
 *
 * @param {Array} lineItems
 * @returns {Array} lineItems with lineTotal and reversal info
 *
 */
exports.constructValidLineItems = lineItems => {
  const lineItemsWithTotals = lineItems.map(lineItem => {
    const { code, quantity, percentage } = lineItem;

    if (!/^line-item\/.+/.test(code)) {
      throw new Error(`Invalid line item code: ${code}`);
    }

    // lineItems are expected to be in similar format as when they are returned from API
    // so that we can use them in e.g. BookingBreakdown component.
    // This means we need to convert quantity to Decimal and add attributes lineTotal and reversal to lineItems
    const lineTotal = this.calculateLineTotal(lineItem);
    return {
      ...lineItem,
      lineTotal,
      quantity: quantity ? new Decimal(quantity) : null,
      percentage: percentage ? new Decimal(percentage) : null,
      reversal: false,
    };
  });
  return lineItemsWithTotals;
};
