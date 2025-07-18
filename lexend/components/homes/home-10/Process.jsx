import { steps } from "@/data/process";
import Image from "next/image";
import React from "react";

export default function Process() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container">
          <div
            className="section-inner panel vstack border rounded-3 overflow-hidden bg-secondary dark:bg-gray-300 dark:bg-opacity-15"
            data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
          >
            <div
              className="row child-cols-12 md:child-cols justify-center col-match g-4 sep uc-grid"
              data-uc-grid=""
            >
              {steps.map((step, index) => (
                <div key={index} className={step.minWidth}>
                  <div className="panel vstack items-center gap-2 text-center p-5 xl:py-8">
                    <span className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-tertiary text-tertiary dark:text-primary">
                      {step.number}
                    </span>
                    <Image
                      className="w-100 max-h-200px"
                      alt="Image"
                      src={step.imgSrc}
                      width={1200}
                      height={800}
                    />
                    <h3 className="h5 lg:h4 m-0">{step.title}</h3>
                    <p className="fs-6">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="panel vstack p-6 xl:p-8 border-top">
              <div
                className="vstack md:hstack justify-center gap-1 mb-1 lg:mb-3 sm-flex-column"
                data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
              >
                <a
                  href="#"
                  className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary px-3 w-auto border-0"
                >
                  <i className="icon-narrow unicon-chat-launch fw-bold" />
                  <span>Start chatting</span>
                </a>
                <a
                  href="#"
                  className="btn btn-md btn-link fw-bold text-none text-primary dark:text-white"
                >
                  Free Watch Demo
                </a>
              </div>
              <div
                className="vstack sm:hstack items-center justify-center gap-1 fs-6 sm-flex-column"
                data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
              >
                <div className="hstack justify-center gap-2">
                  Exellent
                  <div className="rating panel">
                    <div className="hstack justify-center">
                      <i className="icon-1 unicon-star-filled text-yellow" />
                      <i className="icon-1 unicon-star-filled text-yellow" />
                      <i className="icon-1 unicon-star-filled text-yellow" />
                      <i className="icon-1 unicon-star-filled text-yellow" />
                      <i className="icon-1 unicon-star-filled text-yellow" />
                    </div>
                  </div>
                </div>
                <span className="desc">Based on 10,250+ reviews.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
