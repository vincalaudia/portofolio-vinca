import Image from "next/image";
import React from "react";
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
    <div className="bg-[#0b1010] lg:h-[100vh] py-[4rem] md:p-[0px]">
      <div className="flex flex-col-reverse lg:flex-row w-[80%] mx-auto items-center">
        <div className="flex flex-col w-[100%] lg:w-[50%]">
          <h1
            className="text-[18px] lg:text-[30px] font-bold text-[#adc5cd] md-[1rem]"
            data-aos="fade-up"
          >
            A BIT ABOUT ME
          </h1>
          <h2
            className="text-[32px] md:w-[80%] lg:w[100%] md:text-[40px] md:leading-[3rem] leading-[2.3rem] font-bold text-white "
            data-aos="fade-up"
          >
            Change is the Only <span className="text-[#EADCBA]"> Constant</span>
          </h2>
          <div
            className="my-[1rem] flex items-center md:space-x-10"
            data-aos="fade-up"
          >
            <p className="text-slate-300 w-[95%] lg:w-[80%]">
              As a Computer Science student, I navigate the evolving landscape
              of technology with enthusiasm and adaptability. My diverse
              experiences have equipped me with a complete skill set for
              effective collaboration, and a passion for leveraging technology
              for impactful solutions...
            </p>{" "}
          </div>
          <div
            className="flex w-[100%] flex-row space-x-3 lg:space-x-5 pt-[10px] "
            data-aos="fade-up"
          >
            <Buttons
              icon={true}
              buttonLabel={"My Projects"}
              link={"/MyProjects"}
            />

            <Buttons
              icon={true}
              buttonLabel={"Download My CV"}
              link={"CV-Jovinca.pdf"}
            />
          </div>
        </div>
        <div
          className="relative mx-auto my-[2rem] h-[13rem] w-full md:w-[40rem] md:h-[40rem] lg:h-[50rem] lg:w-[50rem]"
          data-aos="fade-up"
        >
          <Image
            src="/about.png"
            alt="user"
            layout="fill"
            className="relative z-[2] w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
