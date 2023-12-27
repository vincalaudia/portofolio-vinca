import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-[#0b1010] h-[100vh] py-[4rem]">
      <div className="grid grid-cols-1 my-[8rem] md:grid-cols-2 w-[80%] mx-auto gap-[1rem] md:gap-[0px] items-center">
        <div>
          <h1 className="text-[30px] font-bold text-[#adc5cd] md-[1rem]">
            A BIT ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[40px] md:leading-[3rem] leading-[2rem] font-bold text-white">
            Change is the Only <span className="text-[#EADCBA]"> Constant</span>
          </h2>
          <div className="my-[1rem] flex items-center md:space-x-10">
            <p className="text-[20px] text-slate-300 w-[80%]">
              As a Computer Science student, I navigate the evolving landscape
              of technology with enthusiasm and adaptability. My diverse
              experiences have equipped me with a complete skill set for
              effective collaboration, and a passion for leveraging technology
              for impactful solutions.
            </p>{" "}
          </div>
          <div className="flex flex-row space-x-5 ">
            <a
              href="https://figma.com/proto/WBYMbm0NI9ShUNojqZhKJH/Untitled?page-id=1%3A4&type=design&node-id=49-2504&viewport=1949%2C1406%2C0.28&scaling=min-zoom&starting-point-node-id=49%3A2504&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 lg:my-8 hover:bg-[#304b54c2] transition-all duration-200 py-4 text-18px font-semibold text-white bg-[#304b5461] flex items-center space-x-2 border-solid border-2 rounded-[400px] border-[#FFFFFF] z-1000000"
            >
              <p>Find Out More</p>
              <BsArrowRight />
            </a>
            <a
              href="CV_Jovinca_DA_2MB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 lg:my-8 hover:bg-[#304b54c2] transition-all duration-200 py-4 text-18px font-semibold text-white bg-[#304b5461] flex items-center space-x-2 border-solid border-2 rounded-[400px] border-[#FFFFFF] z-1000000"
            >
              <p>Download My CV</p>
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className=" lg:w-[600px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[500px] h-[350px] relative">
          <Image
            src="/about.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[2] w-[100%] h-[100%] object-contain md:visible invisible"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
