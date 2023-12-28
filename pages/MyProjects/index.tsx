import React, { useState } from "react";
import Link from "next/link";
import Card from "@/Components/Card";
import Navbar from "@/Components/Nav";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Carousel from "@/Components/Carousel";

const MyProjects = ({ project }: { project: any }) => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden bg-[#0b1010]">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />

      <div className=" h-fit mt-[10vh] md:py-[4rem] py-[20px]">
        <h1 className="heading text-[50px] md:text-[50px] text-[#adc5cd]">
          PROJECTS
        </h1>
        <div className="w-[80%] m-auto">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
