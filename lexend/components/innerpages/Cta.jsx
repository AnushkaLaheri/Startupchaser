import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div
      id="cta"
      className="cta section panel overflow-hidden"
      data-anime="onview:-100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
    >
      <div className="section-outer panel py-4 sm:py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
            <Image
              className="w-200px xl:w-250px d-block dark:d-none"
              alt="thinking"
              src="/assets/images/template/thinking.svg"
              width="233"
              height="236"
            />
            <Image
              className="w-200px xl:w-250px d-none dark:d-block"
              alt="thinking-dark"
              src="/assets/images/template/thinking-dark.svg"
              width="233"
              height="237"
            />
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y me-n6">
            <Image
              className="w-200px xl:w-250px d-block dark:d-none"
              alt="send-message"
              src="/assets/images/template/send-message.svg"
              width="240"
              height="215"
            />
            <Image
              className="w-200px xl:w-250px d-none dark:d-block"
              alt="send-message-dark"
              src="/assets/images/template/send-message-dark.svg"
              width="240"
              height="215"
            />
          </div>
        </div>
        <div
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ bottom: "30%", left: "24%" }}
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
          <div
            className="position-absolute  rotate-45"
            style={{ top: "50%", right: "21%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/star-1.svg"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:gap-3 max-w-550px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 m-0">
                We’re looking for people who share our vision!
              </h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Have what it takes to be one of us.
              </p>
              <Link
                href={`/page-career`}
                className="btn btn-md lg:btn-lg btn-primary text-white mt-1 xl:mt-2"
              >
                View current openings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
