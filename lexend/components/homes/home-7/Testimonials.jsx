"use client";

import { brands4 } from "@/data/brands";
import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              //   data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                See what our{" "}
                <span className="px-1 bg-tertiary text-primary">
                  happy users
                </span>{" "}
                are sharing about us!
              </h2>
              <div className="panel w-100">
                <div
                  className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 mb-4 lg:mb-6 xl:mb-8 text-center"
                  data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                >
                  <p className="h6">
                    Trusted by over 1.7 million companies worldwide
                  </p>
                  <div className="panel">
                    <div className="element-brands text-gray-900 dark:text-white mask-x">
                      <Swiper
                        slidesPerView={2.25}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 7000, disableOnInteraction: true }}
                        speed={7000}
                        breakpoints={{
                          0: { slidesPerView: 2.25 },
                          640: { slidesPerView: 4, centeredSlides: false },
                          1024: { slidesPerView: 6, spaceBetween: 100 },
                        }}
                        modules={[Autoplay]}
                      >
                        {brands4.map((brand, index) => (
                          <SwiperSlide key={index} className="text-center">
                            <Image
                              className="brand-item-image h-40px xl:h-48px"
                              alt={brand.alt}
                              src={brand.src}
                              width={brand.width}
                              height={48}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                <Swiper
                  className="swiper overflow-unset"
                  spaceBetween={16}
                  slidesPerView={1.25}
                  centeredSlides={true}
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
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150">
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
              <a
                href="#"
                className="uc-link dark:text-tertiary fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>
              <Image
                className="w-500px text-primary dark:text-gray-200"
                alt="producthunt-badges"
                data-uc-svg=""
                src="/assets/images/vectors/producthunt-badges.svg"
                width={426}
                height={37}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
