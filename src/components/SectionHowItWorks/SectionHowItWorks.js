import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';
import priceImage from './icons/Asset 36.png';
import instantImage from './icons/Asset 37.png';
import flexiImage from './icons/Asset 38.png';
import globalImage from './icons/global.jpg';
import biggestImage from './icons/biggest.jpg';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      {/* <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
        <br />
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </div> */}

      <div className={css.steps}>
        <div className={css.step}>
          <img className={css.any} src={priceImage} alt=''/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p style={{fontSize:'15px'}} >
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <img className={css.any} src={instantImage} alt=''/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h2>
          <p style={{fontSize:'15px'}} >
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <img className={css.any} src={flexiImage} alt=''/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p style={{fontSize:'15px'}} >
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>

        <div className={css.step}>
          <img className={css.any} src={globalImage} alt=''/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part4Title" />
          </h2>
          <p style={{fontSize:'15px'}} >
            <FormattedMessage id="SectionHowItWorks.part4Text" />
          </p>
        </div>

        <div className={css.step}>
          <img className={css.any} src={biggestImage} alt=''/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part5Title" />
          </h2>
          <p style={{fontSize:'15px'}} >
            <FormattedMessage id="SectionHowItWorks.part5Text" />
          </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
