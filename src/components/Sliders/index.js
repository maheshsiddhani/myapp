import React from "react";
import Slider from "react-slick";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = props => {
  const{sliderDetails}=props
    const sliderSettings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      
      <section  className="slider-container" id="home"> 
        {/* Slider */}
        <Slider {...sliderSettings} style={{ marginTop: "20px" }}>
          {sliderDetails.map((slider => (
            <div key={slider.uniqNo} className="slider-item">
            <img src={slider.img} alt={`Slide ${slider.uniqNo}`} style={{ width: "100%" }} />
          </div>
          )))}
        </Slider>
      </section>
    );
  };
  
  export default Sliders;