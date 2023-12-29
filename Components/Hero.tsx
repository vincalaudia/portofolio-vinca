// Hero.js
import React from "react";
import TextEffects from "./TextEffects";
import Particle from "./Particle";
import Buttons from "./Buttons";

import { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Settings here (optional)
      // e.g., duration: 2000
    });
  }, []);
  return (
    <div className="h-[100vh] ">
      <Particle />
      <div className="w-[100%] h-[100%] backdrop-blur-[100px] ">
        <div
          className="w-[80%] flex flex-col mt-[30px] justify-center mx-auto lg: h-[100%] md:items-start items-center "
          data-aos="fade-up"
        >
          <div>
            <h1 className="text-[18px] font-semibold md:text-[50px] text-[#adc5cd]">
              NICE TO MEET YOU! I'M
              <span className="text-[#d0c8a9]"> VINCA,</span>
            </h1>
          </div>

          <TextEffects />

          <p className="text-[12px] md:text-[24px] text-[#adc5cd] lg:w-[75%] text-justify">
            Passionate about technology development with experience on multiple
            mobile and website development projects! Loves to collaborate with
            diverse teams in a creative and professional environment.
          </p>
          <div className="mt-[30px]">
            <Buttons
              icon={true}
              buttonLabel={"Check Out My Projects"}
              link={
                "https://figma.com/proto/WBYMbm0NI9ShUNojqZhKJH/Untitled?page-id=1%3A4&type=design&node-id=49-2504&viewport=1949%2C1406%2C0.28&scaling=min-zoom&starting-point-node-id=49%3A2504&show-proto-sidebar=1"
              }
            />
          </div>
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
