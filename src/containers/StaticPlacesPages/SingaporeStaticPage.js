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

import pic1 from './images/stjohnsisland.jpg';
import pic2 from './images/lazarusisland.jpg';
import pic3 from './images/lazarusisland2.jpg';
import pic4 from './images/kusuislandturtles.jpeg';
import pic5 from './images/pulauubin.jpg';
import pic6 from './images/pulauubin2.jpg';
import pic7 from './images/sistersisland.jpg';
import pic8 from './images/sistersisland2.jpg';
const IMAGES =
[{
        src: pic1,
        thumbnail: pic1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "A short 20 minutes ride away from the Marina near Sentosa and you're at St John's island"
},
{
        src: pic2,
        thumbnail: pic2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "A unique aerial view of Lazarus and its lush greenery"
},
{
        src: pic3,
        thumbnail: pic3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "The famous friendly fiends of St John's Island"
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Marvel at the many monuments set up for the turtles at this peaceful sanctuary"
},
{
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Get up close and personal to the dense woody mangrove systems as you kayak in Pulau Ubin"
},
{
  src: pic6,
  thumbnail: pic6,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "An aerial view of Pulau Ubin, while small in size - this island is home to an array of flora, fauna and people"
},
{
    src: pic7,
    thumbnail: pic7,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Embark on a inter-tidal walk to discover some of the criters that dwell on Sister's island"
},
{
    src: pic8,
    thumbnail: pic8,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Two sisters, two islands and a tragic story binding them together"
},
]

const SingaporeStaticPage = () => {

  // prettier-ignore
  return (
    <StaticPage
      title="SingaporeStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'SingaporeStaticPage',
        description: 'SingaporeStaticPage',
        name: 'SingaporeStaticPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Singapore</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}
          <Gallery images={IMAGES}/>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>While the tiny island is known for its grand skyscrappers, rich array of local cuisines and endless streets of shopping; there are many places of unseen beauty located at the southern tip of Singapore. A hop skip and a boat ride away, and you'll find yourself in a new type of paradise.</p>
            </div>

            <div className={css.contentMain}>
            <NamedLink name="SearchPage" to={{ search: '?address=Singapore&bounds=1.4778763957108%2C104.10644622388%2C1.09856456141626%2C103.491212211768' }} className={css.location}>
                <PrimaryButton type="submit">
                  Search Yachts in Singapore
            </PrimaryButton>
              </NamedLink>
              <h2>
              St John's Island
              </h2>

              <p>
              St John’s Island is home to Singapore’s famous feline friends, don’t worry they don’t bite. In fact, these docile creatures seem to prefer lounging about than interacting with humans.The island has also seen its fair share of history. What was once a quarantine centre for infectious diseases and later a drug rehabilitation centre, was transformed in 1975. The island was given a new lease of life, as an oasis where travellers enjoy swimming lagoons, beaches, picnic grounds, trekking routes and more. 
              </p>
              <p>There are holiday bungalows/chalets that can accommodate up to 10 people available for booking on the island. They even come with a kitchen, however there are no convenience stores. So do come prepared with food! For organised groups, Holiday Camp 5 offers accommodation for up to 60 people. It is equipped with basic cooking facilities, so you can self-cater or even have a BBQ.</p>

              <h2>
              Lazarus Island
              </h2>
              <p>
              A walk a way from St John's Island, Lazarus is a hidden gem at the southern tip of Singapore, this idyllic beach is perfect for picnics and exploration. Visitors can also swim and snorkel in the nearby regions and look out for the local fishes that roam the shores.
              </p>

              <h2>Kusu Island</h2>
              <p>Kusu Island is best known for its mythical tales of tortoises, thus the name “Kusu” meaning shelled creatures in Hokkien. Explore the scenic temple of Kusu island and marvel at the many tortoises that reside in the famous tortoise sanctuary. If you’re feeling adventurous, visitors may venture on the 152-step climb to the top of the island where the 3 keramats (holy shrines of Malay saints) reside. Many believe they grant wealth, health and fertility.</p>
              
              <h2>Pulau Ubin</h2>
              <p>Pulau Ubin is the place to be if you’re looking to connect with nature or take a stroll on the wildside. Visitors can take a glimpse at life of Singapore’s in the past through one of the last kampongs (villages) that still remain. For the thrill-seeker, once can grab a bike and cycle to the Chek Jawa Wetlands to observe the array of wildlife like carpet anemone and mangrove-dwelling fiddler crabs. 
              </p>

              <h2>Sister's Island</h2>
              <p>
              The island is known for its folktale of two sisters drowning at sea, but besides its intriguing origins the island is also best known for its ideal camping site and picnic area. Nature lovers can also head to the Sisters Island Marine Park, home to plenty of Singapore’s native marine biodiversity. 
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

export default SingaporeStaticPage;