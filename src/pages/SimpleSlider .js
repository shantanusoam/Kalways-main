import React, { Component } from 'react';
import Slider from 'react-slick';
import image1 from '../images/dv0.jpg';
import image2 from '../images/Ut1.jpg';
import image3 from '../images/Rt2.jpg';
import image4 from '../images/Rt02.jpg';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={image2} className=" h-64 2xl:h-80 " alt=""></img>
          </div>
          <div>
            <img src={image3} className="  h-64 2xl:h-80" alt=""></img>
          </div>
          <div>
            <img src={image1} className=" h-64 2xl:h-80" alt=""></img>
          </div>
        </Slider>
      </div>
    );
  }
}
