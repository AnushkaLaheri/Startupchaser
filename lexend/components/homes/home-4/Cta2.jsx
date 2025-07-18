"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";

export default function Cta2() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel pt-4 sm:pt-6 xl:pt-9">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-narrow max-w-400px lg:max-w-700px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 lg:h3 m-0">
                No long-term contracts. No catches. Simple.
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                Start your 30-day free trial. Cancel anytime.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-2 lg:mt-4 fdr">
                <a
                  onClick={openContactModal}
                  className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs"
                  data-uc-toggle=""
                >
                  <i className="icon-1 unicon-play-outline fw-medium" />
                  <span>View demo</span>
                </a>
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                >
                  Start free trial
                </Link>
              </div>
              <p className="fs-7 text-dark dark:text-white text-opacity-70 mt-2">
                14-day trial, no credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
