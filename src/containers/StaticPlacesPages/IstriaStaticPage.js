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

import pic1 from './images/dubro1.jpg';
import pic2 from './images/dubro2.jpg';
import pic3 from './images/dubro3.jpeg';
import pic4 from './images/dubro4.jpg';
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


const IstriaStaticPage = () => {

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
              <p>History buffs will have a field day at Pula as some of the best-preserved Roman ruins are found in this region, marvel at the Arena and the Temple of Augustus, some of the oldest buildings that have been around since the 20BC. Try out their italian cuisine infused with a Croatian twist and sip on the world's best malvasia wine. If you’re up for an adventure, venture to the north of the city to find Brijuni National park, a lush wooded island. Head to the south and you’ll reach Cape Kamejak, a jagged headland that provides for a serene moment.</p>
            </div>

            <div className={css.contentMain}>
              <h3>
              Poreč
              </h3>

              <p>
              Porec is the most popular holiday resort in Istria and is frequently named the top resort in Croatia by the Croatian National Tourist Office. There are over 100,000 beds available in the area, but hotels and other facilities are widely spread so the place never feels too crowded.

              </p>

              {/* <h3 className={css.subtitle}>Orasac</h3> */}
              <p>
              The main tourist areas are two bays south of the town, called Zelena (Green) and Plava (Blue) Laguna (lagoon). They are almost like small towns, with several hotels in each, as well as camping facilities, a marina and shopping and entertainment areas. Most visitors stay in one of the two.For swimming and sunbathing, head to nearby Sveti Nikola island which you can reach by a regular boat (the journey is only a few minutes).
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

export default IstriaStaticPage;
