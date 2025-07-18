import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel">
        <div className="container">
          <div
            className="section-inner panel lg:max-w-lg mx-auto border-top py-6 lg:py-9 xl:pb-10"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 lg:child-cols col-match g-4 lg:g-8">
              <div>
                <div className="vstack gap-2">
                  <h2 className="h4 sm:h3 xl:h2 m-0">
                    Frequently asked questions!
                  </h2>
                </div>
              </div>
              <div className="lg:col-7">
                <div className="panel">
                  <ul
                    className="uc-accordion uc-accordion-divider gap-6 max-w-md mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                    style={{ "--divider-gap": "48px" }}
                  >
                    <Accordion />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
