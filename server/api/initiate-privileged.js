const { transactionLineItems } = require('../api-util/lineItems');
const { getSdk, getTrustedSdk, handleError, serialize } = require('../api-util/sdk');

module.exports = (req, res) => {
  const { isSpeculative, bookingData, bodyParams, queryParams } = req.body;

  const listingId = bodyParams && bodyParams.params ? bodyParams.params.listingId : null;

  const sdk = getSdk(req, res);
  let lineItems = null;

  sdk.listings
    .show({ id: listingId })
    .then(listingResponse => {
      const listing = listingResponse.data.data;
      lineItems = transactionLineItems(listing, bookingData);
      console.log("Now at initiate privilidged stage!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(lineItems);

      return getTrustedSdk(req);
    })
    .then(trustedSdk => {
      const { params } = bodyParams;

      // Add lineItems to the body params
      const body = {
        ...bodyParams,
        params: {
          ...params,
          lineItems,
        },
      };

      if (isSpeculative) {
        console.log("speculative");
        return trustedSdk.transactions.initiateSpeculative(body, queryParams);
      }
      // console.log("not speculative");
      return trustedSdk.transactions.initiate(body, queryParams);
    })
    .then(apiResponse => {
      const { status, statusText, data } = apiResponse;
      console.log(data);
      res
        .status(status)
        .set('Content-Type', 'application/transit+json')
        .send(
          serialize({
            status,
            statusText,
            data,
          })
        )
        .end();
    })
    .catch(e => {
      handleError(res, e);
    });
};
