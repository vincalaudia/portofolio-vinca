import React, { useState } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

type CardProps = {
  imageUrl: string;
  duration: string;
  role: string;
  title: string;
  instance: string;
  tags: string[];
  description: string;
};

const Card = ({
  imageUrl,
  title,
  duration,
  description,
  role,
  instance,
  tags,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="Container w-[28rem] flex flex-col items-center px-[15px] pt-[15px] pb-[20px] relative bg-[#374a6055]  
      hover:border-solid hover:border-2 hover:border-[#FFFFFF] hover:bg-[#374a6094] transform cursor-pointer hover:scale-[98.5%] transition-all duration-200 rounded-[8px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[240px] bg-[#374a6055] rounded-[8px] overflow-hidden mb-[12px]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {isHovered ? (
            <div className="w-full h-full flex  justify-center items-center backdrop-brightness-[40%]">
              <span className="text-white text-2xl w-1/2 text-center font-semibold uppercase">
                See Details
              </span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[5px] relative  w-full">
        <p className="relative w-full font-semibold text-[#bbe7f1b2] text-[14px] text-justify leading-[normal]">
          {duration} • {role}
        </p>
        <p className="relative self-stretch font-semibold text-[#FFFFFF] text-[22px] tracking-[0.4px]  text-justify leading-[normal]">
          {title}
        </p>
        <p className="relative w-full  text-[#bbe7f1b2] text-[16px] text-justify leading-[normal]">
          {instance}
        </p>
        <div className="w-full items-start px-0 py-[4.34px] relative flex-[0_0_auto]">
          {tags.map((tag, index) => (
            <div
              key={index} // Add a unique key prop here
              className="inline-flex my-[2px] mx-[3px] items-start px-[8px] py-[3px] relative flex-[0_0_auto] bg-[#eadcbabf] rounded-[26.04px]"
            >
              <div className="relative w-fit mt-[-0.87px] text-[#242424] text-[14px] text-justify leading-[normal]">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="relative w-full  text-[#c5d2d5] text-[15px] text-justify leading-[normal]">
        {description}
      </p>
    </div>
  );
};

export default Card;
