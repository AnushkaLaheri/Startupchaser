import { teamMembers2 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <div
      id="about-team"
      className="about-team section panel overflow-hidden border-top"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  We're hiring
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">Meet our team</h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Our philosophy is simple — hire a team of diverse, passionate
                  people and foster a culture that empowers you to do your best
                  work.
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-6"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {teamMembers2.map((member, index) => (
                    <div key={index}>
                      <div className="panel vstack items-center gap-2 text-center">
                        <Image
                          className="w-72px lg:w-96px h-72px lg:h-96px rounded-circle border border-secondary-600"
                          src={member.imgSrc}
                          width={400}
                          height={400}
                          alt={member.alt}
                        />
                        <div className="panel vstack items-center gap-0">
                          <h6 className="h6 lg:h5 m-0">{member.name}</h6>
                          <span className="fs-7 lg:fs-6 opacity-70">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/page-career`}
                className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow mx-auto"
              >
                <span>We’re hiring</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
