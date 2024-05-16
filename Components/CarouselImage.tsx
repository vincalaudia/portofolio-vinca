import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export type ImagesProps = {
  images: string[];
};

const CarouselImage = ({ images }: ImagesProps) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <div className="relative w-[12vw] h-auto lg:w-[8vw]">
          <Image
            src={images[i]}
            alt="user"
            layout="responsive"
            width={160} // adjust as needed
            height={90} // adjust as needed
            className="w-full object-contain rounded-sm md:rounded-md"
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <div className="relative mx-auto mt-[13vh] w-[97vw] h-auto md:mt-[6vh] md:w-[90vw] lg:w-[65vw]">
              <Image
                src={url}
                alt="user"
                layout="responsive"
                width={160} // adjust as needed
                height={90} // adjust as needed
                className="relative w-fit rounded-xl radius-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImage;
