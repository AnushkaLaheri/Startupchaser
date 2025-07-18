"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-8">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2">
                    Tools that cover <br />
                    <span className="text-primary dark:text-secondary">
                      all aspects{" "}
                    </span>
                    of your growing business.
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Say goodbye to the hassle of managing multiple software and
                    tools for different tasks. Lexend offers a comprehensive
                    suite of tools that cover all aspects of your business.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <div className="form-icon-group inline-block">
                        <input
                          type="email"
                          className="form-control rounded-default h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          placeholder="Your email.."
                          required
                        />
                        <span className="form-icon text-gray dark:text-gray-300">
                          <i className="unicon-email icon-1" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white"
                      >
                        <span className="d-none md:d-block">
                          Try it out for free
                        </span>
                        <span className="d-block md:d-none">Sign up</span>
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    We care about your data in our
                    <Link
                      href={`/page-privacy`}
                      className="uc-link text-underline dark:text-secondary"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="hero-mockup"
                    src="/assets/images/template/hero-mockup.png"
                    width="1492"
                    height="1250"
                  />
                  <Image
                    className="ltr:d-none rtl:d-block"
                    alt="hero-mockup-rtl"
                    src="/assets/images/template/hero-mockup-rtl.png"
                    width="1492"
                    height="1250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
