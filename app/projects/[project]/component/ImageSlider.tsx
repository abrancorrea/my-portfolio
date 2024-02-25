/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { IAssetImage } from "@/types/Project";

export interface ImageSliderProps {
  images: IAssetImage[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => (
  <Swiper
    className="h-full w-full"
    modules={[Pagination]}
    slidesPerView={1}
    pagination
    centeredSlides
  >
    {images.map((image) => (
      <SwiperSlide key={image.url}>
        <img alt={image.alt} src={image.url} />
      </SwiperSlide>
    ))}
  </Swiper>
);
