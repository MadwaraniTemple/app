import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LandingPage.module.css';
import img1 from '../../assets/Img_1.jpg';
import img2 from '../../assets/Img_2.jpeg';
import img3 from '../../assets/Img_3.jpeg';
import img4 from '../../assets/Img_4.jpeg';

const LandingPage =  () => {
  return ( 
    <div className={classes.body} id="LandingPage">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide"/> 
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      {/* <div className={classes.footer}><p>माँ मड़वारानी मंदिर</p></div> */}
    </div>
  );
}

export default LandingPage;