import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
// import IconLogo from './IconLogo';
import LogoImage from './Asset 29.png';
import MobileLogoImage from './Asset 29.png';
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : LogoImage;

  return (
    <img
      className={classes}
      src={logoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
