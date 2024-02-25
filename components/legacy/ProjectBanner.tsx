import React from "react";
import { SectionContainer } from "./SectionContainer";
import { getProjects } from "@/sanity/sanity-utils";
import { HomeSlider } from "./HomeSlider";

export const ProjectBanner = async () => {
  const projects = await getProjects();

  return (
    <SectionContainer className="md:basis-4/6 pb-5 overflow-hidden flex flex-col">
      <h2 className="text-2xl font-bold">Projects</h2>
      <HomeSlider list={projects} />
    </SectionContainer>
  );
};
