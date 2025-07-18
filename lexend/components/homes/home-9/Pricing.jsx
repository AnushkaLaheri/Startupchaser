"use client";
import { pricingPlans4 } from "@/data/pricing";
import Link from "next/link";

import React, { useState } from "react";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-50 dark:bg-tertiary-700 border border-tertiary-50 dark:border-white dark:border-opacity-15">
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
        <div className="position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block" />
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
                <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                  Pricing
                </span>
                <h2 className="h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto">
                  Scalable plans{" "}
                  <span className="text-tertiary dark:text-primary">
                    to fit any business size
                  </span>
                </h2>
              </div>
              <div
                className="panel"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <ul
                  className="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white border border-dark dark:border-white dark:border-opacity-15"
                  data-uc-switcher="swiping: false;"
                  role="tablist"
                >
                  <li
                    className={!isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(false)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Pay monthly
                    </a>
                  </li>
                  <li
                    className={isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(true)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Pay yearly
                    </a>
                  </li>
                </ul>
                <div
                  className="uc-switcher mt-4 lg:mt-6 lg:w-800px"
                  role="presentation"
                >
                  <li
                    className="uc-active"
                    id="uc-switcher-24"
                    role="tabpanel"
                    aria-labelledby="uc-switcher-23"
                  >
                    <div className="panel">
                      <div className="row child-cols-12 lg:child-cols-6 g-2">
                        {pricingPlans4.map((plan, index) => (
                          <div key={index}>
                            <div className="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-primary text-dark dark:text-white dark:bg-gradient-45 from-tertiary-600 to-transparent">
                              <div className="hstack items-start justify-between gap-2 w-full">
                                <div className="vstack items-start gap-1">
                                  <span className="pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill">
                                    {plan.title}
                                  </span>
                                  <p className="pricing-box-desc opacity-70">
                                    {isYearly
                                      ? plan.descriptionYearly
                                      : plan.description}
                                  </p>
                                </div>
                                <div className="pricing-box-price">
                                  <h4 className="price h2 fw-normal m-0 text-inherit">
                                    <sup className="fs-4 mt-n4">$</sup>
                                    {isYearly ? plan.price * 10 : plan.price}
                                  </h4>
                                </div>
                              </div>
                              <hr />
                              <ul className="nav-y gap-1 fs-6">
                                <li className="mb-1">
                                  <b>Standout features</b>
                                </li>
                                {plan.features.map((feature, i) => (
                                  <li key={i}>
                                    <i className="icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <div className="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                                <Link
                                  href="/sign-up"
                                  className={plan.buttonClass}
                                >
                                  {plan.buttonText}
                                </Link>
                                <span className="fs-7 opacity-70">
                                  No credit card required!
                                </span>
                              </div>
                            </div>{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </div>
                <p className="text-center mt-4 lg:mt-6">
                  *Yearly discount available on select plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
