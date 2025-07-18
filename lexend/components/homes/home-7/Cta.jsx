import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <div
      id="uc_cta"
      className="uc-cta panel mb-n4 z-1"
      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
    >
      <div className="container">
        <div className="panel vstack items-center gap-2 p-4 lg:p-6 xl:p-9 bg-gradient-45 from-primary to-primary-800 rounded-2 text-center text-white uc-dark">
          <Image
            className="position-absolute text-tertiary d-none lg:d-block"
            alt="stars"
            style={{ bottom: "25%", left: "10%" }}
            data-uc-svg=""
            src="/assets/images/common/stars.svg"
            width={55}
            height={49}
          />
          <Image
            className="position-absolute text-tertiary d-none lg:d-block"
            alt="star"
            style={{ top: "25%", right: "10%" }}
            data-uc-svg=""
            src="/assets/images/common/star.svg"
            width={19}
            height={29}
          />
          <h2 className="h3 xl:display-6 lh-lg m-0 max-w-md mx-auto text-inherit">
            <span className="px-1 bg-tertiary text-primary d-block lg:d-inline-block">
              AI automation
            </span>{" "}
            solutions!
          </h2>
          <p className="fs-6 sm:fs-5">
            See how we help your team solve today’s biggest challenges.
          </p>
          <div className="vstack md:hstack justify-center gap-2 mt-3">
            <a
              href="#"
              className="btn btn-md xl:btn-lg btn-tertiary text-primary px-3 lg:px-5 fw-bold hover:contrast-shadow"
            >
              Start free trial with email
            </a>
          </div>
          <span className="fs-7 mt-1">No credit card required!</span>
        </div>
      </div>
    </div>
  );
}
