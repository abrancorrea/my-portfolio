import React from "react";
import { Button } from "../Base";
import { HomeCircles } from "../HomeCircles";

export const HeroBanner = async () => {
  return (
    <section className="w-full min-h-96 flex flex-col md:flex-row md:flex-wrap gap-y-0 lg:gap-y-9 xl:gap-y-0 items-center pt-10 px-16 md:px-0 mx-auto relative">
      <div className="h-full flex flex-col md:w-1/2">
        <div className="hero-title mb-5">
          <h5
            className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-1"
            style={{
              color: "linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%)",
            }}
          >
            Hello, I&apos;m Abraham,
          </h5>
          <h5 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
            frontend developer
          </h5>
        </div>
        <div className="hero-text text-coldgrey ">
          A System Engineer with experience creating logical and innovative solutions to
          complex problems.
        </div>
      </div>

      <div className="profile-picture-section w-full h-[300px] md:w-1/2">
        <HomeCircles />
      </div>
      <div className="cta-section w-full z-10">
        <Button
          color="primary"
          className="w-40 h-14"
          link="/cv-2023.pdf"
          download="CV Abraham Correa"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </Button>
      </div>
    </section>
  );
};
