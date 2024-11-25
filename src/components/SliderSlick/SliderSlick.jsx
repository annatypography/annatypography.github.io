import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SliderSlick.scss";

function Arrow(props) {
  const { onClick } = props;

  return (
    <>
      <div className="arrow" onClick={onClick}></div>
    </>
  );
}

export default function SliderSlick({ images, centerPadding }) {
  const settings = {
    dots: false,
    speed: 1000,
    autoplay: true,
    slidesToScroll: 1,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: centerPadding + "px",
    slidesToShow: 1,
    arrow: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    focusOnSelect: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="content">
        <div className="">
          <Slider {...settings}>
            {images.map((item, id) => (
              <div key={id}>
                <div className="img-body">
                  <img src={item} alt={id} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
