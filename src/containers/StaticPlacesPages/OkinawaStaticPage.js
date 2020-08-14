import React from 'react';
// import config from '../../config';
// import { twitterPageURL } from '../../util/urlHelpers';
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
  PrimaryButton,
  NamedLink,
  // ExternalLink,
} from '../../components';
import css from './StaticPlacesPages.css';

import pic1 from './images/nagannu1.jpg';
import pic2 from './images/nagannu2.jpg';
import pic3 from './images/zamamishima.jpg';
import pic4 from './images/aka.jpg';
import pic5 from './images/gerumashima.jpg';
import pic6 from './images/kumejima1.jpg';
import pic7 from './images/kemujima2.jpg';
import pic8 from './images/aguni.jpg';
const IMAGES =
  [{
    src: pic1,
    thumbnail: pic1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Go for a dive in the crystal clear waters of Zamami Shima"
  },
  {
    src: pic2,
    thumbnail: pic2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "An aerial view of Nagannu's crystal clear waters"
  },
  {
    src: pic3,
    thumbnail: pic3,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "A view of Zamami Shima island"
  },
  {
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Laze on the soft white sandy beaches of Aka Island"
  },
  {
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Take a hike to the highest point of Geruma Shima to see a view of Aka Island"
  },
  {
    src: pic6,
    thumbnail: pic6,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Get first hand experience learning how to make Kumejima-tsumugi by professionals"
  },
  {
    src: pic7,
    thumbnail: pic7,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "An aerial view of Kume Island's blend of greenery and pristine shores"
  },
  {
    src: pic8,
    thumbnail: pic8,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Marvel at Aguni's magnificient arches and various land formations"
  },
  ]

const OkinawaStaticPage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="OkinawaStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'OkinawaStaticPage',
        description: 'OkinawaStaticPage',
        name: 'OkinawaStaticPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Okinawa, Japan</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES} />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Consisting of 160 large and small islands including 49 inhabited islands, Okinawa is the perfect place for a water sports and cultural experience all in one location. Laze around on its white sandy beaches or marvel at the islands intricate textiles, Okinawa is the ideal location for your next vacation.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Zamami Shima
              </h2>
              <NamedLink name="SearchPage" to={{ search: '?address=Okinawa%20Shi%2C%20Okinawa%2C%20Japan&bounds=26.4218354847613%2C127.855569165678%2C26.3038293729189%2C127.772065657983' }} className={css.location}>
                <PrimaryButton type="submit">
                  Search Yachts in Okinawa
            </PrimaryButton>
              </NamedLink>

              <p>
                and provides great visibility, there are hotels and restaurants on the island which provides some of the best local food. Zamami is also famous for Furuzamami Beach and Ama Beach, both providing all-year-round diving due to the pristine quality of its waters. This island also has a place in history as the first place U.S. troops landed in World War 2.
              </p>

              <h2>
                Nagannu
              </h2>
              <p>
                Famed for its beautiful white sand beaches as well as a popular snorkelling site. It's located only 12 miles from the Marina (approx. 2-3hr sail). One can easily anchor off the bay and proceed to go snorkeling / scuba diving or use the Dinghy to explore the bay. This peaceful and almost inhibited beach provides for the ideal pictures with its crystal clear waters and impressive coral reefs.
              </p>

              <h2>Aka and Geruma Shima</h2>
              <p>These two islands are  connected by a bridge and very close to Zamami. They are smaller islands, but still have a post office, medical clinic, and a couple of small stores. Aka's population is about 300 and Geruma's about 60. There is a road across Aka leading to many observatories. There is also a road across Geruma to the village, then across a bridge to the airport and an observatory on Fukaji island. These two islands are also unique for holding a population of Kerama deer, which were imported from Kyushu 400+ years ago. If you're out in the village in the morning or evening you'll have a good chance of seeing them!</p>

              <h2>Kumejima</h2>
              <p>Kume Island is often said to be one of the most beautiful of the Okinawa Islands. It is well known for its textiles, called Kumejima-tsumugi which are designated as an important intangible cultural property of Japan.
              The town is also known for its Kumesen Awamori (Okinawan sake) and deep sea water. Kumejima's main industries are sugar cane (sato-kibi), and deep seawater Products.
              </p>
              <p>
                Historically due to Kume's abundance of freshwater, rice was once extensively cultivated. During the time of the Ryukyu Kingdom, Kume Island was often visited by Chinese envoys called "sapposhi" on their way to Shuri Castle on Okinawa Island. When the Ryukyu Kingdom was annexed by Japan, many noble families moved from Shuri to Kume. While there, be sure to visit Uezu House which is a traditional Ryukyuan Governor's house dating back hundreds of years. The beach is surrounded by pure-white sand and an emerald green ocean as far as the eye can see. The contrast between the white and azure is said to be the most beautiful in the East, and the beach is most suitably called a tropical paradise.
              </p>

              <h2>Aguni Shima</h2>
              <p>
                Aguni Island is located approximately 60 km northwest of Naha, Okinawa. The chalky white walls of volcanic rock that stand on the island serve as a reminder of its history as a volcanic island many tens of thousands of years ago and are but one of the attractions that can be seen only here among the remote Okinawa islands. “Aguni Salt”, is made in the northern part of the island, here and you can take a factory tour to learn more about the product.
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

export default OkinawaStaticPage;
