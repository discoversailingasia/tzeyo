import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import {  ExternalLink } from '../../components';

import css from './SectionFeedbacks.css';


// import drunkenSailor from './images/drunken_sailor.jpg';
// import indianSailor from './images/indian_sailor.jpg';
// import sgSailor from './images/sg_sailor.jpg';

import verifiedStandards from './images/verified_standards.png';
import bestPractice from './images/best practices test.png';
import sgCnCommerce from './images/sccci_logo.png';
import sgTboard from './images/stb logo.png';






class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <ExternalLink key="linkTocertsites" href={searchQuery} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
      <p>
          {/* <FormattedMessage id="SectionHowItWorks.part3Text" /> */}
          
          <FormattedMessage 
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }} />
      </p>
        {/* <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        /> */}
      </div>
    </ExternalLink>
  );
};

const SectionFeedbacks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionFeedbacks.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'International Bareboat Charter Standards - Verified Standards Certification (ISO 20410)',
          verifiedStandards,
          'https://www.ibcs-anchored.org/verifiedstandards/'
        )}
        {locationLink(
          'International Bareboat Charter Standards - Best Practice Certification (ISO 20410)',
          bestPractice,
          'https://www.ibcs-anchored.org/bestpractise/'
        )}
        {locationLink(
          'Certified Travel Agent in Singapore under the Singapore Tourism Board (TA Licence: 03370)',
          sgTboard,
          'https://www.stb.gov.sg/content/stb/en.html'
        )}
        {locationLink(
          'Member of the Singapore Chinese Chamber of Commerce and Industry',
          sgCnCommerce,
          'https://www.sccci.org.sg/'
        )}
      </div>
    </div>
  );
};

SectionFeedbacks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionFeedbacks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionFeedbacks;
