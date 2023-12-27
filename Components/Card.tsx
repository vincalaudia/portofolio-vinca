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
      className="Container flex flex-col items-center px-[15px] py-[20px] relative bg-[#f8faff] transform cursor-pointer hover:scale-[105%] transition-all duration-200 rounded-[8px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[336px] h-[189px] bg-[#f8faff] rounded-[8px] overflow-hidden mb-[12px]">
        {isHovered ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="w-full h-full flex  justify-center items-center backdrop-brightness-[40%]">
              <span className="text-white text-2xl w-1/2 text-center font-semibold uppercase">
                See Details
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt="portfolio"
            layout="fill"
            objectFit="contain"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col items-start gap-[3px] relative  w-full">
        <p className="relative w-full font-semibold text-[#babad1] text-[14px] text-justify leading-[normal]">
          {duration} • {role}
        </p>
        <p className="relative self-stretch font-semibold text-[#242424] text-[20px] text-justify tracking-[-0.53px] leading-[normal]">
          {title}
        </p>
        <p className="relative w-full  text-[#b8b8c5] text-[16px] text-justify tracking-[-0.40px] leading-[normal]">
          {instance}
        </p>
        <div className="w-full items-start px-0 py-[4.34px] relative flex-[0_0_auto]">
          {tags.map((tag, index) => (
            <div
              key={index} // Add a unique key prop here
              className="inline-flex m-[2px] items-start px-[8px] py-[3px] relative flex-[0_0_auto] bg-[#304b54d5] rounded-[26.04px]"
            >
              <div className="relative w-fit mt-[-0.87px] text-[#f8faff] text-[14px] text-justifytracking-[-0.35px] leading-[normal]">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="relative w-full  text-[#828282] text-[12px] text-justify tracking-[-0.33px] leading-[normal]">
        {description}
      </p>
    </div>
  );
};

export default Card;
