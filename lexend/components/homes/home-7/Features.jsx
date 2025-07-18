"use client";
import { integrations } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const categories = [
  "Marketing Automation",
  "Scheduling",
  "Project Management",
  "Finance",
  "Spreadsheets",
];
export default function Features() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filtered, setFiltered] = useState(integrations);
  useEffect(() => {
    setFiltered(
      [...integrations].filter((elm) => elm.categories.includes(activeCategory))
    );
  }, [activeCategory]);

  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-10">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Integrations
              </span>
              <h2
                className="h3 lg:h2 m-0"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span className="px-1 bg-tertiary text-primary">
                  AI Automation
                </span>{" "}
                across 500+ apps
              </h2>
              <p
                className="fs-6 xl:fs-3 xl:px-8"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                See how we help your team solve today’s biggest challenges.
              </p>
            </div>
            <div
              className="panel vstack items-center gap-4 md:gap-6 lg:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <ul
                className="uc-subnav uc-subnav-outline-pill gap-1 lg:gap-2 fs-5 fw-medium justify-start lg:justify-center mx-auto overflow-scroll hide-scrollbar flex-nowrap max-w-100"
                data-uc-switcher="connect: .products-lisiting"
                role="tablist"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                {categories.map((category) => (
                  <li
                    key={category}
                    role="presentation"
                    className={activeCategory === category ? "uc-active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    <a>{category}</a>
                  </li>
                ))}
              </ul>
              <div
                className="products-lisiting flex-none w-100 uc-switcher"
                role="presentation"
                style={{
                  touchAction: "pan-y pinch-zoom",
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
              >
                <div
                  className="uc-active"
                  id="uc-switcher-24"
                  role="tabpanel"
                  aria-labelledby="uc-switcher-23"
                >
                  <div className="panel">
                    <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 gx-2 lg:gx-3 gy-4 lg:gy-6 col-match">
                      {filtered.map((item, index) => (
                        <div key={index}>
                          <div className="panel overflow-hidden border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-0 border-bottom border-dark border-opacity-20 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt={item.title}
                                src={item.imgSrc}
                                width={644}
                                height={382}
                              />
                            </figure>
                            <div className="content vstack items-start gap-4 p-2 lg:p-4">
                              <div className="vstack gap-1">
                                <h4 className="h5 m-0">{item.title}</h4>
                                <p className="fs-6 opacity-60">
                                  {item.description}
                                </p>
                              </div>
                              <a
                                href="#"
                                className="uc-link border-bottom fw-bold dark:text-tertiary"
                              >
                                <span>Get started</span>
                                <i className="icon-narrow unicon-arrow-right fw-bold" />
                              </a>
                            </div>
                            <Link
                              href={`/page-features`}
                              className="position-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={`/page-integrations`}
                className="btn btn-md xl:btn-lg btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary-300 px-3 lg:px-5 fw-bold"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Browse all integrations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
