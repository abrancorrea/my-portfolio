import React from "react";
import { DateTime } from "luxon";
import { getPersonalSteps } from "@/sanity/sanity-utils";
import { SectionContainer } from "../Base";
import { Timeline } from "../Timeline";

export const AboutMeSection = async () => {
  const steps = await getPersonalSteps();

  return (
    <SectionContainer title="About me" id="about-me">
      <Timeline steps={steps} />
    </SectionContainer>
  );
};
