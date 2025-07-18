import { features12 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-gray-300 dark:bg-opacity-15 rounded-bottom-2 lg:rounded-bottom-5" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="d-none xl:d-block"
              data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "5%", left: "5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/03.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "20%", left: "10%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/08.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "35%", left: "0%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/02.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "5%", right: "5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/01.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "20%", right: "10%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/06.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "35%", right: "0%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/09.png"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <h1
                      className="h2 md:h1 lg:display-5 m-0"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      <span className="text-primary dark:text-tertiary">
                        Connect Instantly,
                      </span>{" "}
                      <br className="d-none lg:d-block" />
                      Communicate Seamlessly
                    </h1>
                    <p
                      className="fs-6 xl:fs-4 xl:px-10 dark:text-white text-opacity-70"
                      data-uc-splitext="types: 'words'"
                      // data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});"
                    >
                      Stay connected with friends, family, and colleagues
                      anywhere in the world.
                    </p>
                    <div
                      className="vstack md:hstack justify-center gap-1 my-1 lg:my-3 sm-flex-column"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                    >
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md btn-outline-primary dark:border-tertiary dark:text-tertiary dark:hover:bg-tertiary dark:hover:text-primary-700 border-2 px-3 w-auto"
                      >
                        <i className="icon-narrow unicon-chat-launch fw-bold" />
                        <span>Start chatting</span>
                      </Link>
                      <a
                        href="#"
                        className="btn btn-md btn-link fw-bold text-none text-primary dark:text-tertiary"
                      >
                        Free Watch Demo
                      </a>
                    </div>
                    <div
                      className="vstack sm:hstack items-center justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                    >
                      <div className="hstack justify-center gap-2">
                        Exellent
                        <div className="rating panel">
                          <div className="hstack justify-center">
                            <i className="icon-1 unicon-star-filled text-yellow" />
                            <i className="icon-1 unicon-star-filled text-yellow" />
                            <i className="icon-1 unicon-star-filled text-yellow" />
                            <i className="icon-1 unicon-star-filled text-yellow" />
                            <i className="icon-1 unicon-star-filled text-yellow" />
                          </div>
                        </div>
                      </div>
                      <span className="desc">Based on 10,250+ reviews.</span>
                    </div>
                  </div>
                  <div className="hero-scroll-scene panel max-w-850px mx-auto">
                    <div
                      className="panel border shadow-lg rounded-1-5 p-1 bg-white dark:bg-gray-800 overflow-hidden"
                      data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                    >
                      <Image
                        className="rounded-default"
                        alt="Hero image"
                        src="/assets/images/template/home-10-hero.jpg"
                        width={1500}
                        height={1020}
                      />
                    </div>
                    <div
                      className="hero-ten-01 position-absolute w-150px xl:w-250px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ top: "20%" }}
                    >
                      <Image
                        className="rounded-2 shadow-lg border"
                        alt="hero-image"
                        data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 180];"
                        src="/assets/images/template/home-10-hero-02.png"
                        width={845}
                        height={963}
                      />
                    </div>
                    <div
                      className="hero-ten-02 position-absolute w-200px xl:w-300px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ bottom: "20%" }}
                    >
                      <Image
                        className="rounded-2 shadow-lg border"
                        alt="hero-image"
                        data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [100, 0];"
                        src="/assets/images/template/home-10-hero-01.png"
                        width={574}
                        height={142}
                      />
                    </div>
                    <div
                      className="hero-ten-03 position-absolute w-150px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ top: "10%" }}
                    >
                      <Image
                        className="rounded-2 shadow-lg border"
                        alt="hero-image"
                        data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 48];"
                        src="/assets/images/template/home-10-hero-03.png"
                        width={656}
                        height={818}
                      />
                    </div>
                  </div>
                  <div className="panel mt-3 lg:mt-4 text-center">
                    <div className="row child-cols-12 md:child-cols justify-center g-1 gx-4 lg:gx-0">
                      {features12.map((feature, index) => (
                        <div key={index} className={feature.className}>
                          <div className="hstack justify-center gap-1">
                            <span className="icon mb-narrow text-primary dark:text-tertiary">
                              <Image
                                className="w-24px lg:w-40px"
                                alt={feature.alt}
                                src={feature.src}
                                width={24}
                                height={24}
                                data-uc-svg=""
                              />
                            </span>
                            <span className="h6 mb-1 text-inherit">
                              {feature.text}
                            </span>
                          </div>
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
