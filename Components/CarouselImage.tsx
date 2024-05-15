import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1700,
      cssEase: "linear",
    };
    return (
      <div className="bg-[#374a6035] w-full mx-auto overflow-wrap">
        <Slider {...settings}></Slider>
      </div>
    );
  }
}
