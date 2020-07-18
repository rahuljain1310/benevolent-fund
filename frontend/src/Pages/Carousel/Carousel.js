import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  './Carousel.css';

import imageSrc1 from '../../Assets/rickshawpuller.jpg';
import imageSrc2 from '../../Assets/nature1.jpg';
import imageSrc3 from '../../Assets/nature2.jpg';

function ImageCarousel () {
  return(
    <Carousel >
      <Carousel.Item className="carouselItemClass">
        <img className="carouselmgClass" src={imageSrc1} alt="poster"/>
        <Carousel.Caption>
          <h2>IIT DELHI</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemClass">
        <img className="carouselImgClass" src={imageSrc2} alt="poster" />
        <Carousel.Caption>
          <h2>Rickshawpuller at IITD</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItemClass">
        <img className="carouselImgClass" src={imageSrc3} alt="poster" />
        <Carousel.Caption>
          <h2>IITD Again</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  )
}

export default ImageCarousel;
