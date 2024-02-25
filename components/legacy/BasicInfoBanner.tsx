import React from "react";
import { SectionContainer } from "..";

export const BasicInfoBanner = () => {
  return (
    <SectionContainer className="md:basis-2/6 xl:basis-1/6">
      <h2 className="text-2xl font-bold mb-5">Bio</h2>
      <p className="text-sm">
        A System Engineer with experience creating logical and innovative solutions to
        complex problems. I am continually evaluating and upgrading my skills so that I
        stay at the cutting edge of web development.
      </p>

      <br />

      <p className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates commodi
        quidem facere placeat rerum odit voluptate amet ad. Laborum, reiciendis. Modi
        quaerat placeat architecto mollitia possimus neque sapiente magnam accusamus!
      </p>
    </SectionContainer>
  );
};
