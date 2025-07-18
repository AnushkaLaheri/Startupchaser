"use client";

import { testimonialsData } from "@/data/testimonials";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials2() {
  return (
    <div
      id="testimonials"
      className="testimonials section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100);"
            >
              <div className="section-header vstack items-center gap-2 lg:gap-3">
                <h2 className="h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto">
                  What our clients sharing about us!
                </h2>
              </div>
              <div className="panel w-100 swiper-parent">
                <Swiper
                  modules={[Pagination]}
                  className="swiper"
                  spaceBetween={16}
                  slidesPerView={1}
                  centeredSlides={true}
                  pagination={{ clickable: true, el: ".spdt2" }}
                >
                  {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="panel vstack items-center gap-4 text-center">
                        <div className="panel vstack items-center gap-2 lg:gap-4">
                          <div className="panel">
                            <Image
                              className="w-48px lg:w-64px h-48px lg:h-64px rounded-circle"
                              alt={`${testimonial.name} — ${testimonial.role}`}
                              src={testimonial.avatarSrc}
                              width={150}
                              height={150}
                            />
                          </div>
                          <p className="fs-5 lg:fs-4 xl:fs-3 ft-secondary fw-bold text-dark dark:text-white">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div className="panel vstack gap-2">
                          <div className="panel vstack gap-narrow">
                            <h6 className="h6 lg:h5 m-0">{testimonial.name}</h6>
                            <span className="opacity-70">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="swiper-pagination position-relative mt-4 lg:mt-6 text-primary dark:text-tertiary spdt2" />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
