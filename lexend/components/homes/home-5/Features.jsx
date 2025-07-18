import { featureItems2 } from "@/data/features";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-secondary">
                Features
              </span>
              <h2 className="h3 sm:h2 lg:h1 xl:display-6 m-0">
                Recognized by the experts
              </h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 xl:fs-4 text-opacity-70">
                Offers a unified platform that fosters innovation while
                providing end-to-end data management. See how we help your team
                solve today’s biggest challenges.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-0 col-match"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {featureItems2.map((item, index) => (
                <div key={index} className={item.order}>
                  <div
                    className={`features-item vstack justify-between gap-6 xl:gap-8 p-4 xl:p-6 rounded-1-5 ${
                      item.bgClass || ""
                    }`}
                  >
                    <div className="icon-box w-48px h-48px rounded-1-5 cstack bg-primary">
                      <Image
                        className="w-20px xl:w-24px text-white image-filter-white"
                        src={item.iconSrc}
                        width={24}
                        height={24}
                        alt={item.alt}
                        data-uc-svg=""
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h5 xl:h4 m-0">{item.title}</h3>
                        <p className="desc fs-7 xl:fs-6 text-opacity-70">
                          {item.description}
                        </p>
                        <Link
                          className="uc-link dark:text-secondary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1"
                          href={`/page-features`}
                        >
                          <span>Learn more</span>
                          <i className="position-relative icon unicon-arrow-right fw-bold rtl:rotate-180 translate-y-px" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
