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

import pic1 from './images/ishigaki1.jpg';
import pic2 from './images/ishigaki2.jpg';
import pic3 from './images/kuroshima1.jpg';
import pic4 from './images/kuroshima2.jpg';
import pic5 from './images/kabirabay1.jpg';
import pic6 from './images/kabirabay2.jpg';
import pic7 from './images/iriomote1.jpg';
import pic8 from './images/iriomote2.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Shop till your heart's content at the various souvenir stores like - Eugelna Mall "
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Marvel at the bright, blue bridge of Ishgaki"
},
{
        src: pic3,
        thumbnail: pic3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Snorkel in the cool, clear waters of Kuroshima"
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "One of the many residences living on Kuroshima Island"
},
{
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "An aerial shot of the white soft sands of Kabira Bay"
},
{
  src: pic6,
  thumbnail: pic6,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Encounter some of the most majesitc creatures of the sea as you dive near Kabira Bay"
},
{
  src: pic7,
  thumbnail: pic7,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "A change of scenery from the bright blue to fresh green at Iromote Island"
},
{
  src: pic8,
  thumbnail: pic8,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Embrace the nature around you as you hike through the secluded nature of Iromote"
},
]

const IshigakiStaticPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="IshigakiStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'IshigakiStaticPage',
        description: 'IshigakiStaticPage',
        name: 'IshigakiStaticPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Ishigaki, Japan</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Ishigaki Island (石垣島, Ishigakijima) is the main island of the Yaeyama Islands and the region's transportation hub. One of the lesser known attractions in Japan, Ishigaki is perfect for a secluded sun-filled vacation with plenty of funtimes in beautiful turquoise waters.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Ishigaki City
              </h2>
              <p>
              Ishigaki city is an excellent place for souvenir shopping, trying out the local cuisine and getting a dose of Ishigaki history and culture. One of its strong points is the wide variety of restaurants and bars. Visit the Horinji temple which is the oldest wooden building in Okinawa or drop by the famous Southern Gate bridge to watch the sunset and get friendly with local cats. The big blue bridge is a 10min walk from the city center, add another 10min to get to the beach and the park where they sometimes have live events.
              </p>

              <h2>
              Kuroshima
              </h2>
              <p>
              Because the shape of the island resembles a heart, Kuroshima Island is also referred to as Heart Island.Rent a bike and explore the island, one can reach the Nakamoto Coast that stretches on the west side of the island in roughly 10 minutes by bicycle from the Kuroshima Port. At low tide, the inside of the coral reef turns into what appears to be a natural pool, allowing you to swim comfortably, and it is also a famous spot for snorkeling and diving.The island is also home to approximately 3000 roaming cattle, which is about 13 times the human population of the island. If you’re lucky, you may catch the Kuroshima Island Cow Festival which takes place on the last Sunday of February each year.
              </p>

              <h2>Kabira Bay</h2>
              <p>Famed for its beautiful white sand beaches as well as a popular dive site for Manta Ray sightings, this beach is a must visit when you are at Ishigaki. Once there, you can snorkel at the surrounding bay or use a dinghy to explore the mangroves around the bay.</p>
              
              <h2>Iriomote</h2>
              <p>Iriomote is the biggest Island to the west of Ishigaki, go on an adventure exploring the island. Or patronize the numerous restaurants serving local food  or opt for a river canoe tour on the Urauchi river, the longest river in the Okinawa Prefecture. You can also rent a bicycle to explore the island at a leisurely pace with your fellow adventurers and catch a glimpse of the endangered Iriomote Wildcat on the prowl for its next meal. </p>

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

export default IshigakiStaticPage;
