"use client";

import { posts } from "@/data/blogs";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blog() {
  const swiperOptions = {
    // Default options
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },
    modules: [Navigation],
    // Responsive breakpoints
    breakpoints: {
      // Small devices
      640: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      // Medium devices
      768: {
        slidesPerView: 3.22,
        spaceBetween: 24,
      },
      // Large devices
      1024: {
        slidesPerView: 3.22,
        spaceBetween: 32,
      },
    },
  };
  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden gap-3 bg-secondary dark:bg-white dark:bg-opacity-5 rounded-1-5 lg:rounded-2 swiper-parent"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div
                  className="heading vstack sm:hstack gap-4 justify-between md:items-end panel section-heading-2"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="vstack gap-2">
                    <span className="fw-bold text-primary dark:text-secondary">
                      Latest posts
                    </span>
                    <h2 className="title h3 xl:h2 m-0">Latest from insights</h2>
                    <p className="desc fs-6 sm:fs-5 xl:fs-4 opacity-70">
                      Interviews, tips, guides, industry best practices, and
                      news.
                    </p>
                  </div>
                  <div className="d-none sm:d-block">
                    <Link
                      href={`/blog`}
                      className="btn btn-sm lg:btn-md btn-primary rounded-default"
                    >
                      View all posts
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="content panel expand-container ltr:ms-0 rtl:me-0">
                  <Swiper {...swiperOptions} className="swiper">
                    {posts.map((post, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <article className="post type-post panel overflow-hidden vstack gap-3">
                          <figure className="featured-image m-0 rounded ratio ratio-4x3 rounded-1-5 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              src={post.image}
                              width={768}
                              height={560}
                              alt={post.alt}
                            />
                            <Link
                              href={`/blog-details/${post.id}`}
                              className="position-cover"
                              data-caption={post.title}
                            ></Link>
                          </figure>
                          <div className="panel vstack gap-1">
                            <Link
                              className="text-none"
                              href={`/blog-details/${post.id}`}
                            >
                              <h3 className="post-title h5 xl:h4 m-0 ltr:pe-4 rtl:ps-4">
                                <span>{post.title}</span>
                              </h3>
                            </Link>
                            <p className="post-excrept fs-7 xl:fs-6 opacity-70">
                              {post.excerpt}
                            </p>
                            <Link
                              href={`/blog-details/${post.id}`}
                              className="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2"
                            >
                              <span>Read post</span>
                              <i className="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px" />
                            </Link>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="panel hstack justify-between gap-2">
                  <div className="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-prev btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-1"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-left" />
                    </a>
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-next btn w-40px xl:w-48px h-40px xl:h-48px rounded-circle text-primary dark:text-white hover:text-white bg-white dark:bg-gray-700 hover:bg-primary shadow-xs order-2 rtl:order-0"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-right" />
                    </a>
                  </div>
                  <div className="sm:d-none">
                    <Link
                      href={`/blog`}
                      className="btn btn-sm lg:btn-md btn-primary rounded-default"
                    >
                      View all posts
                    </Link>
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
