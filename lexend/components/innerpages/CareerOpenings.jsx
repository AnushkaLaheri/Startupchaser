import { jobListings } from "@/data/career";
import React from "react";
import Link from "next/link";

export default function CareerOpenings() {
  return (
    <div
      id="career_openings"
      className="career-openings section panel overflow-hidden pb-6 xl:pb-9"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
              <h2
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Current openings
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                  data-uc-grid=""
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {jobListings.map((job, index) => (
                    <div key={index}>
                      <div className="panel vstack justify-end items-end gap-1 p-3 rounded lg:rounded-2 bg-white dark:bg-gray-800">
                        <div className="vstack gap-narrow">
                          <h5 className="h6 lg:h5 m-0">{job.title}</h5>
                          <span className="fs-6 text-dark dark:text-white text-opacity-70">
                            {job.location}
                          </span>
                        </div>
                        <Link
                          href={`/page-career-detail/${job.id}`}
                          className="uc-link fs-7 fw-bold d-inline-flex items-center gap-narrow border-bottom pb-narrow"
                        >
                          <span>Apply now</span>
                          <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
