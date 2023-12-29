import React from "react";
import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
  icon: boolean;
  buttonLabel: string;
  link: string;
};

const Buttons = ({ buttonLabel, icon, link }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 md:px-8 md:py-4 my-[2px] hover:bg-[#304b54c2] transition-all duration-200 text-[11px] lg:text-[18px] font-semibold text-white bg-[#304b5461] flex items-center space-x-2 border-solid border-2 rounded-[400px] border-[#FFFFFF] z-100"
    >
      <p>{buttonLabel}</p>
      {icon ? <BsArrowRight /> : <div></div>}
    </a>
  );
};

export default Buttons;
