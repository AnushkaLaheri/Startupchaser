import { blogPosts3, blogPosts5 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <div
      id="insights"
      className="insights section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 xl:py-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack sm:hstack gap-4 justify-between items-center md:items-end panel flex-sm-column section-heading-2"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="vstack items-center lg:items-start gap-2 text-center lg:text-start ">
                  <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                    <span className="fs-8 fw-bold text-uppercase">
                      Insights
                    </span>
                  </div>
                  <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                    Latest posts, tutorials{" "}
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      and updates
                    </span>
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/blog`}
                    className="btn btn-sm lg:btn-md btn-primary px-3"
                  >
                    <span>View all posts</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </Link>
                </div>
              </div>
              <div className="content panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2">
                  {blogPosts5.map((post) => (
                    <div key={post.id}>
                      <article className="post type-post panel overflow-hidden vstack gap-2 p-2 border rounded-1-5">
                        <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-1 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt={post.imageAlt}
                            src={post.imgSrc}
                            width="1280"
                            height="853"
                          />
                          <Link
                            href={`/blog-details/${post.id}`}
                            className="position-cover"
                            data-caption={post.imageAlt}
                          ></Link>
                        </figure>
                        <div className="panel vstack gap-1">
                          <h3 className="post-title panel h4 m-0">
                            <Link
                              className="text-none"
                              href={`/blog-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="post-excrept fs-6 opacity-70">
                            {post.excerpt}
                          </p>
                          <div className="post-meta hstack gap-1 panel overflow-hidden mt-2">
                            <Link href={`/blog-author/Amir Khan`}>
                              <Image
                                alt={post.authorName}
                                className="w-40px h-40px rounded-circle"
                                src={post.authorImage}
                                width="150"
                                height="150"
                              />
                            </Link>
                            <div className="vstack gap-0">
                              <Link
                                href={`/blog-author/Amir Khan`}
                                className="text-none fw-bold text-black dark:text-white"
                              >
                                {post.authorName}
                              </Link>
                              <div className="post-date hstack gap-narrow fs-7 opacity-70">
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                  <div>
                    <div className="row child-cols-12 g-2">
                      {blogPosts3.slice(0, 3).map((post, index) => (
                        <div key={index}>
                          <article className="post type-post panel overflow-hidden p-2 border rounded-1-5">
                            <div className="panel hstack gap-2">
                              <div className="w-80px lg:w-100px">
                                <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                                  <Image
                                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src={post.imgSrc}
                                    width={1280}
                                    height={853}
                                    alt={post.alt}
                                  />
                                  <Link
                                    href={`/blog-details/${post.id}`}
                                    className="position-cover"
                                    data-caption={post.caption}
                                  ></Link>
                                </figure>
                              </div>
                              <div className="panel vstack gap-narrow">
                                <div className="post-date hstack gap-narrow fs-7 opacity-70">
                                  <span>{post.date}</span>
                                </div>
                                <h3 className="post-title panel h5 m-0">
                                  <Link
                                    className="text-none"
                                    href={`/blog-details/${post.id}`}
                                  >
                                    {post.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="row child-cols-12 g-2">
                      {blogPosts3.slice(3, 6).map((post, index) => (
                        <div key={index}>
                          <article className="post type-post panel overflow-hidden p-2 border rounded-1-5">
                            <div className="panel hstack gap-2">
                              <div className="w-80px lg:w-100px">
                                <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-1 uc-transition-toggle overflow-hidden">
                                  <Image
                                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    src={post.imgSrc}
                                    width={1280}
                                    height={853}
                                    alt={post.alt}
                                  />
                                  <Link
                                    href={`/blog-details/${post.id}`}
                                    className="position-cover"
                                    data-caption={post.caption}
                                  ></Link>
                                </figure>
                              </div>
                              <div className="panel vstack gap-narrow">
                                <div className="post-date hstack gap-narrow fs-7 opacity-70">
                                  <span>{post.date}</span>
                                </div>
                                <h3 className="post-title panel h5 m-0">
                                  <Link
                                    className="text-none"
                                    href={`/blog-details/${post.id}`}
                                  >
                                    {post.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
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
