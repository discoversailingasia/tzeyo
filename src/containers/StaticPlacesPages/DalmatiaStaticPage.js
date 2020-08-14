import React from 'react';

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
} from '../../components';
import css from './StaticPlacesPages.css';

import pic1 from './images/dalma1.jpg';
import pic2 from './images/dalma2.jpg';
import pic3 from './images/dalma3.jpg';
import pic4 from './images/dalma4.jpg';
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


const DalmatiaStaticPage = () => {

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
          <h1 className={css.pageTitle}>Dalmatia, Croatia</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Take a dip at one of the many beaches along the bay or break a sweat by engaging in the plethora of sporting activities like sailing, rowing and mountain climbing. Thrill seekers can try out the increasingly popular biking slopes on the Kozjak mountain while more laid back travellers can dine at local restaurants while sipping some of their excellent wines.</p>
            </div>

            <div className={css.contentMain}>
              <h3>
              Makarska
              </h3>

              <p>
              Makarska is a combination of a cosmopolitan seaside town, with its pretty promenade, and popular family resort in summer. It is a perfect mix for travellers who want a bit of a mix of everything, from beaches to reasonably lively nightlife, as well as a bit of adventure (hiking on Mount Biokovo, which looms over Makarska impressively). The town is convenient  to reach from Split (and it’s often a stop on buses between Split and Dubrovnik). There are ferry and catamaran connections to Brac, although plenty of other day trip excursions to the local area (to the islands, to Split, and more) are also possible.

              </p>

              <h3 className={css.subtitle}>Sibenik</h3>
              <p>
              Sibenik is one of the larger port towns of Croatia. A narrow channel, the mouth of the river Krka, which pulls up to Skradin and the famous waterfalls, separates Sibenik from the open sea. In the old town, numerous well-preserved stone works of art from the Middle Ages have been preserved. On the harbor promenade below the famous cathedral cafes, restaurants and bars line up.
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

export default DalmatiaStaticPage;
