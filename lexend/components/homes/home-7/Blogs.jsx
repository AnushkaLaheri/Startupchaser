"use client";
import { slidesData } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden swiper-parent"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div
                  className="heading vstack gap-2 justify-center items-center text-center panel"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="title h3 xl:h2 m-0">
                    Latest from{" "}
                    <span className="px-1 bg-tertiary text-primary d-block lg:d-inline-block">
                      our insights
                    </span>
                  </h2>
                </div>
              </div>
              <div>
                <div className="content panel">
                  <Swiper
                    className="swiper p-2 swiper-match"
                    spaceBetween={16}
                    slidesPerView={1.1}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".sndbp1",
                      nextEl: ".sndbn1",
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2.3,
                        spaceBetween: 24,
                      },
                      768: {
                        slidesPerView: 3.22,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                      },
                    }}
                  >
                    {slidesData.map((slide) => (
                      <SwiperSlide key={slide.id}>
                        <article className="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                          <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              alt={slide.title}
                              src={slide.imgSrc}
                              width={768}
                              height={560}
                            />
                            <Link
                              href={`/blog-details/${slide.id}`}
                              className="position-cover"
                              data-caption={slide.title}
                            />
                          </figure>
                          <div className="panel vstack gap-1 p-2">
                            <Link
                              className="text-none"
                              href={`/blog-details/${slide.id}`}
                            >
                              {/* Add link directly here */}
                              <h3 className="post-title h5 m-0 ltr:pe-4 rtl:ps-4">
                                <span>{slide.title}</span>
                              </h3>
                            </Link>
                            <div className="content vstack justify-between gap-narrow">
                              <p className="post-excrept fs-6 opacity-70">
                                {slide.excerpt}
                              </p>
                              <Link
                                href={`/blog-details/${slide.id}`}
                                className="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2"
                              >
                                <span>Read post</span>
                                <i className="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="panel hstack justify-center items-centerborder contrast- gap-2">
                  <div className="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-prev btn w-40px sndbp1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-1"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-left" />
                    </a>
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-next btn w-40px sndbn1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-2 rtl:order-0"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
