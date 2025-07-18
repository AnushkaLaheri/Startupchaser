import { integrations } from "@/data/integrations";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Integretion() {
  return (
    <div
      id="integrations"
      className="integrations section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Boost your efficiency with integrations
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Connect every part of your business with integrations that
                  will simplify your workflow.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {integrations.map((integration, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
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
              <Link
                href={`/page-integrations`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow dark:text-white"
              >
                <span>Explore all integrations</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
