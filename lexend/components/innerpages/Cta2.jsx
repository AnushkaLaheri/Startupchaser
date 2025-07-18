import React from "react";
import Link from "next/link";

export default function Cta2() {
  return (
    <div id="cta" className="cta section panel overflow-hidden border-top">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-2 lg:gap-3 max-w-450px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 m-0">We’re hiring</h2>
              <p className="fs-6 sm:fs-5 lg:fs-4 text-dark dark:text-white text-opacity-70">
                We are looking for people that share our vision. Are you
                adaptable, driven, and friendly?&nbsp;
              </p>
              <Link
                href={`/page-career`}
                className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs mt-1"
              >
                <span>Submit application</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
