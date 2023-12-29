import React from "react";
import Particle from "./Particle";
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <div className="h-[100vh] ">
      <Particle />
      <div className="w-[100%] h-[100%] backdrop-blur-[100px] ">
        <div className="w-[80%] flex flex-col mt-[30px] justify-center mx-auto lg: h-[100%] md:items-start items-center ">
          <div>
            <h1 className="text-[18px] font-semibold md:text-[50px] text-[#adc5cd]">
              SOME NOTABLE
              <span className="text-[#d0c8a9]"> PROJECTS</span>
            </h1>
            <Carousel />
            <h1 className="text-[30px] text-[#adc5cd]">
              You can check the rest down below
            </h1>
          </div>
        </div>
        <img
          src="/Noise.png"
          alt="Noise"
          className="absolute inset-0 z-[-2] w-full h-full object-cover opacity-35"
        />
      </div>
    </div>
  );
};

export default Featured;
