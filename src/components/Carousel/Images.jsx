import React from 'react';
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';

function Images() {
  return (
    <Slider>
      <img src="/assets/chernobyl/1.jpg" alt="1.jpg" />
      <img src="/assets/chernobyl/2.jpg" alt="2.jpg" />
      <img src="/assets/chernobyl/3.jpg" alt="3.jpg" />
      <img src="/assets/chernobyl/4.jpg" alt="4.jpg" />
      <img src="/assets/chernobyl/5.jpg" alt="5.jpg" />
      <img src="/assets/chernobyl/6.jpg" alt="6.jpg" />
      <img src="/assets/chernobyl/7.jpg" alt="7.jpg" />
    </Slider>
  );
}

export default Images;
