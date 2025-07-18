import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel row child-cols-12 g-2 lg:g-4"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="Instant Messaging"
                            src="/assets/images/template/home-10-feature-01.jpg"
                            width={1000}
                            height={778}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-chat" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Instant Messaging
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                Lightning-fast communication across devices.
                                <br />
                                Send messages, photos, and files instantly with
                                real-time delivery and read receipts.
                              </p>
                              <a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Let's find out</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="HD Video Calling"
                            src="/assets/images/template/home-10-feature-02.jpg"
                            width={1000}
                            height={800}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-video-add" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                HD Video Calling
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                Crystal-clear video connections worldwide.
                                <br />
                                High-definition video calls with noise
                                cancellation and seamless group video support.
                              </p>
                              <a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Learn more</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="End-to-End Encryption"
                            src="/assets/images/template/home-10-feature-03.jpg"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-manage-protection" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                End-to-End Encryption
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                Uncompromising privacy and security. <br />
                                Military-grade encryption protects every message
                                and call, ensuring your conversations remain
                                completely private.
                              </p>
                              <a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>How privacy works</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-item panel p-2 lg:p-4">
                  <div className="row child-cols items-center justify-between g-2 md:g-4">
                    <div className="col-12 md:col-6 lg:col-5 md:order-2">
                      <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                          <Image
                            className="media-cover image"
                            alt="Cross-Platform Sync"
                            src="/assets/images/template/home-10-feature-04.jpg"
                            width={1000}
                            height={667}
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 md:order-1">
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex bg-primary text-tertiary dark:bg-tertiary dark:text-primary">
                                <i className="icon-1 unicon-renew" />
                              </span>
                              <h3 className="h4 sm:h3 xl:h2 m-0">
                                Cross-Platform Sync
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                Seamless experience across all devices. <br />
                                Synchronize conversations and media between
                                smartphones, tablets, and desktops without
                                missing a beat.
                              </p>
                              <a
                                href="#"
                                className="uc-link fw-bold hstack gap-narrow sm:mt-1 lg:mt-2 text-primary dark:text-tertiary"
                              >
                                <span>Download app now</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vstack mt-4 lg:mt-8">
                <div
                  className="vstack md:hstack justify-center gap-1 my-1 lg:my-3 sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                >
                  <a
                    href="#"
                    className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary border-0 px-3 w-auto"
                  >
                    <i className="icon-narrow unicon-chat-launch fw-bold" />
                    <span>Start chatting</span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md btn-link fw-bold text-none text-primary dark:text-white"
                  >
                    Free Watch Demo
                  </a>
                </div>
                <div
                  className="vstack sm:hstack items-center justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                >
                  <div className="hstack justify-center gap-2">
                    Exellent
                    <div className="rating panel">
                      <div className="hstack justify-center">
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                      </div>
                    </div>
                  </div>
                  <span className="desc">Based on 10,250+ reviews.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
