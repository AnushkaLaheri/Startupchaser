import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <div
      id="uc_cta"
      className="uc-cta panel overflow-hidden z-1"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
    >
      <div className="section-outer py-6 lg:py-8 xl:py-10">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="position-absolute bg-orange-100 rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "0%", right: "11%" }}
              data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className="p-2"
                alt="brand"
                src="/assets/images/apps/zapier.svg"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute bg-indigo-100 rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "-19%", left: "25%" }}
              data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
            >
              <Image
                className="p-2"
                alt="brand"
                src="/assets/images/apps/stipe.svg"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute bg-gradient-45 from-pink-100 to-orange-100 rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "20%", left: "-1.5%" }}
              data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
            >
              <Image
                className="p-2"
                alt="brand"
                src="/assets/images/apps/asana.svg"
                width={2500}
                height={2311}
              />
            </div>
            <div
              className="position-absolute bg-yellow rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "45%", right: "-1.5%" }}
              data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className="p-2 text-dark"
                alt="brand"
                data-uc-svg=""
                src="/assets/images/apps/mailchimp.svg"
                width={351}
                height={373}
              />
            </div>
            <div
              className="position-absolute bg-white rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "65%", right: "20%" }}
              data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
            >
              <Image
                className="p-2"
                alt="brand"
                src="/assets/images/apps/drive.svg"
                width={800}
                height={800}
              />
            </div>
            <div
              className="position-absolute bg-blue-100 rounded-circle shadow-xs cstack w-56px h-56px d-none lg:d-block"
              style={{ top: "75%", left: "10.5%" }}
              data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
            >
              <Image
                className="p-2"
                alt="brand"
                src="/assets/images/apps/bitbucket.svg"
                width={333}
                height={300}
              />
            </div>
            <div className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0">
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Get started today!
              </span>
              <h2 className="h2 xl:display-5 m-0 text-center">
                Seamless integrations with your{" "}
                <span className="text-tertiary dark:text-primary">
                  existing tools
                </span>
              </h2>
              <p className="fs-5 lg:fs-4">
                See how we help your team solve today’s biggest challenges.
              </p>
              <div
                className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4"
                data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="mb-2 lg:mb-3">
                  <a
                    href="#"
                    className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                  >
                    <span>Start your free trial</span>
                  </a>
                </div>
                <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
