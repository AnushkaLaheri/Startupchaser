import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-md">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel vstack gap-4 md:gap-6 lg:gap-8"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Frequenlty asked questions:
              </h2>
              <div className="panel">
                <ul
                  className="gap-1 uc-accordion"
                  data-uc-accordion="targets: > li;"
                >
                  <Accordion parentClass="panel p-3 lg:p-4 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800" />
                </ul>
              </div>
              <a
                href="#"
                className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow mx-auto"
              >
                <span>Still have a question?</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
