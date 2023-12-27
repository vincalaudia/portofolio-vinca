import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-full top-0 h-[12vh] border-b-[1px] bg-[#0b1010b3] drop-shadow-md backdrop-blur-[70px] z-10">
      <div className="flex items-center justify-between w-4/5 mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-2xl text-[#EADCBA] font-bold">
          VINCA<span className="text-[#adc5cd]">LAUDIA</span>
        </h1>

        <div className="nav-link">Home</div>
        <a href="#About" className="nav-link">
          About
        </a>
        <a href="#Projects" className="nav-link">
          Projects
        </a>
        <div className="nav-link">Contact</div>
        <div className="nav-link">O</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
