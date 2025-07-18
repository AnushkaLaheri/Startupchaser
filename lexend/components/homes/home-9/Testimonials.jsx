"use client";
import { testimonials5 } from "@/data/testimonials";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [isViewAll, setIsViewAll] = useState(false);
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".isotop-element",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack gap-4 "
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="section-header vstack items-center gap-2 lg:gap-3">
                <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                  Clients feedback
                </span>
                <h2 className="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">
                  What our{" "}
                  <span className="text-tertiary dark:text-primary">
                    satisfied clients
                  </span>{" "}
                  said about us!
                </h2>
              </div>
              <div
                id="clients_feedback_area"
                className={
                  !isViewAll
                    ? "panel w-100 max-w-lg mx-auto h-700px overflow-hidden"
                    : "panel w-100 max-w-lg mx-auto overflow-hidden uc-active h-auto"
                }
              >
                <div
                  className="row child-cols-4 md-child-cols-6 sm-child-cols-12 gx-4 gy-0"
                  data-uc-grid="masonry: true;"
                  ref={isotopContainer}
                >
                  {testimonials5.map(({ text, name, imgSrc }, index) => (
                    <div key={index} className={`isotop-element mt-4`}>
                      <div className="px-3 sm:px-4 py-4 panel  vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-1-5 lg:rounded-2">
                        <div className="panel vstack items-start gap-2">
                          <p className="fs-6 lg:fs-5">{text}</p>
                        </div>
                        <div className="panel hstack gap-2 mt-2">
                          <Image
                            className="w-40px rounded-circle"
                            alt={name}
                            src={imgSrc}
                            width={150}
                            height={150}
                          />
                          <div className="panel vstack justify-center gap-narrow">
                            <ul className="nav-x gap-0 text-warning">
                              {[...Array(5)].map((_, starIndex) => (
                                <li key={starIndex}>
                                  <i className="icon icon-narrow unicon-star-filled" />
                                </li>
                              ))}
                            </ul>
                            <span className="fw-bold ft-secondary dark:text-white m-0">
                              {name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  id="clients-feedback-toggle-area"
                  onClick={() => setIsViewAll((pre) => !pre)}
                  className={
                    !isViewAll
                      ? "position-absolute bottom-0 start-0 end-0 h-300px vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1"
                      : "bottom-0 start-0 end-0 vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1 mt-8"
                  }
                >
                  <a
                    className={
                      !isViewAll
                        ? "btn btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3"
                        : "btn border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3 btn-secondary"
                    }
                    data-uc-toggle="target: #clients_feedback_area; cls: uc-active"
                  >
                    {isViewAll ? "Close feedbacks" : " View all feedbacks"}
                  </a>
                </div>
              </div>
              <div className="panel max-w-700px mx-auto">
                <div
                  className="panel vstack gap-3 sm:gap-4 text-center"
                  data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                >
                  <p className="fs-6 m-0">
                    Trusted by over most popular companies worldwide
                  </p>
                  <div className="panel">
                    <div className="row child-cols g-6 items-center text-center">
                      <div>
                        <div className="panel">
                          <Image
                            className="max-w-80px lg:max-w-128px"
                            alt="brand"
                            data-uc-svg=""
                            src="/assets/images/brands/brand-01.svg"
                            width={165}
                            height={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel">
                          <Image
                            className="max-w-80px lg:max-w-128px"
                            alt="brand"
                            data-uc-svg=""
                            src="/assets/images/brands/brand-05.svg"
                            width={179}
                            height={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel">
                          <Image
                            className="max-w-80px lg:max-w-128px"
                            alt="brand"
                            data-uc-svg=""
                            src="/assets/images/brands/brand-03.svg"
                            width={178}
                            height={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="panel">
                          <Image
                            className="max-w-80px lg:max-w-128px"
                            alt="brand"
                            data-uc-svg=""
                            src="/assets/images/brands/brand-07.svg"
                            width={170}
                            height={48}
                          />
                        </div>
                      </div>
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
