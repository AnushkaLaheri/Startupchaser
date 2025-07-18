"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails1({ blogItem }) {
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog-category/Strategy`}>Strategy</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/post-full.jpg"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  She started her blog exactly six months before I launched
                  Camels &amp; Chocolate, and she really set the bar high for my
                  own blog birthday, Y’all this summer! I’ve already been
                  brainstorming party ideas … who wants to come? It’s no
                  coincidence that Buster Keaton and Charlot’s movies of the and
                  award-winning chefs about what exactly makes their hometowns
                  In fact, not being able to rely on spoken word made them
                  better storytellers. They fully understood and used the power
                  of showing without words. A range of amenities provides many
                  things to do in Bellevue. About 40 percent of the city’s
                  population are minorities, which contributes to an overall
                  diverse range of lifestyles and ideas.
                </p>
                <p className="mt-3">
                  I talked to climbers, Olympic mountain bikers, musicians, and
                  award-winning chefs about what exactly makes their hometowns
                  so special and fun.
                </p>
                <div className="panel mt-3">
                  <figure className="float-end ms-3 mb-1">
                    <Item
                      original="/assets/images/blog/post-1.jpg"
                      thumbnail="/assets/images/blog/post-1.jpg"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Holding flower, by Anthony Tran"
                            src="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Holding flower, by Anthony Tran"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Holding flower, by Anthony Tran
                    </figcaption>
                  </figure>
                  <p>
                    Bike paths and sidewalks make getting to and from the city’s
                    many festivals, museums, restaurants and music venues easy.
                    A range of amenities provides many things to do in Bellevue.
                    About 40 percent of the city’s population are minorities,
                    which contributes to an overall diverse range of lifestyles
                    and ideas.
                  </p>
                  <p className="mt-3">
                    While Denver sits at the base of the Rocky Mountains, it’s
                    not considered a mountain town since it takes at least an
                    hour to get to the Rockies for snowboarding and ski
                    activities, a local expert explained. Olympic mountain
                    bikers, musicians, and award-winning chefs about what
                    exactly makes their hometowns so special and fun.
                  </p>
                  <p className="mt-3">
                    In fact, not being able to rely on spoken word made them
                    better storytellers. They fully understood and used the
                    power of showing without words. They fully understood and
                    used the power of showing without words. They fully
                    understood and used the power of showing without words.
                  </p>
                </div>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Capital of Texas</h4>
                <p>
                  Visual storytelling is simply the way most brands will decide
                  to go in 2016 &amp; beyond, as they try to tell their story to
                  their customers the oldest and most important unwritten rule
                  in film industry says that you shouldn’t rely much on words to
                  tell your story. In fact, you should rely on them as less as
                  possible. It’s no coincidence that Buster Keaton and Charlot’s
                  movies remain among the biggest classic movies of all time. In
                  fact, not being able to rely on spoken word made them better
                  storytellers. They fully understood and used the power of
                  showing without words.
                </p>
                <p className="mt-3">
                  While Denver sits at the base of the Rocky Mountains, it’s not
                  considered a mountain town since it takes at least an hour to
                  get to the Rockies for snowboarding and ski activities, a
                  local expert explained sits at the base of the Rocky
                  Mountains, it’s not considered a mountain town since it takes
                  at least an hour to get to the Rockies for snowboarding and
                  ski activities, a local expert explained.
                </p>
                <figure className="my-3 sm:my-4">
                  <Item
                    original="/assets/images/blog/post-2.jpg"
                    thumbnail="/assets/images/blog/post-2.jpg"
                    width="1280"
                    height="853"
                  >
                    {({ ref, open }) => (
                      <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                        <Image
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt="Pink Marketing, by Mak"
                          src="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                          ref={ref}
                        />
                        <a
                          onClick={open}
                          className="position-cover"
                          data-caption="Pink Marketing, by Mak"
                        ></a>
                      </figure>
                    )}
                  </Item>
                  <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                    Pink Marketing, by Mak
                  </figcaption>
                </figure>
                <p>
                  While Denver sits at the base of the Rocky Mountains, it’s not
                  considered a mountain town since it takes at least an hour to
                  get to the Rockies for snowboarding and ski activities, a
                  local expert explained. Olympic mountain bikers, musicians,
                  and award-winning chefs about what exactly makes their
                  hometowns so special and fun. <br />
                  In fact, not being able to rely on spoken word made them
                  better storytellers. They fully understood and used the power
                  of showing without words.
                </p>
                <p className="mt-3">
                  Probably the oldest and most important unwritten rule in film
                  industry says that you shouldn’t rely much on words to tell
                  your story. In fact, you should rely on them as less as
                  possible is simply the way most brands will decide to go in
                  2016 &amp; beyond, as they try to tell their story to their
                  customers.
                </p>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                  Great Schools and Entertainment
                </h4>
                <p>
                  Education is a high point when it comes to analyzing the
                  quality of life factors that make Ann Arbor one of the best
                  places to live. The University of Michigan, which has 43,000
                  students, makes Ann Arbor a perennial candidate for our annual
                  ranking of the best college towns and plays a big role in the
                  city’s economy and culture.
                </p>
                <p className="mt-3">
                  While Denver sits at the base of the Rocky Mountains, it’s not
                  considered a mountain town since it takes considered at least
                  an hour to get to the Rockies for snowboarding and ski
                  activities, a local expert explained sits at the base of the
                  Rocky Mountains, it’s not considered a mountain town since it
                  takes at least an hour to get to the Rockies for snowboarding
                  and ski activities, a local expert explained.
                </p>
                <div className="panel my-3">
                  <figure className="float-start me-3 mb-0">
                    <Item
                      original="/assets/images/blog/post-3.jpg"
                      thumbnail="/assets/images/blog/post-3.jpg"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Great Schools and Entertainment"
                            src="/assets/images/blog/post-3.jpg"
                            width="1280"
                            height="854"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Great Schools and Entertainment"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      Great Schools and Entertainment
                    </figcaption>
                  </figure>
                  <p>
                    Bike paths and sidewalks make getting to and from the city’s
                    many festivals, museums, restaurants and music venues easy.
                    A range of amenities provides many things to do in Bellevue.
                    About 40 percent of the city’s population are minorities,
                    which contributes to an overall diverse range of lifestyles
                    and ideas.
                  </p>
                  <p>
                    While Denver sits at the base of the Rocky Mountains, it’s
                    not considered a mountain town since it takes at least an
                    hour to get to the Rockies for snowboarding and ski
                    activities, a local expert explained. Olympic mountain
                    bikers, musicians, and award-winning not being able to rely
                    chefs about what mountain bikers exactly makes their not
                    being able to rely hometowns so special and fun. In fact,
                    not being able to rely on spoken word made them better
                    storytellers. They fully understood and used the power of
                    showing without words. They fully understood and used the
                    power of showing without words.
                  </p>
                </div>
                <p>
                  Probably the oldest and most important unwritten rule in film
                  industry says that you shouldn’t rely much on words to tell
                  your story. In fact, you should rely on them as less as
                  possible is simply the way most brands will decide to go in
                  2016 &amp; beyond, as they try to tell their story to their
                  customers.
                </p>
                <p className="mt-3">
                  I talked to climbers, Olympic mountain bikers, musicians, and
                  award-winning chefs about what exactly makes their hometowns
                  so special and fun.
                </p>
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Marketing
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Strategies
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Boost <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Business
                  </a>
                </li>
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Share:</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Amir Nisi"
                      src="/assets/images/blog/post-author.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Amir Nisi</h4>
                    <p className="fs-6">
                      Creative and experienced content writer with 6+ years of
                      experience eager to create unique content strategy for
                      Lexend to turn website visitors into customers.
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="How can marketing help your business?"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Prev Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    How can marketing help your business?
                  </h6>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    Top 5 reasons to invest in marketing
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Top 5 reasons to invest in marketing"
                      src="/assets/images/blog/img-01.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="Top 5 reasons to invest in marketing"
                    ></Link>
                  </figure>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
            </div>
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
