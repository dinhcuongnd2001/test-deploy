import React from "react";
import "./main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderComponent() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="container">
        <p className="slider__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
        <div className="slider__content">
          <img
            src={require("../../asset/images/ava-1.jpg")}
            alt="avatar-user"
            className=" rounded"
          />
          <h6>Jhon Doe</h6>
        </div>
      </div>

      <div className="container">
        <p className="slider__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
        <div className="slider__content">
          <img
            src={require("../../asset/images/ava-2.jpg")}
            alt="avatar-user"
            className=" rounded"
          />
          <h6>Eric</h6>
        </div>
      </div>

      <div className="container">
        <p className="slider__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
        <div className="slider__content">
          <img
            src={require("../../asset/images/ava-3.jpg")}
            alt="avatar-user"
            className=" rounded"
          />
          <h6>frank gallagher</h6>
        </div>
      </div>
    </Slider>
  );
}

export default SliderComponent;
