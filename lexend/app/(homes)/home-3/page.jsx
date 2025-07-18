import Header2 from "@/components/headers/Header2";
import Pricing from "@/components/common/Pricing";
import Brands2 from "@/components/homes/home-3/Brands";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-3/Hero";
import KeyFeatures from "@/components/homes/home-3/KeyFeatures";
import React from "react";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Blog from "@/components/homes/home-3/Blog";
import Cta from "@/components/homes/home-3/Cta";
import Footer2 from "@/components/footers/Footer2";
import Brands3 from "@/components/common/Brands2";
export const metadata = {
  title:
    "Home 3 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage3() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Brands2 />
          <Features />
          <KeyFeatures />
          <Pricing />
          <Testimonials />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands3 />
                </div>
              </div>
            </div>
          </div>
          <Blog />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
