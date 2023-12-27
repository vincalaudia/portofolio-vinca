// Hero.js
import React from "react";
import TextEffects from "./TextEffects";
import Particle from "./Particle";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-[100vh] ">
      <Particle />
      <div className="w-[100%] h-[100%] backdrop-blur-[100px] ">
        <div className="w-[80%] flex flex-col mt-[30px] justify-center mx-auto lg: h-[100%] items-start">
          <div>
            <h1 className="text-[20px] font-semibold md:text-[50px] text-[#adc5cd]">
              NICE TO MEET YOU! I'M
              <span className="text-[#d0c8a9]"> VINCA,</span>
            </h1>
          </div>

          <TextEffects />

          <p className="text-[12px] w-[90%] md:text-[24px] text-[#adc5cd] md:w-[65%]">
            Passionate about technology development with experience on multiple
            mobile and website development projects! Loves to collaborate with
            diverse teams in a creative and professional environment.
          </p>
          <a
            href="https://figma.com/proto/WBYMbm0NI9ShUNojqZhKJH/Untitled?page-id=1%3A4&type=design&node-id=49-2504&viewport=1949%2C1406%2C0.28&scaling=min-zoom&starting-point-node-id=49%3A2504&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 lg:my-8 hover:bg-[#304b54c2] transition-all duration-200 py-4 text-18px font-semibold text-white bg-[#304b5461] flex items-center space-x-2 border-solid border-2 rounded-[400px] border-[#FFFFFF] z-1000000"
          >
            <p>Check Out My Projects</p>
            <BsArrowRight />
          </a>
        </div>
        <div></div>
        <img
          src="/Noise.png"
          alt="Noise"
          className="absolute inset-0 z-[-2] w-full h-full object-cover opacity-35"
        />
      </div>
    </div>
  );
};

export default Hero;
