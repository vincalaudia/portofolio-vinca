import React from "react";
import Navbar from "@/Components/Nav"; // Import the 'Navbar' component
import { useState } from "react";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden ">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero />
        <div className="relative z-[3]">
          <div id="About">
            <About />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;