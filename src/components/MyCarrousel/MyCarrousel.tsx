import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Slide1 from "../../assets/img/carousel/slide1.webp";
import Slide2 from "../../assets/img/carousel/slide2.webp";

import Img1 from "../../assets/img/carousel/img1_plus.jpg";

import Img2 from "../../assets/img/carousel/img2_plus2.jpg";

import Slide3 from "../../assets/img/carousel/slide3.webp";
import ScrollDown from "../ScrollDown/ScrollDown";
import Slide4 from "../../assets/img/carousel/slide4.jpeg";

import "./MyCarrousel.css";

function MyCarrousel() {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={2500}
        // pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Img1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
}

export default MyCarrousel;
