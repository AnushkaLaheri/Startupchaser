import { brands3 } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-4 overflow-hidden text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <div className="panel">
                <div className="brands hstack gap-4 justify-between max-w-950px mx-auto">
                  {brands3.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image.src}
                        width={32}
                        height={42}
                        style={{
                          height: "42px",
                          width: "fit-content",
                          minWidth: "90px",
                        }}
                        alt="Trustpilot"
                        className="dark:d-none"
                      />
                      <Image
                        src={image.darkSrc}
                        style={{
                          height: "42px",
                          width: "fit-content",
                          minWidth: "90px",
                        }}
                        width={32}
                        height={42}
                        alt="Trustpilot"
                        className="d-none dark:d-block"
                      />
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
