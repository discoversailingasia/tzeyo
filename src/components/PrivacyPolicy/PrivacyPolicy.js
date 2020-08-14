import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: July 06, 2020</p>

      <p>
      It is Discover Sailing Asia Limited's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to www.discoversailingasia.com (hereinafter, "us", "we", or "https://tzeyo.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
      </p>

      <h2>Website Visitors</h2>
      <p>
      Like most website operators, Discover Sailing Asia Limited collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Lemlabs Asia Hong kong Limited's purpose in collecting non-personally identifying information is to better understand how Discover Sailing Asia Limited's visitors use its website. From time to time, Lemlabs Asia Hong kong Limited may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
      Discover Sailing Asia Limited also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on http://www.discoversailingasia.com blog posts. Lemlabs Asia Hong kong Limited only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
      </p>

      <h2>Gathering of Personally-Identifying Information</h2>
      <p>
      Certain visitors to Lemlabs Asia Hong kong Limited's websites choose to interact with Lemlabs Asia Hong kong Limited in ways that require Lemlabs Asia Hong kong Limited to gather personally-identifying information. The amount and type of information that Lemlabs Asia Hong kong Limited gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at http://www.discoversailingasia.com to provide a username and email address.
      </p>

      <h2>Security</h2>
      <p>
      The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>

      <h2> Advertisements</h2>
      <p>
      Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Lemlabs Asia Hong kong Limited and does not cover the use of cookies by any advertisers.
      </p>

      <h2> Links To External Sites</h2>
      <p>
      Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
      </p>


      <h2> Aggregated Statistics</h2>
      <p>
      Lemlabs Asia Hong kong Limited may collect statistics about the behavior of visitors to its website. Lemlabs Asia Hong kong Limited may display this information publicly or provide it to others. However, Lemlabs Asia Hong kong Limited does not disclose your personally-identifying information.
      </p>

      <h2> Cookies</h2>
      <p>
      To enrich and perfect your online experience, Lemlabs Asia Hong kong Limited uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.
A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Lemlabs Asia Hong kong Limited uses cookies to help Lemlabs Asia Hong kong Limited identify and track visitors, their usage of http://www.discoversailingasia.com, and their website access preferences. Lemlabs Asia Hong kong Limited visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Lemlabs Asia Hong kong Limited's websites, with the drawback that certain features of Lemlabs Asia Hong kong Limited's websites may not function properly without the aid of cookies.
By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Lemlabs Asia Hong kong Limited's use of cookies.
      </p>


    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
