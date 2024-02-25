"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProjectItem } from "./ProjectItem";
import "swiper/css";
import "swiper/css/pagination";
import { IProject } from "@/types/Project";

export interface HomeSliderProps {
  list: IProject[];
}

export const HomeSlider = ({ list }: HomeSliderProps) => {
  return (
    <Swiper
      className="h-full w-full"
      spaceBetween={50}
      pagination={true}
      modules={[Pagination]}
      slidesPerView="auto"
    >
      {list.map((project) => (
        <SwiperSlide key={project._id} className="pb-3 !w-[300px]">
          <ProjectItem project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
