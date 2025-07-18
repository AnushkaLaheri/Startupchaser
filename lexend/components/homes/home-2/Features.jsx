import { features } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Smart features for your business
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible
                with an utlimate goal for a good sharing profit as a content
                creator.
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4">
              {features.map((feature, index) => (
                <div key={index}>
                  <div
                    className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0">{feature.title}</h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {feature.linkText && (
                                <a
                                  href={feature.linkHref}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{feature.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
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
