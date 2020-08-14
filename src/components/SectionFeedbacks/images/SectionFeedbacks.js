import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionFeedbacks.css';


import malayImage from './images/malay_temp.jpg';
import taiwanImage from './images/location_taiwan.jpg'
import hongkongImage from './images/yacht_location_hongkong.jpg';
import singaporeImage from './images/yacht_location_singapore.jpg';
import thaiImage from './images/yacht_location_thailand.jpg';
import chinaImage from './images/yacht_location_china.jpg';



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
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
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
        {locationLink(
          'Singapore',
          singaporeImage,
          '?address=Singapore&bounds=1.47792089869855%2C104.406654862095%2C1.13085662018305%2C103.574203823519'
        )}
        {locationLink(
          'Thailand',
          thaiImage,
          '?address=Thailand&bounds=20.4649449359772%2C105.636713%2C5.61341513823121%2C97.3435210006002'
        )}
        {locationLink(
          'China',
          chinaImage,
          '?address=People%27s%20Republic%20of%20China&bounds=53.560711991333%2C134.77281099468%2C18.0608510186141%2C73.4998560298202'
        )}
        {locationLink(
          'HongKong',
          hongkongImage,
          '?address=HongKong&bounds=22.5735499907553%2C114.504522269355%2C22.1343230695576%2C113.773493896307'
        )}
        {locationLink(
          'TaiWan',
          taiwanImage,
          '?address=Taiwan&bounds=26.4734819995328%2C122.106196095058%2C21.8038086056393%2C118.124999019637'
        )}
        {locationLink(
          'Malaysia',
          malayImage,
          '?address=Malaysia&bounds=7.47440619999843%2C119.369520698379%2C0.854587010151078%2C99.5409101022056'
        )}
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
