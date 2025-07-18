import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div
      id="clients_feedbacks"
      className="clients-feedbacks section panel overflow-hidden"
    >
      <div className="section-outer panel">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-lg mx-auto"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
            >
              <div
                className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                data-uc-grid=""
              >
                <div>
                  <div className="panel vstack items-center gap-4 text-center">
                    <div className="panel vstack items-center gap-2 lg:gap-4">
                      <Image
                        className="w-128px text-primary dark:text-tertiary"
                        alt="Brand"
                        data-uc-svg=""
                        src="/assets/images/brands/brand-08.svg"
                        width={163}
                        height={48}
                      />
                      <p className="fs-5 lg:fs-4 xl:fs-3 ft-secondary fw-bold text-dark dark:text-white">
                        “We are based in Europe and the latest Data Protection
                        Regulation forces us to look for service suppliers than
                        comply with this regulation and as we look to create our
                        website and this builder just outstanding!”
                      </p>
                    </div>
                    <div className="panel cstack gap-2 lg:mt-2">
                      <div className="panel">
                        <Image
                          className="w-48px lg:w-56px h-48px lg:h-56px rounded-circle"
                          alt="Sarah Edrissi — Lead Marketing"
                          src="/assets/images/avatars/03.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="panel vstack gap-narrow">
                        <h6 className="h6 lg:h5 m-0">Sarah Edrissi</h6>
                        <span className="opacity-70">Lead Marketing</span>
                      </div>
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
