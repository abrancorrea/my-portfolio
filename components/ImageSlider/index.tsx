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
  className?: string;
}

export const ImageSlider = ({ images, className }: ImageSliderProps) => (
  <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    spaceBetween={50}
    pagination
    centeredSlides
  >
    {images.map((image) => (
      <SwiperSlide key={image.alt}>
        <img alt={image.alt} src={image.url} className={className} />
      </SwiperSlide>
    ))}
  </Swiper>
);
