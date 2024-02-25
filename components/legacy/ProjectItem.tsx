"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { IProject } from "@/types/Project";
import { SectionContainer } from "./SectionContainer";

export interface ProjectItemProps {
  project: IProject;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  console.log("projet", project);
  return (
    <SectionContainer className="w-full card">
      <figure className="rounded-lg">
        <img
          src={project.mainImage.url}
          alt={project.mainImage.alt}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body px-2">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.summary || ""}</p>
        <div className="card-actions self-end">
          <Link href={`/projects/${project.slug}`} className="btn btn-ghost">
            See More
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};
