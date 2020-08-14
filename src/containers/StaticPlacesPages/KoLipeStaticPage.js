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

import pic1 from './images/kohyang2.png';
import pic2 from './images/kohadang1.jpg';
import pic3 from './images/KohYang.jpg';
import pic4 from './images/kohadang2.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Scenic views of Koh Yang seen from Koh Adang"
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Grassy cliff view from Koh"
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
const KoLipeStaticPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="KoLipeStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'KoLipeStaticPage',
        description: 'KoLipeStaticPage',
        name: 'KoLipeStaticPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Thailand, Ko Lipe</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Koh Lipe is a small L-shaped island located in the southern Thailand’s Satun Province near the Thailand/Malaysia border. It belongs to the Adang-Rawi Archipelago, situated on the outskirts of the Tarutao National Marine Park.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Koh Yang
              </h2>

              <p>
              This exceptional site is only accessible by tender through a cave leading you on an inside open lake surrounded by a 100 m cliff (in Thai, Hong means room). When you visit Koh Yang, it's either for record-breaking snorkelling around the island or its wonders deep below. This island while lacking in powder-soft white beaches makes up  for it’s forests and high cliff sceneries, thus adventurers are encouraged to try venturing for a hike instead of a typical stroll on the beach. 
              </p>

              <h2>
              Koh Adang
              </h2>
              <p>
              Being the second biggest island within the Tarutao National Park, this island surely delivers in gigantic heaps of beauty and awe! Spend the day in these crystal waters, that basically look like a swimming pool, and enjoy hours in the sun, swimming and snorkelling around the area. If you're feeling adventrous, trek up the mountian to find three amazing view points of the island. 

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

export default KoLipeStaticPage;
