import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
    >
      <div className="position-cover bg-white dark:bg-gray-900" />
      <div
        className="position-cover opacity-70 bg-contain"
        style={{ backgroundPosition: "50% 85%" }}
        data-src="/assets/images/template/pricing-06-bg-masked.png"
        data-uc-img=""
      />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="position-absolute z-2"
                    style={{ top: "40%", right: "10%" }}
                  >
                    <Image
                      className="w-48px lg:w-80px me-4"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 10000; delay: 1000;"
                      src="/assets/images/template/user-cursor-1.svg"
                      width="96"
                      height="106"
                    />
                  </div>
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: "0%", left: "10%" }}
                  >
                    <Image
                      className="w-48px lg:w-80px"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 5000; delay: 4000;"
                      src="/assets/images/template/user-cursor-3.svg"
                      width="94"
                      height="108"
                    />
                  </div>
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase text-white">
                      Beta 2.0 Available Now
                    </span>
                  </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white">
                    Build websites
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      effortlessly
                    </span>
                    <br />
                    now or never!
                  </h1>
                  <p className="fs-5 xl:fs-4 text-black dark:text-white d-none md:d-block">
                    Easy-to-use and powerful page builder, your gateway to
                    intuitive tools and expansive customization options that
                    transform how you build websites.
                  </p>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md lg:btn-lg btn-primary min-w-150px mt-2"
                  >
                    <span>Get started</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                  <p className="fs-7 text-black dark:text-white">
                    No credit cards required - 14 days free trial.
                  </p>
                </div>
              </div>
              <div>
                <div
                  className="panel"
                  data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="dashboard-image max-w-lg mx-auto max-h-250px lg:max-h-550px overflow-hidden"
                    data-anime="translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <Image
                      className="shadow-md lg:shadow-lg"
                      alt="app-dashboard"
                      src="/assets/images/template/app-dashboard.png"
                      width="1280"
                      height="853"
                    />
                  </div>
                  <div className="position-absolute top-50 end-0 translate-middle-y mt-2 lg:me-5">
                    <Image
                      className="w-100px text-primary lg:rounded-2 shadow-xl"
                      alt="app-dashboard-helper-1"
                      data-anime="scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 250;"
                      src="/assets/images/template/app-dashboard-helper-1.png"
                      width="306"
                      height="583"
                    />
                  </div>
                  <div
                    className="position-absolute"
                    style={{ top: "74%", right: "7%" }}
                  >
                    <Image
                      className="w-48px lg:w-80px"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 8000; delay: 3000;"
                      src="/assets/images/template/user-cursor-2.svg"
                      width="96"
                      height="106"
                    />
                  </div>
                  <div
                    className="position-absolute"
                    style={{ top: "64%", left: "26.5%" }}
                  >
                    <Image
                      className="w-48px lg:w-80px"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 7000; delay: 2000;"
                      src="/assets/images/template/user-cursor-4.svg"
                      width="94"
                      height="108"
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
