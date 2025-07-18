import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:m-2 lg:mt-0" />
      <div className="position-absolute top-50 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="position-absolute top-0 start-0 end-0 h-screen blend-difference opacity-20">
          <video
            data-uc-cover=""
            src="/assets/images/media/lexend-home-8.webm"
          />
        </div>
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <h1
                      className="h2 md:h1 lg:display-5 m-0 mt-2"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      <span
                        className="text-tertiary dark:text-primary"
                        data-uc-splitext="types: 'chars'"
                        // data-anime="targets: > *; translateY: [-5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 250; delay: anime.stagger(50);"
                      >
                        Drive growth{" "}
                      </span>
                      with our <br className="d-none lg:d-block" />
                      cutting-edge SaaS platform
                    </h1>
                    <p
                      className="fs-6 xl:fs-3 xl:px-10 dark:text-white text-opacity-70"
                      data-uc-splitext="types: 'words'"
                      // data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});"
                    >
                      Streamline your workflows, boost productivity, and drive
                      growth with our cutting-edge SaaS platform.
                    </p>
                    <div
                      className="vstack md:hstack justify-center gap-1 my-1 lg:my-3"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                    >
                      <a
                        href="#"
                        className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                      >
                        <span>Start your free trial</span>
                      </a>
                    </div>
                    <div
                      className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                    >
                      <div className="hstack justify-center gap-2">
                        <b>Exellent</b>
                        <div className="rating panel">
                          <div className="hstack justify-center gap-narrow">
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                            <i
                              className="icon unicon-star-filled text-white p-narrow"
                              style={{ backgroundColor: "#00b67a" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="hstack justify-center gap-narrow">
                        <span className="desc rtl:order-first">
                          4,000+ reviews on
                        </span>
                        <div>
                          <Image
                            alt="Trustpilot"
                            className="w-96px dark:d-none"
                            src="/assets/images/review-logo/05.svg"
                            width={138}
                            height={42}
                          />
                          <Image
                            alt="Trustpilot"
                            className="w-96px d-none dark:d-inline-flex"
                            src="/assets/images/review-logo/dark-05.svg"
                            width={138}
                            height={42}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="panel border shadow-lg rounded-2 p-1"
                    data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                  >
                    <Image
                      alt="Dashboard Lexend"
                      src="/assets/images/template/dashboard-8-home.png"
                      width={1353}
                      height={978}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
