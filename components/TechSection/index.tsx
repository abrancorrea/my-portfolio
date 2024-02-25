import React from "react";
import { getTechnologies } from "@/sanity/sanity-utils";
import { SectionContainer } from "../Base";
import { TechLevelPercentages } from "@/types/Technologies";

export const TechSection = async () => {
  const list = await getTechnologies();

  return (
    <SectionContainer title="Technologies" id="list-of-technologies">
      {list.map(({ name, level }) => (
        <div key={name} className="tech-item flex flex-wrap justify-between w-full mb-7">
          <h3 className="tech-item-name text-white text-xs md:text-lg font-medium">
            {name}
          </h3>
          <h3 className="tech-item-level text-white text-xs md:text-lg font-medium">
            {level}
          </h3>
          <div className="w-full rounded-full h-2.5 bg-gray-700 mt-2">
            <div
              style={{ width: `${TechLevelPercentages[level]}%` }}
              className="h-2.5 rounded-full bg-gradient-to-r from-teal-400 via-indigo-600 to-purple-600"
            />
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
