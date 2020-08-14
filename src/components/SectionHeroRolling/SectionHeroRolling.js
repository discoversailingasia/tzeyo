import React,{Component} from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
// import classNames from 'classnames';
import { NamedLink,SecondaryButton,PrimaryButton } from '../../components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './SectionHeroRolling.css';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

import pic1 from './images/phuket_2.png';
import pic2 from './images/japan_3.png';
import pic3 from './images/croatia_2.png';
import pic4 from './images/hk.png';


class SectionHeroRolling extends Component  {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2000
    };
    
    return (
      <Slider {...settings}>
        <div >
        <img src={pic1} alt="phuket"/>

        <h2 style={{left:'14%',top: '30%',position: 'absolute',color: "white"}}>
          Phuket
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Phuket%2C%20Thailand&bounds=8.22459431297788%2C98.7011728267431%2C7.36258081248117%2C98.158428201869',
          }}
          style={{left:'14%' ,top: '50%',position: 'absolute'}}
        >
          <Button type='submit' variant="primary" size="lg" >Discover More</Button>
        </NamedLink>
        
        {/* <SecondaryButton size="sm">Sample</SecondaryButton>
        <PrimaryButton>Sample2</PrimaryButton> */}
        </div>
        <div>
        <img src={pic2} alt="japan"/>
        <h2 style={{left:'24%',top: '30%',position: 'absolute',color: "white"}}>
          Japan
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Japan&bounds=45.5929197975639%2C145.942383770553%2C23.9546223%2C122.834320204273',
          }}
          // className={css.heroButton}
          style={{left:'24%',top: '50%', position: 'absolute'}}
        >
          <Button type='submit' variant="primary" size="lg">Discover More</Button>
        </NamedLink>
        </div>
        <div>
        <img src={pic3} alt="croatia"/>
        <h2 style={{left:'36%',top: '30%',position: 'absolute',color: "white"}}>
          Croatia
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Croatia&bounds=46.5549319911122%2C19.4472699942444%2C42.2991019005475%2C13.3902441055588',
          }}
          // className={css.heroButton}
          style={{left:'36%',top: '50%',position: 'absolute'}}
        >
          <Button type='submit' variant="primary" size="lg">Discover More</Button>
        </NamedLink>
        </div>
        <div>
        <img src={pic4} alt="hongkong"/>
        <h2 style={{left:'46%',top: '30%',position: 'absolute',color: "white"}}>
          Hong Kong
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Hong%20Kong&bounds=22.5819435972866%2C114.521485378888%2C22.0937134369205%2C113.774413083745',
          }}
          // className={css.heroButton}
          style={{left:'46%',top: '50%',position: 'absolute'}}


        >
          <Button type='submit' variant="primary" size="lg">Discover More</Button>
        </NamedLink>
        </div>
        
          
        </Slider>
    );
  }
}

SectionHeroRolling.defaultProps = { rootClassName: null, className: null };

SectionHeroRolling.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHeroRolling;
