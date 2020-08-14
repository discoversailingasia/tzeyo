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
  NamedLink,
  PrimaryButton,
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


const DubrovnikStaticPage = () => {

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
          <h1 className={css.pageTitle}>Croatia, Dubrovnik</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>A fortified city built on rock, Dubrovnik first developed as a fishing settlement (Ragusium) and with its city walls and towers it has enchanted visitors for centuries, whether they came by sea, by land or (now) by air Dubrovnik, a magnificent city enclosed by stone walls, was an independent republic up until the arrival of Napoleon.</p>
            </div>

            <div className={css.contentMain}>
            <NamedLink name="SearchPage" to={{ search: '?address=Dubrovnik%2C%20Dubrovnik-Neretva%2C%20Croatia&bounds=42.779626%2C18.160345%2C42.620914%2C17.828953' }} className={css.location}>
                <PrimaryButton type="submit">
                  Search Yachts in Dubrovnik
            </PrimaryButton>
              </NamedLink>

              <p>
              Established in the 7th century, it flourished during the 15th and 16th century thanks to its mercantile skill, a powerful fleet and successful diplomacy. With its impeccably preserved ‘Stradun’, seventeen churches, Orlando’s
column, Onofrio’s fountain, and the oldest synagogue in Europe, Dubrovnik is a unique city — not only in the Mediterranean, but in the whole world.

              </p>

              <h3 className={css.subtitle}>Orasac</h3>
              <p>
              For a unique diving and snorkelling experience, head to Orasac Bay to witness its crystal jade waters and lush green grasslands. Patronise the nearby restaurants for a treat of Dalmatian cuisines or take a breather at their array of spas. The ride from the town of Dubrovnik should take about 15 mins to reach
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

export default DubrovnikStaticPage;
