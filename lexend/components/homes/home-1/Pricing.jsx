import { pricingTiers } from "@/data/pricing";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Pricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="heading panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Price plans as per your needs
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="panel w-100 lg:max-w-900px border rounded-3 overflow-hidden">
                <div className="row child-cols-12 sm:child-cols-6 col-match justify-between g-0">
                  {pricingTiers.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded-0 ${
                          tier.popular ? "bg-secondary dark:bg-gray-800" : ""
                        }`}
                      >
                        {tier.popular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc dark:text-whiteopacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {tier.price}
                            </h5>
                            <span className="fs-7 opacity-70">
                              {tier.priceInfo}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={"/sign-up"}
                                className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                              >
                                {tier.buttonLabel}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px">
                                No credit card required
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.popular
                                ? "Everything in Essentials, plus:"
                                : "Key features:"}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {tier.popular && (
                          <div className="position-absolute bottom-0 ltr:end-0 rtl:start-0 m-2 d-none md:d-block">
                            <Image
                              className="w-100px lg:w-128px d-block dark:d-none"
                              src={tier.imageUrl}
                              width={257}
                              height={187}
                              alt={tier.imageAlt}
                            />
                            <Image
                              className="w-100px lg:w-128px d-none dark:d-block"
                              src={tier.darkImageUrl}
                              width={257}
                              height={187}
                              alt={tier.darkImageAlt}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/page-pricing`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>More detailed pricing</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
