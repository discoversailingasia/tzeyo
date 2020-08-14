import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

// import helsinkiImage from './images/location_helsinki.jpg';
// import rovaniemiImage from './images/location_rovaniemi.jpg';
// import rukaImage from './images/location_ruka.jpg';
// import malayImage from './images/malay_temp.jpg';
// import taiwanImage from './images/location_taiwan.jpg'
// import hongkongImage from './images/yacht_location_hongkong.jpg';
import croatiaImage from './images/dubro1.jpg';
import nagannuImage from './images/nagannu1.jpg';

import singaporeImage from './images/yacht_location_singapore.jpg';
import thaiImage from './images/yacht_location_thailand.jpg';
// import chinaImage from './images/yacht_location_china.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

// to use when searching some links
// const locationLink = (name, image, searchQuery) => {
//   const nameText = <span className={css.locationName}>{name}</span>;
//   return (
//     <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
//       <div className={css.imageWrapper}>
//         <div className={css.aspectWrapper}>
//           <LazyImage src={image} alt={name} className={css.locationImage} />
//         </div>
//       </div>
//       <div className={css.linkText}>
//         <FormattedMessage
//           id="SectionLocations.listingsInLocation"
//           values={{ location: nameText }}
//         />
//       </div>
//     </NamedLink>
//   );
// };

const locationLinkBackUp = (name, image, staticLink) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name={staticLink} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};


const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLinkBackUp(
          'Singapore',
          singaporeImage,
          'SingaporeStaticPage'
        )}
        {locationLinkBackUp(
          'Thailand',
          thaiImage,
          'PhuketStaticPage'
        )}
        {/* {locationLink(
          'China',
          chinaImage,
          '?address=People%27s%20Republic%20of%20China&bounds=53.560711991333%2C134.77281099468%2C18.0608510186141%2C73.4998560298202'
        )} */}
        
        {locationLinkBackUp(
          'Dubrovnik, Croatia',
          croatiaImage,
          'DubrovnikStaticPage'
        )}
        {locationLinkBackUp(
          'Okinawa, Japan',
          nagannuImage,
          'OkinawaStaticPage'
        )}
        {/* {locationLink(
          'Malaysia',
          malayImage,
          '?address=Malaysia&bounds=7.47440619999843%2C119.369520698379%2C0.854587010151078%2C99.5409101022056'
        )} */}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
