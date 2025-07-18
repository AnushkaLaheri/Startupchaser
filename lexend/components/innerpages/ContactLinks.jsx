import { panels } from "@/data/contact";
import React from "react";
import Image from "next/image";

export default function ContactLinks() {
  return (
    <div id="helpful-links" className="section panel overflow-hidden">
      <div className="section-outer panel pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Other ways to reach us
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-2 xl:g-3 justify-between col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {panels.map((panel) => (
                  <div key={panel.id}>
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-gray-800 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src={panel.lightIcon}
                          width={100}
                          height={100}
                          alt={panel.altText}
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src={panel.darkIcon}
                          width={100}
                          height={100}
                          alt={`${panel.altText}-dark`}
                        />
                      </div>
                      <h5 className="h5 m-0">{panel.title}</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        {panel.description}
                      </p>
                      <a
                        href={panel.linkUrl}
                        className="uc-link fw-bold hstack gap-narrow justify-center"
                      >
                        <span>{panel.linkText}</span>
                        <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
