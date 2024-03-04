/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IProject } from "@/types/Project";
import { ImageSlider } from "@/components/ImageSlider";

export type ProjectCardProps = {
  project: IProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="background-gradient rounded-2xl bg-gradient-to-r w-full from-[#13ADC7] via-[#6978D1] to-[#945DD6]">
      <div className="card w-full h-full scale-[99%] text-primary-content bg-gray-900">
        <figure className="px-7 pt-7">
          <ImageSlider className="rounded-xl max-h-80 mx-auto" images={project.images} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-base">{project.name}</h2>
          <p className="text-coldgrey">{project.summary}</p>
        </div>
      </div>
    </div>
  );
};
