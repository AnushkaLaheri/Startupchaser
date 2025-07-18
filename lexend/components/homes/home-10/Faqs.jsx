import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel">
        <div className="container">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match gy-2 lg:gy-6">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <h2 className="h4 lg:h3 m-0">FAQ</h2>
                </div>
              </div>
              <div>
                <div className="panel">
                  <ul
                    className="uc-accordion gap-1 max-w-850px mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <Accordion parentClass="panel p-3 lg:p-4 rounded-1-5 bg-secondary dark:bg-gray-300 dark:bg-opacity-15" />
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
