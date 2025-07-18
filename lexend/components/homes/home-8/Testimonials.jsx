"use client";

import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="section-header vstack items-center gap-2 lg:gap-3">
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                  Testimonials
                </span>
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                  See what our{" "}
                  <span className="text-tertiary dark:text-primary">
                    happy users
                  </span>{" "}
                  are sharing about us!
                </h2>
              </div>
              <div className="panel w-100">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1.25}
                  centeredSlides={true}
                  className="swiper overflow-unset swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                  breakpoints={{
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                  }}
                  initialSlide={2}
                >
                  {testimonials4.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-tertiary-700">
                        <div className="panel vstack items-start gap-2">
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            “{testimonial.text}”
                          </p>
                        </div>
                        <div className="panel hstack gap-2 mt-2">
                          <Image
                            className="w-40px rounded-circle"
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            width={150}
                            height={150}
                          />
                          <div className="panel vstack justify-center gap-narrow">
                            <ul className="nav-x gap-0 text-warning">
                              {Array(5)
                                .fill()
                                .map((_, starIndex) => (
                                  <li key={starIndex}>
                                    <i className="icon icon-narrow unicon-star-filled" />
                                  </li>
                                ))}
                            </ul>
                            <span className="fw-bold ft-secondary m-0">
                              {testimonial.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
