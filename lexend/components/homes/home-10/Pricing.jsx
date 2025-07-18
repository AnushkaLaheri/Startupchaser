"use client";
import { pricingPlans5 } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div
        className="section-outer panel py-6 xl:py-10 lg:mx-2 mt-2 rounded-2 xl:rounded-3 bg-gray-800 dark:bg-gray-300 dark:bg-opacity-15 text-white"
        data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="section-header vstack items-center gap-2 lg:gap-3"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <h2 className="h3 md:h1 lg:display-5 m-0 text-center max-w-650px mx-auto text-white">
                  Seamless prices and scalable plans
                </h2>
              </div>
              <div
                className="panel w-100"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <ul
                  className="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto border"
                  data-uc-switcher="swiping: false;"
                  role="tablist"
                >
                  <li
                    className={!isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(false)}
                  >
                    <a className="d-flex justify-center text-white">
                      Pay monthly
                    </a>
                  </li>
                  <li
                    className={isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(true)}
                  >
                    <a className="d-flex justify-center text-white">
                      Pay yearly
                    </a>
                    <Image
                      className="position-absolute top-50 start-100 translate-middle-y mt-n3 ltr:ms-2 rtl:me-2 text-tertiary d-none md:d-block"
                      alt="50% OFF"
                      data-uc-svg=""
                      src="/assets/images/template/50_off.svg"
                      width={130}
                      height={56}
                    />
                  </li>
                </ul>
                <div className="uc-switcher mt-4 lg:mt-6" role="presentation">
                  <li className="uc-active">
                    <Swiper
                      spaceBetween={24}
                      observeSlideChildren
                      breakpoints={{
                        0: {
                          slidesPerView: 1.1,
                        },
                        420: { slidesPerView: 2.1, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                      }}
                      className="swiper overflow-unset lg:overflow-hidden"
                    >
                      {pricingPlans5.map((plan, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div
                            className={`pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center ${plan.bgColor}`}
                          >
                            <span className="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">
                              {plan.title}
                            </span>
                            <p className="pricing-box-desc opacity-70">
                              {plan.description}
                            </p>
                            <div className="pricing-box-price hstack justify-center gap-narrow mt-2">
                              <h4 className="price h1 lg:display-5 m-0 text-inherit">
                                $
                                {isYearly
                                  ? Math.round(plan.price * 6)
                                  : plan.price}
                              </h4>
                              <span className="duration fs-7 opacity-70">
                                {isYearly ? "/ year" : "/ month"}
                              </span>
                            </div>
                            <p className="pricing-box-bill fs-7 opacity-70">
                              {isYearly
                                ? "Billed once yearly"
                                : "Billed once monthly"}
                            </p>
                            <hr />
                            <ul className="nav-y items-center gap-1 fs-6">
                              <li className="mb-1">Standout features</li>
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                  <i className="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                              <Link
                                href={plan.cta.link}
                                className={
                                  index == 1
                                    ? "btn btn-md btn-primary border"
                                    : "btn btn-md btn-secondary w-100"
                                }
                              >
                                {plan.cta.text}
                              </Link>
                              <span className="fs-7 opacity-70">
                                No credit card required!
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </div>
                <p className="text-center mt-4 lg:mt-6">
                  *Yearly discount available on select plans.
                </p>
              </div>
              <div
                className="panel w-100 max-w-lg"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <div
                  className="row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                >
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">
                        280+
                      </h5>
                      <p className="fw-medium">Track of leads</p>
                    </div>
                  </div>
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">
                        90%
                      </h5>
                      <p className="fw-medium">Satisfied users</p>
                    </div>
                  </div>
                  <div style={{ transform: "translateY(0px)", opacity: 1 }}>
                    <div className="fact-item panel vstack gap-1">
                      <h5 className="h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary">
                        10.2k
                      </h5>
                      <p className="fw-medium">Team collaborations</p>
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
