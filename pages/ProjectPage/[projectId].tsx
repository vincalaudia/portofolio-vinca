import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Footer from "@/Components/Footer";
import { CardProps } from "@/Components/Card";

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
      <div className="bg-[#0b1010] lg:h-fit py-[4rem] md:pt-[20vh]">
        <div className="flex flex-col w-[95%] mx-auto items-center">
          <div className="relative mx-auto my-[2rem] w-[50rem] h-[25rem] space-x-1">
            <Image
              src={project.imageUrl}
              alt="user"
              layout="fill"
              className="relative z-[2] w-[100%] h-[100%] object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <h1>{project.title}</h1>
            <h1>{project.duration}</h1>
            <h1>{project.role}</h1>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
