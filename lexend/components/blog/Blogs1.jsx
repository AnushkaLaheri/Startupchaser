import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function Blogs1() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-9">
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "16%", left: "18%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/star-1.svg"
            />
          </div>
          <div
            className="position-absolute  rotate-45"
            style={{ top: "5%", right: "18%" }}
          >
            <Image
              className="w-24px text-gray-900 dark:text-white"
              width={69}
              height={95}
              alt="star-2"
              data-uc-svg=""
              src="/assets/images/template/star-2.svg"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div
            className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);"
          >
            <header className="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Insights
              </h1>
            </header>
            <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 sm:gy-6 xl:gy-8 gx-2 xl:gx-4">
              {blogsPosts4.slice(0, 1).map((elm, i) => (
                <div key={i} className="col-12">
                  <article className="post type-post panel rounded-3 p-3 bg-secondary dark:bg-gray-800">
                    <div className="panel row child-cols-12 md:child-cols-6 items-center g-3">
                      <div>
                        <figure className="featured-image m-0 rounded ratio ratio-4x3 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={853}
                            alt="Maximizing your reach with marketing strategies"
                          />
                          <Link
                            href={`/blog-details/${elm.id}`}
                            className="position-cover"
                            data-caption="Maximizing your reach with marketing strategies"
                          ></Link>
                        </figure>
                      </div>
                      <div>
                        <div className="vstack items-center gap-2 lg:gap-3">
                          <Link
                            className="post-category text-primary fw-normal text-none fw-bold fs-7 bg-primary text-white py-narrow px-1 rounded"
                            href={`/blog-category/${elm.category}`}
                          >
                            {elm.category}
                          </Link>
                          <h3 className="h4 xl:h2 m-0 text-center m-0 lg:w-500px lg:m-auto">
                            <Link
                              className="text-none"
                              href={`/blog-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={elm.authorImg}
                                  width={150}
                                  height={150}
                                  alt="David"
                                  className="w-24px h-24px rounded-circle me-narrow"
                                />
                                <Link
                                  href={`/blog-author/Amir Khan`}
                                  className="text-none fw-bold text-dark dark:text-white"
                                >
                                  {elm.authorName}
                                </Link>
                              </div>
                            </li>
                            <li className="opacity-50">•</li>
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{elm.date}</span>
                              </div>
                            </li>
                          </ul>
                          <p className="fs-6 lg:fs-5 lg:w-500px lg:mx-auto text-center md:d-none lg:d-block">
                            {elm.desc}
                          </p>
                          <Link
                            className="btn btn-text text-primary border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2"
                            href={`/blog-details/${elm.id}`}
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
              {blogsPosts4.slice(1, 7).map((elm, i) => (
                <div key={i}>
                  <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                    <Link
                      className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                      href={`/blog`}
                      style={{ borderRadius: 8 }}
                    >
                      {elm.category}
                    </Link>
                    <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src={elm.imgSrc}
                        width={1280}
                        height={853}
                        alt="Top 5 reasons to invest in marketing"
                      />
                      <Link
                        href={`/blog-details/${elm.id}`}
                        className="position-cover"
                        data-caption="Top 5 reasons to invest in marketing"
                      ></Link>
                    </figure>
                    <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                      <h3 className="h5 xl:h4 m-0 text-center m-0">
                        <Link
                          className="text-none"
                          href={`/blog-details/${elm.id}`}
                        >
                          {elm.title}
                        </Link>
                      </h3>
                      <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                        <li>
                          <div className="hstack gap-narrow ft-tertiary">
                            <Image
                              src={elm.authorImg}
                              width={150}
                              height={150}
                              alt="Sarah"
                              className="w-24px h-24px rounded-circle me-narrow"
                            />
                            <Link
                              href={`/blog-author/Amir Khan`}
                              className="text-none fw-bold text-dark dark:text-white"
                            >
                              {elm.authorName}
                            </Link>
                          </div>
                        </li>
                        <li className="opacity-50">•</li>
                        <li>
                          <div className="post-date hstack gap-narrow">
                            <span>{elm.date}</span>
                          </div>
                        </li>
                      </ul>
                    </header>
                  </article>
                </div>
              ))}
            </div>
            <div className="nav-pagination fw-medium">
              <ul
                className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary"
                data-uc-margin=""
              >
                <Pagination />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
