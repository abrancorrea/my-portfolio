import React from "react";

export const Links = () => {
  return (
    <div className="w-full md:w-auto justify-between md:justify-start items-end md:gap-20 inline-flex order-3 md:order-2">
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <a
          href="#list-of-projects"
          className="text-white text-base md:text-lg font-medium"
        >
          Projects
        </a>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <a
          href="#list-of-technologies"
          className="text-white text-base md:text-lg font-medium"
        >
          Technologies
        </a>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <a href="#about-me" className="text-white text-base md:text-lg font-medium">
          About me
        </a>
      </div>
    </div>
  );
};
