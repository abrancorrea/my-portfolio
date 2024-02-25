import React from "react";

export interface PageSectionContainerProps {
  children: React.ReactNode[];
}

export const PageSectionContainer = ({ children }: PageSectionContainerProps) => {
  return (
    <section className="flex flex-row gap-5 p-5 mb-10 pt-10 lg:h-[600px] flex-wrap md:flex-nowrap">
      {children}
    </section>
  );
};
