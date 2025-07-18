import { teamMembers5 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <div id="team" className="team section panel overflow-hidden border-bottom">
      <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-650px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  Our team
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  People you’ll be working with
                </h2>
                <p className="fs-6 xl:fs-5 text-opacity-70">
                  We’re a 100% remote team spread all across the world. Join us!
                </p>
                <Link
                  href={`/page-about`}
                  className="btn btn-md btn-primary rounded-default mt-1 lg:mt-2 d-none sm:d-block"
                >
                  About us
                </Link>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-4 xl:gx-4 xl:gy-6"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {teamMembers5.map((member) => (
                    <div key={member.id}>
                      <div className="panel vstack gap-2 xl:gap-3">
                        <Image
                          className="w-100 rounded-1 sm:rounded-1-5"
                          src={member.imageSrc}
                          width={560}
                          height={592}
                          alt={member.altText}
                        />
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h6 xl:h5 m-0">{member.name}</h6>
                          <span className="fs-6 xl:fs-5 text-primary dark:text-white dark:text-opacity-70">
                            {member.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:d-none">
                <Link
                  href={`/page-about`}
                  className="btn btn-md btn-primary rounded-default mt-1 lg:mt-2"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
