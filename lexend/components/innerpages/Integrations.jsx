import { integrations } from "@/data/integrations";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Integrations() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-lg">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Integrations
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Boost your efficiency with integrations that will simplify your
                workflow.
              </p>
            </div>
            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 border">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark">
                              {integration.name}
                            </h5>
                            <span className="fs-7 opacity-70 dark:opacity-80">
                              {integration.category}
                            </span>
                          </div>
                          <Image
                            className="w-32px lg:w-40px"
                            src={integration.imageUrl}
                            width={40}
                            height={40}
                            alt={integration.imageAlt}
                          />
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {integration.description}
                        </p>
                      </div>
                      <Link
                        href={`/page-integrations`}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                      >
                        <span>Explore</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </Link>
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
