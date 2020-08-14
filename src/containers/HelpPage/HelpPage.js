import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import config from '../../config';
// import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import { FormattedMessage } from '../../util/reactIntl';
//this page may contain certain testing playgrounds until i made a testing page, dun really think react is ideal for small scale projects:(
// import { BookingDatesForm } from '../../forms';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  //   ExternalLink,
} from '../../components';

import css from './HelpPage.css';
import image from './help2.jpg';
// import test from './test.png';
// import test1 from './test1.png';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const HelpPage = () => {
  //   const { siteTwitterHandle, siteFacebookPage } = config;
  //   const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  // this page pretty much sums up my current situation
  // prettier-ignore
  return (
    <StaticPage
      title="HELP"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpPage',
        description: 'Help',
        name: 'Help page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Information for Skippers</h1>
          <img className={css.coverImage} src={image} alt="what happened?" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                <br />
              </p>
            </div>

            <div className={css.contentMain}>

              <h3 className={css.subtitle}> How do I create an account? Why do I need a profile and a profile picture?</h3>
              <p>To create an account on TZEYO, go to the homepage and click on "Sign-Up" (top right hand side of your screen). Fill in your email address and choose a password.
              <br />
              A complete profile allows us to identify you on TZEYO and allows renters to contact you by email or on the phone once a booking is confirmed. Until a booking is paid and confirmed, the renters will only be able to see your first name (not your surname) and your profile picture. Don't forget to add a profile picture! A boat owner with a profile picture is twice as much likely to receive booking requests (it helps the renter trust you).
              </p>

              <h3>I wish to make my listings based on differential pricing, is it possible? </h3>
              <p>
                Currently your yachts can only be charged at fixed rates per day, we are gradually adding more pricing models for you, please stay tuned.
              <br />

                <h3> My yacht is already insured. Does it need a different insurance for peer to peer charters?</h3>
                <p>In the case of a rental "without skipper", that is without you on board as a skipper, your boat must be covered by insurance for "peer-to-peer rental". You can get this through your current insurance company. For any rental "with skipper", that is with you on board in the context of a 'Co-Sailing' (ie shared sailing) arrangement, you need to ask your insurance to cover your Co-Sailing activities. You are in charge and thus responsible for the boat.
              </p>

                <h3 className={css.subtitle}>For more information, please <NamedLink name="ContactPage" className={css.link}>
                  <FormattedMessage id="Footer.toContactPage" />
                </NamedLink> our team </h3>

                <br />

                <NamedLink name="ContactPage" className={css.link}>
                  <img className={css.coverImage} src={image} alt="what happened?" />
                </NamedLink>

                {/* <Container>
                  <Row>
                    <Col>
                      <Image src={test} fluid />
                    </Col>
                    <Col>
                      <Image src={test1} fluid />
                    </Col>
                    
                  </Row>
                </Container> */}
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

export default HelpPage;
