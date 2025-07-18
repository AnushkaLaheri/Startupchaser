import React from "react";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel  scrollSpysection">
      <div className="section-outer panel py-4 sm:py-6 xl:py-8 bg-secondary text-black rounded-2 lg:rounded-3 mx-2 overflow-hidden">
        <div className="container xl:max-w-xl">
          <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-6 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
            <div
              className="content panel vstack items-center lg:items-start justify-center gap-2 lg:max-w-3/5 px-4 lg:px-0 "
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 xl:display-5 text-black">
                Unleash your creativity with Lexend.
              </h2>
              <p className="fs-5 my-0">
                Start your 14-days free trial. Cancel anytime.
              </p>
              <a
                href="https://themeforest.net/user/elite-themes24"
                className="btn btn-md btn-primary min-w-150px px-3 mt-4"
              >
                <span>Get started</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </div>
            <div
              className="image-wrap lg:max-w-1/2 mt-2"
              data-anime="onview:-100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
            >
              <Image
                className="image"
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
  );
}
