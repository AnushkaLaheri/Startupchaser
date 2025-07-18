"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
export default function Testimonials() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="clients_feedbacks"
        className="clients-feedbacks section panel overflow-hidden"
      >
        <div className="section-outer panel pt-4 md:pt-6 xl:pt-9">
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
                    <div className="panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
                      <div
                        className="row child-cols-12 col-match g-0"
                        data-uc-grid=""
                      >
                        <div className="sm:col-6 lg:col-8">
                          <div className="panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6">
                            <div className="panel vstack items-start gap-2">
                              <div className="panel">
                                <div className="hstack h-48px">
                                  <Image
                                    className="w-128px dark:d-none"
                                    alt="Brand"
                                    src="/assets/images/brands/brand-08.svg"
                                    width="163"
                                    height="48"
                                  />
                                  <Image
                                    className="w-128px d-none dark:d-inline-flex"
                                    alt="Brand"
                                    src="/assets/images/brands/brand-08-dark.svg"
                                    width="163"
                                    height="48"
                                  />
                                </div>
                              </div>
                              <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white">
                                “We are based in Europe and the latest Data
                                Protection Regulation forces us to look for
                                service suppliers than comply with this
                                regulation and as we look to create our website
                                and this builder just outstanding!”
                              </p>
                            </div>
                            <div className="panel mt-2 lg:mt-4">
                              <div className="panel vstack items-start gap-0 lg:gap-1">
                                <h6 className="h6 lg:h5 m-0">Sarah Edrissi</h6>
                                <span className="fs-7 lg:h6 opacity-70">
                                  Lead Marketing
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-6 lg:col-4">
                          <div
                            className="panel overflow-hidden h-100"
                            data-uc-lightbox="video-autoplay: true;"
                          >
                            <figure className="featured-image m-0 rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="image"
                                src="/assets/images/common/login.webp"
                                width="1500"
                                height="1000"
                              />
                            </figure>
                            <a
                              onClick={() => setOpen(true)}
                              className="position-absolute top-50 start-50 translate-middle cstack w-48px lg:w-64px h-48px lg:h-64px rounded-circle shadow-xs text-none bg-white bg-opacity-80 text-primary"
                              style={{ backdropFilter: "blur(2px)" }}
                            >
                              <i className="icon-1 unicon-play fw-bold" />
                            </a>
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
      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid.webm"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
