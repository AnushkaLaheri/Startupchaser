import { teamMembers4 } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <div
      id="team"
      className="team section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 xl:py-10 bg-secondary dark:bg-gray-800 rounded-2 lg:rounded-3 mx-2">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="heading vstack items-center gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                  <span className="fs-8 fw-bold text-uppercase">Team</span>
                </div>
                <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                  <span className="d-inline-flex px-1 bg-primary dark:bg-secondary text-secondary dark:text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Expert team
                  </span>{" "}
                  behind this builder
                </h2>
                <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                  Our philosophy is simple — hire a team of diverse, passionate
                  people and foster a culture that empowers you to do your best
                  work.
                </p>
              </div>
              <div className="content panel w-100">
                <div
                  className="row child-cols-6 sm:child-cols-4 col-match g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {teamMembers4.map((member, index) => (
                    <div key={index}>
                      <div className="panel vstack items-center gap-2 text-center p-3 lg:p-5 rounded-1-5 bg-white dark:bg-gray-700">
                        <Image
                          className="w-80px md:w-100px lg:w-150px h-80px md:h-100px lg:h-150px bg-gray-25 rounded-circle"
                          src={member.imgSrc}
                          width={560}
                          height={592}
                          alt={member.alt}
                        />
                        <div className="panel vstack items-center gap-narrow">
                          <h6 className="h6 lg:h5 lh-lg m-0">{member.name}</h6>
                          <span className="fs-7 lg:fs-6 lh-lg opacity-70">
                            {member.role}
                          </span>
                        </div>
                        <div className="hstack justify-center gap-1">
                          <a href="#" className="uc-link dark:text-secondary">
                            <i className="icon icon-1 unicon-logo-linkedin" />
                          </a>
                          <a href="#" className="uc-link dark:text-secondary">
                            <i className="icon icon-1 unicon-logo-facebook" />
                          </a>
                          <a href="#" className="uc-link dark:text-secondary">
                            <i className="icon icon-1 unicon-logo-x" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="cstack gap-2 flex-column">
                      <Link
                        href={`/page-career`}
                        className="uc-link cstack w-40px md:w-48px lg:w-80px h-40px md:h-48px lg:h-80px rounded-circle bg-white dark:bg-gray-700 text-primary dark:text-secondary duration-150 transition-all"
                      >
                        <i className="icon icon-narrow md:icon-1 unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                      </Link>
                      <span className="fs-7 md:fs-6 fw-medium">
                        We’re hiring
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
