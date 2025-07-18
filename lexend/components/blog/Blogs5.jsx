import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

export default function Blogs5() {
  return (
    <div className="section py-3 sm:py-6 lg:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header className="page-header vstack justify-center items-center text-center max-w-500px mx-auto">
            <h1 className="h4 lg:h1">Blog - Grid 4 Cols</h1>
            <p className="fs-6 lg:fs-5 opacity-60">
              Olympic mountain bikers, musicians, and award-winning chefs so
              special and fun.
            </p>
          </header>
          <div className="row g-4 xl:g-8">
            <div className="col">
              <div className="panel text-center">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                  {blogsPosts4.slice(0, 8).map((elm, i) => (
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
                          <h3 className="h6 sm:h5 m-0 m-0">
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
                                <span>{elm.authorName}</span>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
                <div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
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
      </div>
    </div>
  );
}
