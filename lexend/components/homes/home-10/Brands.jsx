import { brands7 } from "@/data/brands";
import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container sm:max-w-md">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <h5 className="h5 lg:h4 m-0 px-2">
                Trusted by over most popular companies worldwide
              </h5>
              <div className="panel">
                <div className="row child-cols items-center g-2 lg:g-4 text-center text-dark dark:text-tertiary">
                  {brands7.map((brand, index) => (
                    <div key={index}>
                      <div className="panel">
                        <Image
                          className="max-w-100px lg:max-w-128px"
                          alt={brand.alt}
                          src={brand.src}
                          width={brand.width}
                          height={brand.height}
                          data-uc-svg=""
                        />
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
