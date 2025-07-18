import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div
        className="section-outer panel"
        data-anime="onview: -100; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
      >
        <div className="container max-w-xl">
          <div className="section-inner panel overflow-hidden rounded xl:rounded-2 px-2 sm:px-0 py-4 sm:py-6 xl:py-9 bg-secondary dark:bg-gray-800">
            <div
              className="d-none lg:d-block"
              data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              <div
                className="position-absolute  rotate-45"
                style={{ top: "40% !important", left: "20% !important" }}
              >
                <Image
                  className="w-24px text-gray-900 dark:text-white"
                  width={193}
                  height={216}
                  alt="star-1"
                  data-uc-svg=""
                  src="/assets/images/template/star-1.svg"
                />
              </div>
              <div
                className="position-absolute   rotate-45"
                style={{ bottom: "40%", right: "20%" }}
              >
                <Image
                  className="w-24px text-gray-900 dark:text-white"
                  width={69}
                  height={95}
                  alt="star-2"
                  data-uc-svg=""
                  src="/assets/images/template/star-2.svg"
                />
              </div>
            </div>
            <div
              className="d-none lg:d-block"
              data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
            >
              <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
                <Image
                  className="w-200px xl:w-250px d-block dark:d-none"
                  alt="talking"
                  src="/assets/images/template/talking.svg"
                  width="195"
                  height="254"
                />
                <Image
                  className="w-200px xl:w-250px d-none dark:d-block"
                  alt="talking-dark"
                  src="/assets/images/template/talking-dark.svg"
                  width="195"
                  height="254"
                />
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y me-n6">
                <Image
                  className="w-200px xl:w-250px d-block dark:d-none"
                  alt="chatting"
                  src="/assets/images/template/chatting.svg"
                  width="255"
                  height="283"
                />
                <Image
                  className="w-200px xl:w-250px d-none dark:d-block"
                  alt="chatting-dark"
                  src="/assets/images/template/chatting-dark.svg"
                  width="255"
                  height="283"
                />
              </div>
            </div>
            <div
              className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Prevent costly mistakes
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Create pre-approved templates and lock all legal information.
              </p>
              <Link
                href={`/page-pricing`}
                className="btn btn-md h-48px lg:h-56px min-w-150px btn-primary text-white mt-2"
              >
                <span>Try it now</span>
                <i className="icon icon-1 unicon-arrow-up-right" />
              </Link>
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                14-day trial, no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
