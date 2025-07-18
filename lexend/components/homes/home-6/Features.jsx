import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div id="features" className="features section panel  scrollSpysection">
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Main features
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                No{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  coding skills
                </span>{" "}
                required.
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Unleash your creativity with our builder's powerful features and
                intuitive interface, experience the difference.
              </p>
            </div>
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      Intuitive interface Drag-and-Drop for building pages by
                      dragging and dropping elements.
                    </p>
                    <a href="#" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      alt=""
                      src="/assets/images/template/home-06-main-app.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    <Image
                      className="rounded-bottom-1-5 lg:rounded-bottom-3"
                      alt="dashboard-components"
                      src="/assets/images/template/home-06-dashboard-components.png"
                      width="664"
                      height="496"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0">Dashboard Components</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        Unlock your productivity potential with our intuitive
                        and powerful Dashboard UI Components.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn btn-sm btn-secondary text-primary px-2 mt-2"
                    >
                      <span>Let's find out</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-gray-800 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked-2.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel px-3 lg:px-4 xl:px-6">
                    <Image
                      className="rounded-bottom-1-5 border border-top-0"
                      alt="ui components"
                      src="/assets/images/template/home-06-components.png"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0">UI Components</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        Easy-to-use and powerful page builder, your gateway to
                        intuitive tools and expansive customization options that
                        transform how you build websites.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="btn btn-sm btn-secondary text-primary px-2 mt-2"
                    >
                      <span>Let's find out</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-center gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 m-0">Drag-and-Drop Interface</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      Unleash your creativity with our builder's intuitive UI
                      Components, experience the difference.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home-06-builder-tools.png"
                      width="1280"
                      height="800"
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
