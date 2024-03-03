import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../component css/Hobbies.css"; // Your custom styles for the carousel
import defaultProps from "react-slick/lib/default-props";

const images = [
  {
    url: "h1.jpeg",
    text: "Drumming",
  },
  {
    url: "h2.jpeg",
    text: "Rapping",
  },
  // Add more image URLs
];

const Hobbies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`slide-${index}`} className="hobbieImg" />
            <p>{image.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hobbies;
