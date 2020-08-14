import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';

import css from './BookingManagerPage.css';


const BookingManagerPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="About"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'BookingManagerPage',
        description: 'Description of this page',
        name: 'Booking Manager page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <h1>Booking Manager Booking</h1>
          {/* <img src={image} alt="company logo" /> */}
          <div>
            <NamedLink name="LandingPage">Go to home page</NamedLink>
            <iframe title="bmanager" width="100%" height="1000" frameborder="0" scrolling="auto" src="https://www.booking-manager.com/wbm2/page.html?companyid=4351&setlang=en" allowTransparency="true"></iframe>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default BookingManagerPage;