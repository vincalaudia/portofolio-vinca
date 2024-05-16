import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "./Link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`fixed w-full top-0 h-[12vh] border-b-[1px] bg-[#0b1010b3] drop-shadow-md backdrop-blur-[70px] z-30 transition-transform duration-100 ease-in ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between w-4/5 mx-auto h-full">
        <a
          href="/"
          className="flex-[0.6] cursor-pointer text-2xl text-[#EADCBA] font-bold"
        >
          VINCA<span className="text-[#adc5cd]">LAUDIA</span>
        </a>

        <a href="/#About" className="nav-link">
          About
        </a>
        <a href="/MyProjects" className="nav-link">
          Projects
        </a>
        <a href="/#Footer" className="nav-link">
          Contact
        </a>
        {/* <div className="nav-link">O</div> */}
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
