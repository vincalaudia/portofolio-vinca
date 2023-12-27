import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000]  backdrop-blur-[100px]`}
    >
      <div className="w-[100vw] h-[100vw] flex flex-col items-center justify-center font-semibold drop-shadow-md">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Projects</div>
        <div className="nav-link-mobile">Contact</div>
        <div className="nav-link-mobile">O</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#d0c8a9]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
