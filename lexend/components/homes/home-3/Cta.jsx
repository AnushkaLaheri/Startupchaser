"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9 bg-secondary dark:bg-gray-800">
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
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "40%", left: "24%" }}
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
          <div
            className="position-absolute  rotate-45"
            style={{ bottom: "40%", right: "24%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={69}
              height={95}
              alt="star-2"
              data-uc-svg=""
              src="/assets/images/template/star-2.svg"
            />
          </div>
          <div
            className="position-absolute bottom-0 start-0"
            style={{ bottom: "-4% !important", left: "28% !important" }}
          >
            <Image
              className="w-100px xl:w-150px text-gray-900 dark:text-white text-opacity-20"
              alt="arrow-1"
              data-uc-svg=""
              src="/assets/images/template/arrow-3.svg"
              width="202"
              height="133"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 xl:display-6 m-0">
                Create stunning websites that fits{" "}
                <span className="text-primary">your needs.</span>
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                Try Lexend today.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column fdr">
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Try Lexend today
                </Link>
                <a
                  onClick={openContactModal}
                  className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                  data-uc-toggle=""
                >
                  Contact sales
                </a>
              </div>
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
