import { tiers } from "@/data/pricing";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9 rounded-1-5 lg:rounded-2 bg-primary-600 dark:bg-primary text-white">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-secondary">Pricing</span>
                <h2 className="title h3 lg:h2 xl:h1 text-white m-0">
                  Simple, scalable pricing.
                </h2>
                <p className="fs-6 xl:fs-5 text-white text-opacity-70">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack justify-between rounded-1-5 lg:rounded-2 bg-secondary text-dark text-center ${
                          tier.highlight ? "position-relative" : ""
                        }`}
                      >
                        {tier.highlight && (
                          <span className="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary my-2 mx-3">
                            Popular
                          </span>
                        )}
                        <header className="tier-header vstack gap-2 items-center p-3 md:p-4 pb-0 md:pb-0 pt-4 md:pt-6">
                          <span className="icon-box cstack w-48px h-48px rounded-circle bg-white text-primary shadow-xs">
                            <i className={`icon-1 ${tier.icon} fw-bold`} />
                          </span>
                          <h5 className="h5 lg:h4 m-0 text-primary">
                            {tier.plan}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h1 lg:display-6 price m-0 text-dark">
                              {tier.price}
                            </h3>
                            <span className="h6 lg:h3 m-0 pb-narrow text-dark">
                              {tier.priceSuffix}
                            </span>
                          </div>
                          <p className="desc">{tier.description}</p>
                        </header>
                        <div className="tier-body p-3 md:p-4">
                          <ul className="nav-y gap-2 text-start">
                            {tier.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="hstack items-start gap-1"
                              >
                                <i className="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold" />
                                <span
                                  className="d-inline"
                                  dangerouslySetInnerHTML={{ __html: feature }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <footer className="tier-footer p-3 md:p-4 border-top">
                          <Link
                            className="btn btn-md btn-primary text-white rounded-default w-100"
                            href={"/sign-up"}
                          >
                            <span>{tier.buttonText}</span>
                          </Link>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-center text-white text-opacity-70"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
              >
                Prices exclude any applicable taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
