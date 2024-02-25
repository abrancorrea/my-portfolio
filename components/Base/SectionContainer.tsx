import React from "react";

export type SectionContainerProps = {
  title?: string;
  id?: string;
  children?: React.ReactNode;
};

export const SectionContainer = ({ title, id, children }: SectionContainerProps) => {
  return (
    <section
      id={id}
      className="w-full min-h-96 flex flex-col md:flex-row md:justify-between md:flex-wrap gap-y-0 lg:gap-y-9 xl:gap-y-0 items-center px-10 md:px-5 mx-auto my-28 relative"
    >
      {title && (
        <h3 className="text-xl md:text-3xl mb-8 self-start md:w-full text-white font-semibold">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};
