import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfileCarousel = ({ items }) => {
  const isSmallScreen = window.innerWidth <= 768;
  // Configuration for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isSmallScreen) {
    return (
      <div className="w-full h-full border border-black flex justify-center items-center">
        <div className="w-full h-64 bg-gray-300"></div>
      </div>
    );
  }

  // If there are more than 3 items, display them in a carousel
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Slider {...settings} className="w-[80%] h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-72 h-72 bg-white flex justify-center items-center"
            style={{ margin: "0 10px" }}
          >
            <div className="w-[90%] h-[90%] bg-gray-700"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfileCarousel;
