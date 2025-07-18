import { brands2 } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel vstack gap-3 xl:gap-4 text-center">
            <h4
              className="h4 px-8"
              data-anime="onview: -100; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0"
            >
              Trusted by thousands of clients more than 4,000+
            </h4>
            <div
              className="brands row child-cols-4 lg:child-cols-3 items-center justify-center text-center g-2 sm:g-4 lg:g-6"
              data-anime="onview: -100; targets: >*; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
            >
              {brands2.map((brand, index) => (
                <div key={index}>
                  <Image
                    className="max-w-100px md:max-w-128px text-black dark:text-secondary image-filter"
                    src={brand.src}
                    width={165}
                    height={48}
                    alt={brand.alt}
                    data-uc-svg=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
