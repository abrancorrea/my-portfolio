import Image from "next/image";
import React from "react";

export const HomeCircles = () => {
  return (
    <div className="home-circles h-full w-full flex items-center justify-center">
      <div className="photo-circle mx-auto w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] relative flex items-center justify-center">
        <div className="border-circle absolute -left-[100%] lg:-left-[20%] -top-[10%] lg:top-[40%]">
          <svg
            width="350"
            height="350"
            viewBox="0 0 492 492"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="246" cy="246" r="245.5" stroke="url(#paint0_linear_543_86)" />
            <defs>
              <linearGradient
                id="paint0_linear_543_86"
                x1="369"
                y1="399.629"
                x2="158.07"
                y2="79.6863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13ADC7" />
                <stop offset="0.666667" stopColor="#6978D1" />
                <stop offset="1" stopColor="#945DD6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="photo-circle-svg z-10 bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600 rounded-full">
          <Image
            width="200"
            height="200"
            className="rounded-full h-full w-full transition-all scale-[98%] grayscale hover:grayscale-0"
            alt="profile-picture"
            src="/profile.jpg"
            priority
          />
        </div>

        <div className="full-circle absolute top-[60%] lg:top-[56%] -right-[30%] lg:right-[0]">
          <svg
            width="174"
            height="173"
            viewBox="0 0 174 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_583_188)">
              <circle
                cx="86.6908"
                cy="76.532"
                r="56.4613"
                fill="url(#paint0_linear_583_188)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_583_188"
                x="0.229492"
                y="0.0706787"
                width="172.922"
                height="172.923"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.698039 0 0 0 0 1 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_583_188"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_583_188"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_583_188"
                x1="137.209"
                y1="118.938"
                x2="62.3213"
                y2="24.4017"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13ADC7" />
                <stop offset="0.666667" stopColor="#6978D1" />
                <stop offset="1" stopColor="#945DD6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
