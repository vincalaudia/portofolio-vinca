import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Footer from "@/Components/Footer";
import { CardProps } from "@/Components/Card";
import CarouselImage from "@/Components/CarouselImage";
import Buttons from "@/Components/Buttons";

const ProjectPage: React.FC = (): React.ReactNode => {
  const [project, setProject] = useState<CardProps | null>(null);
  const [projects, setProjects] = useState<CardProps[]>([]); // State to store all projects
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const router = useRouter();
  const projectId = Array.isArray(router.query.projectId)
    ? router.query.projectId[0]
    : router.query.projectId;

  useEffect(() => {
    fetch("/projectList.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        const selectedProject = data.find(
          (p: { id: string | undefined }) => p.id === projectId
        );
        setProject(selectedProject || null);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <div className="bg-[#0b1010] md:w-100% md:pt-[9vh]">
        <div className="flex flex-col mx-auto items-center">
          <div className=" w-full pb-[12vw] lg:pb-[6vw]">
            <CarouselImage images={project.imageUrl} />
          </div>

          <div className="flex flex-col w-[90vw] h-auto md:w-[90vw] lg:w-[65vw] space-y-2">
            <h1 className="relative w-full font-semibold text-[#bbe7f1b2] text-[12px] md:text-[14px] text-justify leading-[normal">
              {project.role}
            </h1>
            <h1 className="relative self-stretch font-semibold text-[#FFFFFF] text-[17px] md:text-[20px] tracking-[0.4px]  text-justify leading-[normal]">
              {project.title}
            </h1>
            <h1 className="relative w-full font-semibold text-[#bbe7f1b2] text-[12px] md:text-[14px] text-justify leading-[norma]">
              {project.duration}
            </h1>

            <p>{project.description}</p>
            <div className="pb-20 space-y-3">
              {project.buttonList.map(
                (button, index) =>
                  button[0] ? ( // Only render if button[0] is not empty
                    <Buttons
                      key={index}
                      icon={true}
                      buttonLabel={button[0]}
                      link={button[1]}
                    />
                  ) : null // If empty, render nothing
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
