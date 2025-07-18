import { features13 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container">
          <div
            className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8 max-w-lg mx-auto"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100);"
          >
            <div className="section-header vstack items-center gap-2 lg:gap-3">
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                More features
              </h2>
            </div>
            <div className="panel">
              <div
                className="features-items row child-cols-12 lg:child-cols-4 justify-center g-2 md:g-4 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {features13.map((feature, index) => (
                  <div key={index}>
                    <div className="features-item hstack items-center gap-2 p-2 bg-secondary hover:bg-tertiary dark:bg-gray-300 dark:bg-opacity-15 dark:hover:bg-primary hover:scale-105 transition-all duration-150 rounded-pill">
                      <div className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-tertiary">
                        <Image
                          className="w-20px xl:w-24px text-tertiary dark:text-primary white-on-light"
                          alt={feature.alt}
                          src={feature.src}
                          width={24}
                          height={24}
                          data-uc-svg=""
                        />
                      </div>
                      <h3 className="title h6 md:h5 m-0">{feature.title}</h3>
                      <a href="#" className="position-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
