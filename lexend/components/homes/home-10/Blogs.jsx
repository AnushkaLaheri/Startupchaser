"use client";

import { blogPosts6 } from "@/data/blogs";
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
      <div
        className="section-outer panel py-6 lg:py-8 xl:py-10 mx-2 bg-secondary dark:bg-gray-300 dark:bg-opacity-15 rounded-1-5 lg:rounded-2 xl:rounded-3"
        data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
      >
        <div className="container">
          <div className="section-inner panel vstack gap-4 lg:gap-8">
            <div className="section-header vstack items-center gap-2 lg:gap-3">
              <h2 className="h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto">
                From the insights
              </h2>
            </div>
            <div className="section-content panel w-100">
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1.1}
                pagination={{ clickable: true, el: ".spdb1" }}
                breakpoints={{
                  0: { slidesPerView: 1.1, spaceBetween: 24 },
                  640: { slidesPerView: 2, spaceBetween: 24 },
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="swiper-match overflow-unset lg:overflow-hidden py-2"
              >
                {blogPosts6.map((post, index) => (
                  <SwiperSlide key={index}>
                    <article className="post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1">
                      <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt={post.alt}
                          src={post.imgSrc}
                          width={768}
                          height={560}
                        />
                        <Link
                          href={`/blog-details/${post.id}`}
                          className="position-cover"
                          data-caption={post.alt}
                        />
                      </figure>
                      <div className="panel vstack items-center text-center gap-2 p-2">
                        <Link
                          className="text-none"
                          href={`/blog-details/${post.id}`}
                        >
                          <h3 className="post-title h4 xl:h3 m-0">
                            <span>{post.title}</span>
                          </h3>
                        </Link>
                        <Link
                          href={`/blog-details/${post.id}`}
                          className="uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold"
                        >
                          <span>Read more</span>
                        </Link>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination position-relative mt-4 text-primary dark:text-tertiary spdb1" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
