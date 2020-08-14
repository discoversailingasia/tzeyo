import React from 'react';  
import {
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
    // NamedLink,
    // ExternalLink,
    SectionHeroRolling
} from '../../components';

import css from './MaintenancePage.css';
import image from './maintenancepage2.png';
import StaticPage from '../StaticPage/StaticPage';
import TopbarContainer from '../TopbarContainer/TopbarContainer';

const MaintenancePage = () => {
    return (
      <StaticPage
        className={css.root}
        title="About"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'MaintenancePage',
          description: 'Description of this page',
          name: 'Invalid Page',
        }}
      >
        
        
        
        <LayoutSingleColumn>
          
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>
          <LayoutWrapperMain className={css.staticPageWrapper}>
            <h1 className={css.MaintenancePage}>Invalid Page</h1>
            <SectionHeroRolling/>
            
            
            <img className={css.coverImage} src={image} alt="sample"/>
            
          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </StaticPage>
    );
  };
  
  export default MaintenancePage;