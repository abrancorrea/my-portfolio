import React from "react";
import { ProjectCard } from "./components";
import { getProjects } from "@/sanity/sanity-utils";
import { SectionContainer } from "../Base";

export const ProjectsSection = async () => {
  const projects = await getProjects();

  // console.log("projects", projects)

  return (
    <SectionContainer title="Projects" id="list-of-projects">
      <div className="projects-container w-full grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
