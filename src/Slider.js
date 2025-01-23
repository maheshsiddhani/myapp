import React from "react";
import Slider from "react-slick";
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from './images/slide1.jpeg'
import slide2 from './images/slide2.jpg'
import slide3 from './images/slide3.jpeg'



const Sliders = () => {
    const sliderSettings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div  className="slider-container">
        {/* Header */}
        <header style={{ textAlign: "center", padding: "20px", background: "#f4f4f4" }}>
          <h1>My Header</h1>
        </header>
  
        {/* Slider */}
        <Slider {...sliderSettings} style={{ marginTop: "20px" }}>
          <div>
            <img src={slide1} alt="Slide 1" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={slide2} alt="Slide 2" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={slide3} alt="Slide 3" style={{ width: "100%" }} />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Sliders;