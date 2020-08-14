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

import pic1 from './images/kohphiphi.jpg';
import pic2 from './images/kohphiphi2.jpg';
import pic3 from './images/naka-noi-island-3.jpg';
import pic4 from './images/kohmaiphai.jpg';
import pic5 from './images/kohmaiphai2.jpg';
import pic6 from './images/khaophingkan.jpg';
import pic7 from './images/kohlawa.jpg';
import pic8 from './images/kohlawa2.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Long-tail boats lined-up against the shore of Koh Phi Phi Don"
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "A view of Koh Phi Phi Don from its smaller counterpart"
},
 
{
        src: pic3,
        thumbnail: pic3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "An aerial view of Koh Nahka Noi island and its deep turquoise waters"
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Koh Mai Phai and a view of its lucious greenery"
},
{
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Visitors snorkelling near the cliff edges of Koh Mai Phai"
},
{
  src: pic6,
  thumbnail: pic6,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Recreate your own perfect James Bond moment at Khao Ping Kan"
},
{
  src: pic7,
  thumbnail: pic7,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "A perfect picnic place at the secluded beaches of Koh Lawa"
},
{
  src: pic8,
  thumbnail: pic8,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "An alternative view of Koh Lawa, explore the green of this quaint gem"
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
const PhuketStaticPage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="PhuketStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PhuketStaticPage',
        description: 'PhuketStaticPage',
        name: 'PhuketStaticPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Phuket, Thailand</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Phuket is among the world’s finest beach destinations, with fine white sands, nodding palm trees, glittering seas and lively towns. It has something for a wide array of tastes and budgets, with hundreds of hotels to choose from, an eclectic choice of dining and plenty of partying options.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Koh Phi Phi Don
              </h2>
              <NamedLink name="SearchPage" to={{ search: '?address=Phuket%2C%20Phuket%2C%20Thailand&bounds=7.9300952193%2C98.416271%2C7.8686562369%2C98.361443515' }} className={css.location}>
                <PrimaryButton type="submit">
                  Search Yachts in Phuket
            </PrimaryButton>
              </NamedLink>

              <p>
              Located off the coast of Phuket and one of the Koh Phi Phi islands, Koh Phi Phi Don is a large archipelago that is famous for its pristine beaches and crystal clear waters. Catch a tan on these white sandy beaches or set-up a picnic as you enjoy the tropical scenery. 
              </p>

              <h2>
              Koh Nakha Noi
              </h2>
              <p>
              Situated approximately 25KMs north of Phuket City, Koh Nakha Noi is known for its idyllic beaches and is home to pearl farms that are public all year round. It is fringed with coconut trees and all visitors at some point are encouraged to sit back and enjoy the sunset over the islands of Phang Nga Bay at least once in their lifetime.
              </p>

              <h2>Koh Mai Phai</h2>
              <p>Ko Mai Phai Island is an outlying island of the Great Phi Phi Islands. Located in the northeast of Great Phi Phi Islands, the island must be reached via a half-hour boat trip from Tonsai Bay Pier. The island is best known for its lush bamboo forest and white sandy beaches.. Visitors are encouraged to kick back and admire the clear jade waters and perfectly maintained natural features. If you’re up to it, you may also snorkel in nearby surroundings to look out for fascinating fishes swimming near the shore.</p>
              
              <h2>Khao Phing Kan</h2>
              <p>Khao Phing Kan, or better known as James Bond Island,  consists of two twin islands in the east and west connected by a sandy beach. This island was featured in the 1974 James Bond movie, “The Man with the Golden Gun”, while boats are forbidden from getting too close to the islands visitors are still encouraged to bring a camera to take some snapshots of the magnificent formations and admire the lush surrounding vegetation.
              </p>

              <h2>Koh Lawa</h2>
              <p>
              Koh Lawa island is a hidden gem that is part of the national parks group, “Ao Phang Nga National Park”, the quiet serene beach is ideal for having romantic picnics or simply catching a tan without the hustle and bustle of people. Visitors can also snorkel and swim with the local fishes in the waters while admiring the crystal clear waters.
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

export default PhuketStaticPage;
