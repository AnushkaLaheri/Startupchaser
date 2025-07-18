"use client";
import Image from "next/image";

export default function Contact2() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-opacity-0 z-0" />
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Contact us
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Feel free to reach out to us using the options below, and our
                dedicated team will respond to your inquiries promptly.
              </p>
            </div>
            <div className="panel max-w-750px mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
              >
                <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p>
                <div className="row child-cols-12 md:child-cols-6 g-2">
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <input
                  className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  placeholder="Your message.."
                  required
                  defaultValue={""}
                />
                <button
                  className="btn btn-primary btn-md text-white mt-2"
                  type="submit"
                >
                  Send message
                </button>
                <p className="text-center">
                  Or drop us a message via
                  <a className="uc-link" href="mailto:hello@lexend.co">
                    email
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
