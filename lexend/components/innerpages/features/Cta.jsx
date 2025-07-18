import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel overflow-hidden">
      <div className="section-outer panel py-4 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-4 sm:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
            <div className="vstack gap-2 max-w-550px items-center lg:items-start m-auto lg:m-0 text-center lg:text-start rtl:lg:text-end">
              <h2 className="h3 sm:h1 m-0">
                Create stunning websites that fits your needs.
              </h2>
              <div className="vstack sm:hstack justify-center lg:justify-start gap-1 lg:gap-2 mt-1 lg:mt-2">
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Try Lexend today
                </Link>
              </div>
              <p className="fs-7 text-dark dark:text-white text-opacity-70">
                14-day trial, no credit card required.
              </p>
            </div>
            <div className="position-absolute top-50 ltr:end-0 rtl:start-0 translate-middle-y z-1 ltr:me-8 rtl:ms-8 d-none lg:d-block">
              <Image
                className="w-250px xl:w-300px d-block dark:d-none ltr:xl:me-7 rtl:xl:ms-7"
                alt="charts"
                src="/assets/images/template/charts.svg"
                width="249"
                height="201"
              />
              <Image
                className="w-250px xl:w-300px d-none dark:d-block ltr:xl:me-7 rtl:xl:ms-7"
                alt="charts-dark"
                src="/assets/images/template/charts-dark.svg"
                width="249"
                height="201"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
