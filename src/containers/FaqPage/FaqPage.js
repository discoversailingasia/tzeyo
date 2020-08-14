import React from 'react';
// import config from '../../config';
// import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
//this page may contain certain testing playgrounds until i made a testing page, dun really think react is ideal for small scale projects:(
// import { BookingDatesForm } from '../../forms';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
//   ExternalLink,
} from '../../components';

import css from './FaqPage.css';
import image from './faq.jpg';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const FaqPage = () => {
//   const { siteTwitterHandle, siteFacebookPage } = config;
//   const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPage',
        description: 'FAQ',
        name: 'FAQ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Discover Sailing Asia (Lemlabs Asia Hong Kong Limited) Refund and Cancellation Policy
Your purchase does not automatically guarantee a reservation. Your purchase will be confirmed via email within one to two business days. The cancellation fee policy will take effect once you submit your reservation. If your purchase cannot be confirmed for any reason, we will fully refund your purchase without any additional charges. We recommend each customer read and review the cancellation policy and consider purchasing a Travel Insurance policy.</p>
            </div>

            <div className={css.contentMain}>
              <h3 className={css.subtitle}>Why choose TZEYO?</h3>
              <p>
              Unlike your typical boat rentals, TZEYO prides itself of it's ability to create a one-of-a-kind experience by providing both moments of relaxation and learning opportunities. Our skippers provides newcomers a first-hand experience of learning how to navigate the winds and manage the ropes while still leaving room for moments of serene and peace on calm waters. 
              </p>

              <h3>
              What CAN be Refunded:
              </h3>

              <p>
              Some tours may require a minimum number of travelers to operate. The affected traveler will be fully refunded or may choose a similar tour product as a substitute. Should this occur, it would be under very rare circumstances.
              <br/>
              Please note that the product substitute chosen by the traveler may be more expensive than the original product and therefore may be subject to an additional cost.
              <br/>
              Any additional refunds based on extenuating circumstances will depend on the individual tour operator.

              </p>

              <h3 className={css.subtitle}>What CANNOT be Refunded:</h3>

              <p>
              All hotel and tour schedules are arranged ahead of time. Any person failing to appear on the day of departure will not be refunded.
              <br/>
              No refund will be given for any portions of the tour unused by the traveler after tour departure regardless of circumstances.
              <br/>
              Airfare is completely non-refundable and non-changeable for tours when airfare is included in the final price.
              <br/>
              Hotel extensions and Instant Confirmation products (admission tickets, city passes, etc.) cannot be exchanged or refunded once confirmed.
              
              </p>
              <h3 className={css.subtitle}>How do I cancel a reservation?</h3>
              <p>
              We will process your cancellation/refund request within one to seven business days. We will NOT acknowledge any verbal / over-the-phone request or voice mail. Verbally speaking with our customer service representatives without filling out a request form will not guarantee that your cancellation has been processed or acknowledged. We will NOT accept email cancellations unless they have a complete, signed, and attached Cancellation Form.
              </p>

              <h3 className={css.subtitle}>
              I am stuck at stripe verification page when I want to set up my receive bank account, what can I do?
              </h3>

              <p>
              Different countries have different verification procedures and regulations, we are on our way in capturing all requirements, if this happens repeatly, Please approach our team.
              </p>


              {/* <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Saunatime
              </h3>
              <p>
                Saunatime is brought to you by the good folks at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch!
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p> */}
            </div>
          </div>
          {/* <BookingDatesForm
            className={css.bookingForm}
            formId="BookingPanel"
            submitButtonWrapperClassName={css.bookingDatesSubmitButtonWrapper}
            unitType={unitType}
            onSubmit={onSubmit}
            price={price}
            isOwnListing={isOwnListing}
            timeSlots={timeSlots}
            fetchTimeSlotsError={fetchTimeSlotsError}
          /> */}
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FaqPage;
