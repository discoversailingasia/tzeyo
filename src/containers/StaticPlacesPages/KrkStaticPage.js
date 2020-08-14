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

import pic1 from './images/krk1.jpg';
import pic2 from './images/krk2.jpg';
import pic3 from './images/krk3.jpg';
import pic4 from './images/krk4.jpg';
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


const KrkStaticPage = () => {

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
          <h1 className={css.pageTitle}>Croatia, Istria</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>The island of Krk is the biggest island of the Adriatic Sea occupying the area of 406km2. Emerge yourself in the culture of a thousand year old town by learning more about the heritage of Croatia. Or kick back and relax at the few sandy beaches on Krk island like Baska beach. Treat yourself for a unique spa treatment at Soline bay, best known for its healing mud with organic properties. More adventurous travellers may even venture to secluded coves, some only accessible by boat or sometimes by foot using the narrow pathways leading through island vegetation.</p>
            </div>

            <div className={css.contentMain}>
              <h3>
              Punat
              </h3>

              <p>
              Punat is a small town with 1800 inhabitants located on the Southern coast of the island of Krk. The view of the town, whether it is approached from the sea or land, is unusual: the town is hedged in by the coast with an extremely deep bay called Puntarska draga, where a miniature island of Kosljun is located, along with a Franciscan monastery.Break away from the business of life by relaxing on the beaches or shopping at nearby stores, here you will find some of the best olives in Croatia. 

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

export default KrkStaticPage;
