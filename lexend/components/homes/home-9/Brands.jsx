import { brands6 } from "@/data/brands";
import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-9">
        <div className="container sm:max-w-md">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <p className="fs-6 m-0">
                Trusted by over most popular companies worldwide
              </p>
              <div className="panel">
                <div className="row child-cols items-center text-center">
                  {brands6.map((brand, index) => (
                    <div key={index}>
                      <div className="panel">
                        <Image
                          className="max-w-80px lg:max-w-128px"
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
