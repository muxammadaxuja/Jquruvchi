import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousel_data } from './Data'
import Link from "next/link"

function Carousel() {
  let settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: true,
    autoplay: true
  };

  return (
    <Slider {...settings} className="w-full cursor-move">
      {/* First slider------ */}
        {carousel_data.map(item => (
          <div className="relative">
              <div className="carousel_div">
                <div className="w-56 h-56 lg:w-72 lg:h-72 border-8 border-gray-400 border-opacity-50"></div>
              </div>
              <img src={item.img} className="carousel_img" alt="slider-image" />
              <div className="carousel_div">
                <div className="w-56 h-56 lg:w-72 lg:h-72 border-8 border-gray-400 border-opacity-90"></div>
              </div>
              <div className="carousel_heading">
                <Fade bottom>
                  <h1 className="font-medium lg:font-bold my-6 text-1xl lg:text-2xl">
                    {item.headingTop}
                  </h1>
                </Fade>
                <Fade left>
                  <h1 className="text-4xl lg:text-7xl my-5 font-extrabold tracking-widest">
                    <span className="text-yellow-400">{item.headingSpan}</span>  {item.heading}
                  </h1>
                </Fade>
              </div>
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Link href="/contact">
                <a className="carousel_button">
                  {item.button}
                </a>
                </Link>
              </div>
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-white text-center">
                  {item.paragraph}
                </p>
              </div>
          </div>
        ))}
    </Slider>
  );
}

export default Carousel;
