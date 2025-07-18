import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                <div>
                  <div className="panel vstack justify-center gap-3 rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 overflow-hidden text-center">
                    <div className="panel vstack justify-center gap-3 px-3 py-4 lg:px-5 lg:py-6">
                      <div className="panel vstack items-center gap-2">
                        <div className="panel">
                          <div className="hstack h-48px">
                            <Image
                              className="w-128px dark:d-none"
                              alt="Brand"
                              src="/assets/images/brands/brand-01.svg"
                              width="165"
                              height="48"
                            />
                            <Image
                              className="w-128px d-none dark:d-inline-flex"
                              alt="Brand"
                              src="/assets/images/brands/brand-01-dark.svg"
                              width="165"
                              height="48"
                            />
                          </div>
                        </div>
                        <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white lg:px-6">
                          “We’re looking for people who share our vision! most
                          of our time used to be taken up by most of alternate
                          administrative work whereas now we can focus on
                          building out to help our employees.”
                        </p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-center gap-0 lg:gap-1">
                          <h6 className="h6 lg:h5 m-0">Anna Yon</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            Senior UI/UX Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>See all feedbacks</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
