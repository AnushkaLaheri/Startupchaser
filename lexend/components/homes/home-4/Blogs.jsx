import { blogPosts2 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800 rounded-1-5 lg:rounded-2"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack sm:hstack gap-4 justify-between md:items-end panel flex-sm-column section-heading-2"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="vstack gap-2">
                  <span className="fw-bold text-primary dark:text-secondary">
                    Our insights
                  </span>
                  <h2 className="title h3 lg:h2 xl:h1 m-0">
                    Latest posts and updates
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/blog`}
                    className="btn btn-sm lg:btn-md btn-primary rounded-default"
                  >
                    View all posts
                  </Link>
                </div>
              </div>
              <div className="content panel">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                  {blogPosts2.map((post, index) => (
                    <div key={index}>
                      <article className="post type-post panel overflow-hidden vstack rounded-1-5 bg-white dark:bg-gray-800">
                        <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={post.imageSrc}
                            width={1280}
                            height={853}
                            alt={post.altText}
                          />
                          <Link
                            href={`/blog-details/${post.id}`}
                            className="position-cover"
                            data-caption={post.altText}
                          ></Link>
                        </figure>
                        <div className="panel vstack gap-1 p-2 lg:p-3 lg:pt-2">
                          <Link
                            className="post-category text-primary fw-normal text-none fw-bold fs-7 text-primary dark:text-secondary"
                            href={`/blog-category/${post.category}`}
                          >
                            {post.category}
                          </Link>
                          <Link
                            className="text-none"
                            href={`/blog-details/${post.id}`}
                          >
                            <h3 className="post-title panel h5 lg:h4 m-0 ltr:pe-4 rtl:ps-4">
                              <span>{post.title}</span>
                              <i className="position-absolute top-0 ltr:end-0 rtl:start-0 mt-narrow icon-1 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                            </h3>
                          </Link>
                          <p className="post-excrept fs-6 opacity-70">
                            {post.excerpt}
                          </p>
                          <div className="post-meta hstack gap-1 panel overflow-hidden mt-2">
                            <Link href={`/blog-author/Amir Khan`}>
                              <Image
                                src={post.authorImage}
                                width={150}
                                height={150}
                                alt={post.authorName}
                                className="w-40px h-40px rounded-circle"
                              />
                            </Link>
                            <div className="vstack gap-0">
                              <Link
                                href={`/blog-author/Amir Khan`}
                                className="text-none fw-bold text-dark dark:text-white"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
