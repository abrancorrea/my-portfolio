import React from "react";
import { SectionContainer } from "..";
import { getTechnologies } from "@/sanity/sanity-utils";
import Image from "next/image";

export const TechList = async () => {
  const list = await getTechnologies();

  return (
    <SectionContainer className="md:basis-2/6 h-auto">
      <h2 className="text-2xl font-bold mb-5">Technologies</h2>

      {list.map((el) => (
        <div key={el.name} className="flex justify-around items-center gap-3 mt-3 mb-7">
          <div className="basis-auto h-[75px] w-[75px]">
            <Image src={el.logo.url} alt={el.logo.alt} width={75} height={75} />
          </div>
          <div className="basis-4/6 flex-1">
            <h3 className="text-lg font-semibold">{el.name}</h3>
            <p className="text-sm">{el.description}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
