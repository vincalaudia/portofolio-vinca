import React, { useEffect, useState } from "react";
import Card from "@/Components/Card";
import Navbar from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Footer from "@/Components/Footer";
// import Carousel from "@/Components/Carousel";

import { CardProps } from "@/Components/Card";
import Featured from "@/Components/Featured";

const MyProjects = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  const projectsDataUrl = "projectList.json";

  const [projects, setProjects] = useState<CardProps[]>([]);

  useEffect(() => {
    // Fetch the JSON data on component mount
    fetch(projectsDataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: CardProps[]) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
      });
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <div className="relative hidden md:block">
        <Featured />
      </div>

      <div className=" h-fit pt-[10vh] md:mt-0 bg-[#0b1010] ">
        <div className="bg-[#0b1010] h-fit md:py-[6rem] py-[20px]">
          <div className="overflow-wrap w-[90%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] mb-[60px]">
            {projects.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyProjects;
