"use client";
import { timelineData } from "@/data/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Timeline() {
  return (
    <div
      id="about-timeline"
      className="about-timeline section panel overflow-hidden bg-secondary dark:bg-gray-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                How we got here
              </h2>
              <div
                style={{ width: "fit-content", maxWidth: "330px" }}
                className="panel swiper-parent"
              >
                <Swiper
                  className="swiper-timeline swiper swiper-container overflow-unset"
                  slidesPerView={1}
                  spaceBetween={0}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                >
                  {timelineData.map((item, index) => (
                    <SwiperSlide key={index} className="panel">
                      <div className="timeline-box panel vstack items-center gap-9 text-center">
                        <div className="image-wrap panel overflow-hidden w-200px">
                          <Image
                            className="image w-100 origin-bottom"
                            src={item.src}
                            width={400}
                            height={400}
                            alt={item.alt}
                          />
                        </div>
                        <div className="content panel vstack items-center px-3 xl:px-6">
                          <h3 className="title h4 sm:h3 dark:text-white">
                            {item.year}
                          </h3>
                          <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
