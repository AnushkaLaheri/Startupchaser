"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary dark:bg-gray-900">
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "35%", left: "47%" }}
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
            style={{ top: "12%", right: "15%" }}
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
            className="position-absolute  translate-middle-y -rotate-12"
            style={{ top: "15%", left: "35%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-trophy"
              src="/assets/images/template/icon-trophy.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-trophy-dark"
              src="/assets/images/template/icon-trophy-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y rotate-45 ms-n3"
            style={{ top: "35%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-location"
              src="/assets/images/template/icon-location.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-location-dark"
              src="/assets/images/template/icon-location-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute  translate-middle-y"
            style={{ bottom: "15%", left: "30%" }}
          >
            <Image
              className="w-40px xl:w-48px d-block dark:d-none"
              alt="icon-globe"
              src="/assets/images/template/icon-globe.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-40px xl:w-48px d-none dark:d-block"
              alt="icon-globe-dark"
              src="/assets/images/template/icon-globe-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y rotate-45"
            style={{ bottom: "20%", right: "8%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-crown"
              src="/assets/images/template/icon-crown.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-crown-dark"
              src="/assets/images/template/icon-crown-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y -rotate-12"
            style={{ top: "60%", right: "48%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-diamond"
              src="/assets/images/template/icon-diamond.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-diamond-dark"
              src="/assets/images/template/icon-diamond-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y -rotate-12 me-n3"
            style={{ top: "35%" }}
          >
            <Image
              className="w-48px xl:w-56px d-block dark:d-none"
              alt="icon-chat"
              src="/assets/images/template/icon-chat.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-48px xl:w-56px d-none dark:d-block"
              alt="icon-chat-dark"
              src="/assets/images/template/icon-chat-dark.svg"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel py-4">
            <div className="row child-cols justify-center lg:justify-between items-center gy-4 sm:gy-6 gx-0">
              <div className="col-12 sm:col-9 lg:col-5">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <span className="fs-6 fw-bold text-primary dark:text-secondary">
                    CRM Tool Workflow
                  </span>
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2">
                    Streamline your Tool Workflow.
                  </h1>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Keep data consistent, with native CRM integrations that
                    streamline your entire Tool workflow.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <input
                        className="form-control h-48px lg:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                      >
                        Start free trial
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    No credit card required.
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6 xl:col-7">
                <div
                  className="hero-scene panel rtl:me-6 rtl:ms-n6"
                  data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                  <div className="panel overflow-hidden">
                    <Image
                      className="d-block dark:d-none"
                      alt="Main hero image"
                      src="/assets/images/template/hero-two.png"
                      width="1280"
                      height="941"
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Main hero image"
                      src="/assets/images/template/hero-two-dark.png"
                      width="1280"
                      height="942"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
              <div
                className="block-panel panel"
                data-anime="opacity: [0, 1]; duration: 450; delay: 750;"
              >
                <div className="element-brands text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
