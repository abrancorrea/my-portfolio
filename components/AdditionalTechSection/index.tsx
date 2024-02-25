import { getAdditionalTechnologies } from "@/sanity/sanity-utils";
import React from "react";
import { SectionContainer } from "../Base";

export const AddditionalTechSection = async () => {
  const techList = await getAdditionalTechnologies();
  return (
    <SectionContainer title="Additional technologies and skills">
      <div className="additional-techologies-container grid grid-cols-2 md:grid-cols-3 w-full">
        {techList.map(({ name }) => (
          <div key={name} className="additional-technology-item flex items-center mb-5">
            <div className="technology-point w-[12px] h-[12px] rounded-full bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600"></div>
            <h3 className="text-white text-base capitalize ml-4">{name}</h3>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
