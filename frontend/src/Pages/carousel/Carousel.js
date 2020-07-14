import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  './Carousel.css';
import iitd from '../../Assets/iitd3.jpg';
import rickshaw from '../../Assets/rickshawpuller.jpg';
import iitd4 from '../../Assets/iitd4.jpg';
import nature1 from '../../Assets/nature1.jpg';
import nature2 from '../../Assets/nature2.jpg';

function ImageCarousel () {
  return(
    <Carousel >
      <Carousel.Item className="carouselItemClass">
        <img className="carouselmgClass" src={iitd} alt="poster" />
        <Carousel.Caption>
          <h2>IIT DELHI</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemClass">
        <img className="carouselImgClass" src={nature1} alt="poster" />
        <Carousel.Caption>
          <h2>Rickshawpuller at IITD</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemClass">
        <img className="carouselImgClass" src={nature2} alt="poster" />
        <Carousel.Caption>
          <h2>IITD Again</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  )
}

export default ImageCarousel;