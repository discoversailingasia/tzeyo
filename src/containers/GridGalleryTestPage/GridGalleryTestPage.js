import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import Gallery from 'react-grid-gallery';
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
import css from './GridGalleryTestPage.css';

import pic1 from './images/ao-thalane.jpg';
import pic2 from './images/Koh-Hong.jpg';
import pic3 from './images/KohYang.jpg';
import pic4 from './images/naka-noi-island-3.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "some description"
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: ""
},
 
{
        src: pic3,
        thumbnail: pic3,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
]


// import image from './taiwan13 edited.jpg';

// const BookingPanel = props => {
//   const {
//     isOwnListing,
//     unitType,
//     onSubmit,
//     timeSlots,
//     fetchTimeSlotsError,
//   } = props;
// }
const GridGalleryTestPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="GridTest"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'GridTest',
        description: 'GridTest',
        name: 'GridTest',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>GridTest</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
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

              
              
              
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>

              
            </div>
          </div>
          
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default GridGalleryTestPage;
