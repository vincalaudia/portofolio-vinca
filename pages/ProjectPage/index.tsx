import React from "react";
import Link from "next/link";

const ProjectPage = ({ project }: { project: any }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link href="/">
        <a>Back to Projects</a>
      </Link>
    </div>
  );
};

export default ProjectPage;
