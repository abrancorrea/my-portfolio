import React from "react";

export interface SectionContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
  return (
    <div
      className={`shadow-black shadow-md basis-full px-7 pt-7 h-full bg-[#0E0D1B] rounded-xl min-h-[600px] lg:min-h-full ${className}`}
    >
      {children}
    </div>
  );
};
