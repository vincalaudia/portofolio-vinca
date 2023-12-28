import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Buttons from "./Buttons";
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Settings here (optional)
      // e.g., duration: 2000
    });
  }, []);

  return (
    <div className="bg-[#0b1010] pt-[30px] lg:h-[100vh] py-[4rem]">
      <div className="flex flex-col-reverse lg:flex-row w-[80%] mx-auto  items-center">
        <div className="flex flex-col space-y-6 w-[100%] lg:w-[50%]">
          <h1
            className="text-[21px] lg:text-[30px] font-bold text-[#adc5cd] md-[1rem]"
            data-aos="fade-up"
          >
            A BIT ABOUT ME
          </h1>
          <h2
            className="text-[50px] md:w-[80%] lg:w[100%] md:text-[40px] md:leading-[3rem] leading-[3.7rem] font-bold text-white "
            data-aos="fade-up"
          >
            Change is the Only <span className="text-[#EADCBA]"> Constant</span>
          </h2>
          <div
            className="my-[1rem] flex items-center md:space-x-10"
            data-aos="fade-up"
          >
            <p className="text-[20px] text-slate-300 w-[95%] lg:w-[80%]">
              As a Computer Science student, I navigate the evolving landscape
              of technology with enthusiasm and adaptability. My diverse
              experiences have equipped me with a complete skill set for
              effective collaboration, and a passion for leveraging technology
              for impactful solutions.
            </p>{" "}
          </div>
          <div
            className="flex w-[100%] flex-row space-x-5 pt-[20px] "
            data-aos="fade-up"
          >
            <Buttons
              icon={true}
              buttonLabel={"Find Out More"}
              link={
                "https://figma.com/proto/WBYMbm0NI9ShUNojqZhKJH/Untitled?page-id=1%3A4&type=design&node-id=49-2504&viewport=1949%2C1406%2C0.28&scaling=min-zoom&starting-point-node-id=49%3A2504&show-proto-sidebar=1"
              }
            />

            <Buttons
              icon={true}
              buttonLabel={"Download My CV"}
              link={"CV_Jovinca_DA_2MB.pdf"}
            />
          </div>
        </div>
        <div
          className="relative mx-auto mt-[2rem] h-[25rem] w-[25rem] start-0 md:w-[40rem] md:h-[40rem] lg:h-[50rem] lg:w-[50rem]"
          data-aos="fade-up"
        >
          <Image
            src="/about.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[2] w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
