import Footer9 from "@/components/footers/Footer9";
import Header9 from "@/components/headers/Header9";
import Blogs from "@/components/homes/home-10/Blogs";
import Brands from "@/components/homes/home-10/Brands";
import Faqs from "@/components/homes/home-10/Faqs";
import Features from "@/components/homes/home-10/Features";
import Hero from "@/components/homes/home-10/Hero";
import KeyFeatures from "@/components/homes/home-10/KeyFeatures";
import Pricing from "@/components/homes/home-10/Pricing";
import Process from "@/components/homes/home-10/Process";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Testimonials2 from "@/components/homes/home-10/Testimonials2";
import React from "react";
export const metadata = {
  title:
    "Home 10 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      {" "}
      <div className="theme-6">
        <div className="bp-xs bp-sm page-wrapper bp-md bp-lg bp-xl dom-ready bp-xxl-max">
          <div className=" uni-body panel uni-body panel bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 overflow-x-hidden disable-cursor">
            <Header9 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Process />
              <Features />
              <Testimonials />
              <KeyFeatures />
              <Pricing />
              <Testimonials2 />
              <Faqs />
              <Brands />
              <Blogs />
            </div>
            <Footer9 />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
