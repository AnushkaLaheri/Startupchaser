import { facts } from "@/data/facts";
import { panelData } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Facts() {
  return (
    <div
      hidden=""
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Our Values it’s Simple!
              </h2>
              <div
                className="panel vstack g-2 lg:gap-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div
                  className="panel"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between text-center">
                    {panelData.map((panel) => (
                      <div key={panel.id}>
                        <div className="panel vstack items-center gap-2 p-4 lg:py-6 rounded-2 bg-white dark:bg-gray-800">
                          <Image
                            className="w-64px lg:w-80px d-block dark:d-none"
                            src={panel.lightIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <Image
                            className="w-64px lg:w-80px d-none dark:d-block"
                            src={panel.darkIcon}
                            width={100}
                            height={100}
                            alt={panel.altText}
                          />
                          <h5 className="h5 lg:h4">{panel.title}</h5>
                          <p className="fs-6 opacity-70 dark:opacity-80">
                            {panel.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="panel p-5 lg:py-9 rounded-2 bg-white dark:bg-gray-800"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-6 lg:child-cols-3 col-match g-4 text-center">
                    {facts.map((item) => (
                      <div key={item.id}>
                        <div className="panel vstack gap-1">
                          <h4 className="h2 xl:display-5 m-0">
                            <span data-anime={item.animation}>
                              {item.year || item.count}
                            </span>
                            {item.suffix && item.suffix}
                          </h4>
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            {item.description}
                          </p>
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
    </div>
  );
}
