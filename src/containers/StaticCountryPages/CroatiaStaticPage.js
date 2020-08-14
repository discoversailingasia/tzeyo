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

import css from './StaticCountryPages.css';
import topImage from './croatia.jpg';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const CroatiaStaticPage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="Croatia"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'Croatia',
        description: 'Croatia',
        name: 'Croatia page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Croatia</h1>
          <img className={css.coverImage} src={topImage} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            {/* <div className={css.contentSide}>
              <p>In addition to conducting Discover Sailing cruises, we also operate sailing holidays and race charters for customers who may be interested in destinations around Hong Kong, Phillipines, Taiwan, Japan and more recently - Singapore.</p>
            </div> */}

            <div className={css.contentMain}>
              {/* <h2>
              We are one of the leading companies conducting Discover Sailing Programs in Hong Kong, going on to Asia.
              </h2> */}

              <p>
              In the last ten years yacht charter in Croatia has really taken off, and Croatia has become one of the most popular nautical destination for a large number of yachtsmen. Many of them year after year choose to spend their vacation at sea enjoying all the benefits of the Croatian Adriatic coast.
              </p>

              

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

export default CroatiaStaticPage;
