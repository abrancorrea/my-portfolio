import React, { CSSProperties, ReactNode } from "react";
import { TimelineStep } from "./types";
import { DateTime } from "luxon";

export type TimelineProps = {
  steps: TimelineStep[];
  pointComponent?: ReactNode;
  style?: CSSProperties;
};

export const Timeline = ({ steps, style, pointComponent }: TimelineProps) => {
  return (
    <ul className="timeline-component lg:flex" style={style}>
      {steps.map(({ year, summary }, idx) => (
        <li
          key={year}
          className="flex gap-7 lg:flex-col flex-wrap justify-between min-h-[200px] lg:min-w-[200px]"
        >
          <div className="timeline-year text-white w-[10%] text-base font-semibold">
            {DateTime.fromISO(year).toFormat("yyyy")}
          </div>
          <div className="timeline-point flex flex-col lg:flex-row items-center w-[10px] lg:w-auto">
            {pointComponent || (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  rx="12"
                  fill="url(#paint0_linear_208_484)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_208_484"
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13ADC7" />
                    <stop offset="0.666667" stopColor="#6978D1" />
                    <stop offset="1" stopColor="#945DD6" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            {idx < steps.length - 1 && (
              <div className="bg-white grow w-[2px] lg:h-[2px]" />
            )}
          </div>
          <div className="timeline-description text-coldgrey w-[60%] lg:w-[80%] grow mb-6 lg:mb-0 lg:mr-10 text-sm font-medium">
            {summary}
          </div>
        </li>
      ))}
    </ul>
  );
};
