import React from "react";

export const PointBall = () => {
  return (
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
          <stop stop-color="#13ADC7" />
          <stop offset="0.666667" stop-color="#6978D1" />
          <stop offset="1" stop-color="#945DD6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
