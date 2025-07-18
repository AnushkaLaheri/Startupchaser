"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands() {
  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      centeredSlidesBounds={true}
      breakpoints={{
        640: {
          slidesPerView: 4,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
      }}
    >
      {brands.map((brand, index) => (
        <SwiperSlide
          className="brand-item swiper-slide text-center"
          key={index}
        >
          <Image
            className="brand-item-image h-40px image-filter"
            src={brand.src}
            width={165}
            height={48}
            alt={brand.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
