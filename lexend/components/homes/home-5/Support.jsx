import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Support() {
  return (
    <div id="support_cta" className="support-cta section panel overflow-hidden">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div
            className="section-inner panel p-4 md:p-6 lg:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 dark:text-white"
            data-anime="onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
          >
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="hstack justify-center gap-0">
                <Image
                  alt="Avatar-image"
                  className="w-48px h-48px sm:w-56px sm:h-56px xl:w-64px xl:h-64px rounded-circle border border-2 sm:border-3 border-secondary dark:border-gray-900"
                  src="/assets/images/avatars/02.jpg"
                  width="96"
                  height="96"
                />
                <Image
                  alt="Avatar-image"
                  className="w-48px h-48px sm:w-56px sm:h-56px xl:w-64px xl:h-64px rounded-circle border border-2 sm:border-3 border-secondary dark:border-gray-900 ms-n2"
                  src="/assets/images/avatars/02.png"
                  width="150"
                  height="150"
                />
                <Image
                  alt="Avatar-image"
                  className="w-48px h-48px sm:w-56px sm:h-56px xl:w-64px xl:h-64px rounded-circle border border-2 sm:border-3 border-secondary dark:border-gray-900 ms-n2"
                  src="/assets/images/avatars/01.jpg"
                  width="96"
                  height="96"
                />
              </div>
              <h2 className="h5 lg:h4 m-0">Still have questions?</h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <Link
                href={`/page-contact`}
                className="btn btn-md btn-primary rounded-default text-white shadow-xs mt-1 lg:mt-2"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
