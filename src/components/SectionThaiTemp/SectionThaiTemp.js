import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionThaiTemp.css';


import aoThalane from './images/ao-thalane.jpg';
import kohHong from './images/Koh-Hong.jpg'
import kohYang from './images/KohYang.jpg';
import naka from './images/naka-noi-island-3.jpg';


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

const SectionThaiTemp = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      {/* <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div> */}
      <div className={css.locations}>
        {locationLink(
          'Koh Nakha Noi',
          naka,
          '?address=Nakha%20Noi%20%28Naga%20Noi%29%20Beach%20Camp%2C%20Thalang%2C%20Phuket%2083110%2C%20Thailand&bounds=8.05023230554143%2C98.47831130962554%2C8.01429969445857%2C98.44202269037446'
        )}
        {locationLink(
          'Koh Yang',
          kohYang,
          '?address=Koh%20Nang%20Yuan%20Viewpoint%2C%20Koh%20Nang%20Yuan%2C%20Ko%20Pha-ngan%2C%20Surat%20Thani%2084360%2C%20Thailand&bounds=10.13271230554143%2C99.83213094594781%2C10.09677969445857%2C99.79563105405218'
        )}
        {locationLink(
          'Ao Thalane',
          aoThalane,
          '?address=Ao%20Thalane%2C%20Mueang%20Krabi%2C%20Krabi%2081000%2C%20Thailand&bounds=8.16135630554143%2C98.76537331104184%2C8.12542369445857%2C98.72907468895816'
        )}
        
        {locationLink(
          'Koh Hong',
          kohHong,
          '?address=Koh%20Hong%2C%20Nong%20Thale%2C%20Mueang%20Krabi%2C%20Krabi%2081000%2C%20Thailand&bounds=8.09675480554143%2C98.69733189484624%2C8.06082219445857%2C98.66103910515373'
        )}
      </div>
    </div>
  );
};

SectionThaiTemp.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionThaiTemp.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionThaiTemp;
