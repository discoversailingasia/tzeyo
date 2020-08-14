import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
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
import css from './StaticPlacesPages.css';

import pic1 from './images/aothane2.jpg';
import pic2 from './images/ao-thalane.jpg';
import pic3 from './images/kohdamkai.jpg';
import pic4 from './images/Koh-Hong.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Kayak leisurely through Ao Thalane as you admire the island's lush greenery"
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Go for a more daring kayak by exploring the islands hidden caves"
},
 
{
        src: pic3,
        thumbnail: pic3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Can you spot the chicken?"
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Koh Hong East and its welcoming waters"
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
const KrabiStaticPages = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="KrabiStaticPages"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'KrabiStaticPages',
        description: 'KrabiStaticPages',
        name: 'KrabiStaticPages',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Krabi, Thailand</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Krabi is the perfect holiday destination for those looking for a relaxing area in southern Thailand. The province, located a waters stretch away from Phuket, features stunning scenery both inland and at sea. From pristine beaches to towering limestone cliffs, Krabi a great selection of natural assets that offer its visitors a wide array of leisure activities for all.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Ao Thalane
              </h2>

              <p>
              Ao Thalene is known for its intricate mangrove forest and beautiful limestone cliffs, the island provides for a unique kayaking experience as you venture into the unknown and enjoy the serene and quiet surroundings. 
              </p>

              <h2>
              Koh Dam Kai
              </h2>
              <p>
              As the name suggests, Koh Dam Kai or chicken island is known for it’s strange protruding shape that resembles the poultry’s head. It is a small island belonging to the Poda group of islands located about eight kilometres from Ao Nang in the province of Krabi. Take your famous snapshots at this peculiar island but be warned of the rocky cliffs and restricted areas for preservation. 
              </p>

              <h2>Koh Hong East</h2>
              <p>Koh Hong East is a small island off Krabi Coast, visitors are encouraged to sit back and laze on the virgin sands while taking in the crystal clear waters and soft sand beaches. Here you can enjoy swimming, kayaking, snorkelling, fishing and if you’re up to it - hiking. The island is also home to Than Bok Khorani National Park but is only open on Friday visits.
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

export default KrabiStaticPages;
