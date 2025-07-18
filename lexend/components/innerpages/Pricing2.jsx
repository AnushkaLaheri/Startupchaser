import React from "react";

export default function Pricing2() {
  return (
    <div id="pricing_tiers" className="pricing-tiers section panel">
      <div className="section-outer panel py-9 lg:py-10">
        <div className="container lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 items-center panel text-center"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                  Pricing
                </span>{" "}
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Simple,{" "}
                  <span className="px-1 bg-tertiary text-primary">
                    scalable pricing
                  </span>
                </h2>
                <p className="fs-6 xl:fs-5">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div
                className="content panel w-100"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
              >
                <div className="panel border rounded-2 text-center">
                  <div className="row child-cols-12 lg:child-cols-4 col-match g-0">
                    <div>
                      <div className="vstack">
                        <div className="panel vstack items-center gap-narrow p-2 py-4">
                          <h3 className="title h5 mb-1">Free</h3>
                          <h5 className="price h1 lg:display-5 m-0">
                            <sup className="h5 m-0 mx-narrow">$</sup>0
                          </h5>
                          <span className="fs-7 fw-normal m-0">
                            Free forever
                          </span>
                        </div>
                        <div className="vstack items-center gap-2 p-4 pt-0">
                          <button className="btn btn-md btn-ghost-primary fw-bold border rounded-pill px-3 w-100">
                            Start for free
                          </button>
                          <p className="fs-7 fw-normal">
                            No credit card required!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="panel vstack border border-2 rounded-1-5 border-primary dark:border-tertiary contrast-shadow-md z-1"
                        style={{ marginTop: "-2px", marginBottom: "-2px" }}
                      >
                        <div className="panel vstack items-center gap-narrow p-2 py-4">
                          <h3 className="title h5 mb-1 text-primary dark:text-tertiary">
                            Pro
                          </h3>
                          <h5 className="price h1 lg:display-5 m-0">
                            <sup className="h5 m-0 mx-narrow">$</sup>9
                          </h5>
                          <span className="fs-7 fw-normal m-0">
                            Per month billing yearly
                          </span>
                          <span className="position-absolute top-0 end-0 cstack px-1 bg-tertiary text-primary border rounded-default m-1">
                            Best value!
                          </span>
                        </div>
                        <div className="vstack items-center gap-2 p-4 pt-0">
                          <button className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary fw-bold rounded-pill px-3 w-100">
                            Get started
                          </button>
                          <p className="fs-7 fw-normal">
                            Billed $108 per year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="vstack">
                        <div className="panel vstack items-center gap-narrow p-2 py-4">
                          <h3 className="title h5 mb-1">Business</h3>
                          <h5 className="price h1 lg:display-5 m-0">
                            <sup className="h5 m-0 mx-narrow">$</sup>29
                          </h5>
                          <span className="fs-7 fw-normal m-0">
                            Per month billing yearly
                          </span>
                        </div>
                        <div className="vstack items-center gap-2 p-4 pt-0">
                          <button className="btn btn-md btn-ghost-primary fw-bold border rounded-pill px-3 w-100">
                            Get started
                          </button>
                          <p className="fs-7 fw-normal">
                            Billed $348 per year.
                          </p>
                        </div>
                      </div>
                    </div>
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
