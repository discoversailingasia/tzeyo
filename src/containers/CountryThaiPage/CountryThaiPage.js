import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
//this page may contain certain testing playgrounds until i made a testing page, dun really think react is ideal for small scale projects:(
// import { BookingDatesForm } from '../../forms';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  SectionThaiTemp,
} from '../../components';

import css from './CountryThaiPage.css';
import image from './thai.jpg';

const CountryThaiPage = () => {
  

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Discovery Sailing Asia',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Thailand</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            {/* <div className={css.contentSide}>
              <p>In addition to conducting Discover Sailing cruises, we also operate sailing holidays and race charters for customers who may be interested in destinations around Hong Kong, Phillipines, Taiwan, Japan and more recently - Singapore.</p>
            </div> */}

            <div className={css.contentMain}>
              <h2>
              We are one of the leading companies conducting Discover Sailing Programs in Hong Kong, going on to Asia.
              </h2>
              <div className={css.sectionContent}>
                <SectionThaiTemp />
              </div>
              

              

              
              
              
              

              
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

export default CountryThaiPage;
