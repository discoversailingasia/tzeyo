import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
//this page may contain certain testing playgrounds until i made a testing page, dun really think react is ideal for small scale projects:(
// import { BookingDatesForm } from '../../forms';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './taiwan13 edited.jpg';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Discovery Sailing Asia',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Us</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>In addition to conducting Discover Sailing cruises, we also operate sailing holidays and race charters for customers who may be interested in destinations around Hong Kong, Phillipines, Taiwan, Japan and more recently - Singapore.</p>
            </div>

            <div className={css.contentMain}>
            
              <h2>
              We are one of the leading companies conducting Discover Sailing Programs in Hong Kong, going on to Asia.
              </h2>

              <p>
              Our instructors are professionally certified Sailors with decades of sailing and racing experience and we have been helping people who want to learn to sail in Asia by providing a full range of sailing courses and lessons. Our sailing courses are run on a friendly yet professional basis with experienced instructors who will make your sailing lessons both fun and memorable.
              </p>

              <h3 className={css.subtitle}>Why choose us?</h3>
              <ol>
                <li>Based in a beautiful location only ten minutes from the best training ground for sailing courses Hong Kong has to offer</li>
                <li>Instructors and Crew picked for their passion for teaching, knowledge, endless patience and sense of humour enabling them to deliver the best sailing courses in Hong Kong</li>
                <li>An unrivaled range of comfortable training yachts from cruisers to racing boats</li>
                <li>Great value! We don't believe in charging you for extra meals, the on-board meals and beverages will be provided by us.</li>
                <li>Plenty of scope to consolidate the lessons learnt on sailing courses through distance cruises, discounted bare boat yacht charters or of course you can just come back for a refresher week or weekend sailing course at any time</li>
              </ol>

              {/* <p>
              Based in a beautiful location only ten minutes from the best training ground for sailing courses Hong Kong has to offer
              <br/>
              Instructors and Crew picked for their passion for teaching, knowledge, endless patience and sense of humour enabling them to deliver the best sailing courses in Hong Kong
              <br/>
              An unrivaled range of comfortable training yachts from cruisers to racing boats
              <br/>
              Great value... We don't believe in charging you extra for meals. The on-board meals and beverages are provided by us.
              <br/>
              Plenty of scope to consolidate the lessons learnt on sailing courses through distance cruises, discounted bare boat yacht charter or of course you can just come back for a refresher week or weekend sailing course at any time
              <br/> 


              </p> */}
              
              
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
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

export default AboutPage;
