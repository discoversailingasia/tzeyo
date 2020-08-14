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

import css from './ContactPage.css';
// import image from './sample1.jpeg';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const ContactPage = () => {
//   const { siteTwitterHandle, siteFacebookPage } = config;
//   const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Contact Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactPage',
        description: 'Contact Details',
        name: 'Contact page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          {/* <h1 className={css.pageTitle}>Experience voyage like never before.</h1> */}
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}

          <div className={css.contentWrapper}>
            {/* <div className={css.contentSide}>
              <p>In addition to conducting Discover Sailing cruises, we also operate sailing holidays and race charters for customers who may be interested in destinations around Hong Kong, Phillipines, Taiwan, Japan and more recently - Singapore.</p>
            </div> */}

            <div className={css.contentMain}>
              <h2>
              Below are contact details for Discover Sailing Asia.
              </h2>
              {/* oh dear, vat is happening */}

              

              <h3 className={css.subtitle}>Singapore</h3>

              <p>
              Chong Wei Yong
              <br/>
              WhatsApp: +852 6012 3068
              <br/>
              Wechat ID: chongweiyong
              <br/>
              Line ID: chongweiyong
              <br/>
              weiyong.chong@discoversailingasia.com
              <br/>
              weiyongchong@gmail.com

              <br/>
              <br/>
              <br/>
              Audrey Tan
              <br/>
              +65 9724 2958
              <br/>
              audrey.tan@discoversailingasia.com
              <br/>
              audreytanst@gmail.com 
              <br/>


              <br/>
              Linden Chong
              <br/>
              +65 9680 9776
              <br/>
              linden.chong@discoversailingasia.com
              <br/>
              pfs.lindenchong@gmail.com 
              </p>

              {/* <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p> */}

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

export default ContactPage;
