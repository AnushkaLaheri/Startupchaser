"use client";

import { slidesData2 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden swiper-parent"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div className="heading vstack gap-2 justify-center items-center text-center panel">
                  <h2 className="title h3 xl:h2 m-0">
                    Latest from{" "}
                    <span className="text-tertiary dark:text-primary">
                      our blog
                    </span>
                  </h2>
                </div>
              </div>
              <div>
                <div className="content panel">
                  <Swiper
                    className="swiper swiper-match overflow-unset lg:overflow-hidden py-2"
                    spaceBetween={24}
                    slidesPerView={1.1}
                    centeredSlides={true}
                    initialSlide={1}
                    pagination={{ clickable: true, el: ".spdt1" }}
                    modules={[Pagination]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.1,
                      },
                      640: {
                        slidesPerView: 2.3,
                        centeredSlides: false,
                      },
                      768: {
                        slidesPerView: 3.22,
                        centeredSlides: false,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {slidesData2.map((slide) => (
                      <SwiperSlide key={slide.id}>
                        <article className="post type-post panel overflow-hidden vstack p-1 bg-white text-dark duration-150 hover:-translate-y-1 rounded-1-5">
                          <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              alt={slide.title}
                              src={slide.imgSrc}
                              width={768}
                              height={560}
                            />
                            <Link
                              href={`/blog-details/${slide.id}`} // Link added directly in JSX
                              className="position-cover"
                              data-caption={slide.title}
                            />
                          </figure>
                          <div className="panel vstack gap-1 p-2">
                            <Link
                              className="text-none"
                              href={`/blog-details/${slide.id}`}
                            >
                              {" "}
                              {/* Link added directly in JSX */}
                              <h3 className="post-title h5 m-0 ltr:pe-4 rtl:ps-4 text-dark">
                                <span>{slide.title}</span>
                              </h3>
                            </Link>
                            <div className="content vstack justify-between gap-narrow">
                              <p className="post-excrept fs-6 opacity-70">
                                {slide.excerpt}
                              </p>
                              <Link
                                href={`/blog-details/${slide.id}`} // Link added directly in JSX
                                className="uc-link text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2"
                              >
                                <span>Read post</span>
                                <i className="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}

                    <div className="swiper-pagination position-relative mt-4 spdt1 text-tertiary dark:text-primary" />
                  </Swiper>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={`/blog`}
                  className="btn btn-md btn-primary border mx-auto"
                >
                  More articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
