import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

export default function Blogs2() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9">
            <header className="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Blog — Classic
              </h1>
            </header>
            <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 gx-2 xl:gx-4">
              {blogsPosts4.slice(0, 7).map((elm, i) => (
                <div key={i} className="col-12">
                  <article className="post type-post panel rounded-3 p-2 md:p-4 bg-secondary dark:bg-gray-800">
                    <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                      <div className="sm:col-4 md:col-6 lg:col-4">
                        <div className="panel">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 uc-transition-toggle overflow-hidden">
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
                          <Link
                            className="post-category text-primary fw-normal text-none fw-bold fs-7 py-narrow px-1 rounded bg-primary text-white position-absolute top-0 start-0 m-2"
                            href={`/blog-category/${elm.category}`}
                          >
                            {elm.category}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="vstack items-start gap-2 md:gap-3">
                          <ul className="post-meta nav-x ft-tertiary justify-start gap-1 fs-7">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Image
                                  src={elm.authorImg}
                                  alt="David"
                                  width={150}
                                  height={150}
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
                          <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                            <Link
                              className="text-none"
                              href={`/blog-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          <p className="fs-6 md:fs-5 d-none md:d-block">
                            {elm.desc}
                          </p>
                          <Link
                            className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block"
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
