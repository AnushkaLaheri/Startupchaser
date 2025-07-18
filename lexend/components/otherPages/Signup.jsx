"use client";
import Link from "next/link";
import Image from "next/image";
export default function Signup() {
  return (
    <div
      id="sign-in"
      className="sign-in section panel overflow-hidden bg-secondary dark:bg-gray-900"
    >
      <div className="section-outer panel">
        <div className="section-inner panel">
          <div className="panel overflow-hidden">
            <div className="panel row child-cols-12 md:child-cols-6 g-0">
              <div>
                <div
                  className="panel overflow-hidden min-h-300px h-100 lg:h-screen"
                  data-anime="translateX: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750;"
                >
                  <figure className="panel h-100 m-0 rounded">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="Hero login image"
                      src="/assets/images/common/login.webp"
                      width="1500"
                      height="1000"
                    />
                  </figure>
                  <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:py-8">
                    <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                    <div className="panel z-1">
                      <div
                        className="vstack gap-3"
                        data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100, {start: 250});"
                      >
                        <p className="fs-5 xl:fs-4 fw-medium">
                          “This software simplifies the website building
                          process, making it a breeze to manage our online
                          presence.”
                        </p>
                        <div className="vstack gap-0">
                          <p className="fs-6 lg:fs-5 fw-medium">
                            David Handerson
                          </p>
                          <span className="fs-7 opacity-80">
                            Founder &amp; CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/`}
                    className="position-absolute top-0 ltr:start-0 rtl:end-0 text-none m-4 lg:m-6"
                    data-anime="scale: [0.5, 1]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100, {start: 150});"
                  >
                    <Image
                      className="w-32px lg:w-40px"
                      alt=""
                      src="/assets/images/common/logo-mark.svg"
                      width="34"
                      height="34"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="panel vstack justify-center h-100 overflow-hidden">
                  <div
                    className="d-none lg:d-block"
                    data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
                  >
                    <div
                      className="position-absolute rotate-45"
                      style={{
                        bottom: "15%",
                        left: "18%",
                      }}
                    >
                      <Image
                        className="w-32px text-gray-900 dark:text-white"
                        width={193}
                        height={216}
                        alt="star-1"
                        data-uc-svg=""
                        src="/assets/images/template/star-1.svg"
                      />
                    </div>
                    <div
                      className="position-absolute  rotate-45"
                      style={{ top: "15%", right: "18%" }}
                    >
                      <Image
                        className="w-24px text-gray-900 dark:text-white"
                        width={69}
                        height={95}
                        alt="star-2"
                        data-uc-svg=""
                        src="/assets/images/template/star-2.svg"
                      />
                    </div>
                    <div
                      className="position-absolute top-0 start-0 translate-middle-y -rotate-12"
                      style={{ top: "15% !important", left: "10% !important" }}
                    >
                      <Image
                        className="w-64px d-block dark:d-none"
                        alt="icon-internet"
                        src="/assets/images/template/icon-internet.svg"
                        width="100"
                        height="100"
                      />
                      <Image
                        className="w-64px d-none dark:d-block"
                        alt="icon-internet-dark"
                        src="/assets/images/template/icon-internet-dark.svg"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div
                      className="position-absolute top-0 start-0 translate-middle-y ms-n3"
                      style={{ top: "65% !important", left: "0% !important" }}
                    >
                      <Image
                        className="w-64px d-block dark:d-none"
                        alt="icon-globe"
                        src="/assets/images/template/icon-globe.svg"
                        width="100"
                        height="100"
                      />
                      <Image
                        className="w-64px d-none dark:d-block"
                        alt="icon-globe-dark"
                        src="/assets/images/template/icon-globe-dark.svg"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div
                      className="position-absolute top-0 end-0 translate-middle-y rotate-12"
                      style={{ top: "80% !important", right: "12% !important" }}
                    >
                      <Image
                        className="w-64px d-block dark:d-none"
                        alt="icon-diamond"
                        src="/assets/images/template/icon-diamond.svg"
                        width="100"
                        height="100"
                      />
                      <Image
                        className="w-64px d-none dark:d-block"
                        alt="icon-diamond-dark"
                        src="/assets/images/template/icon-diamond-dark.svg"
                        width="100"
                        height="100"
                      />
                    </div>
                    <div
                      className="position-absolute top-0 end-0 translate-middle-y -rotate-12 me-n2"
                      style={{ top: "35% !important" }}
                    >
                      <Image
                        className="w-64px d-block dark:d-none"
                        alt="icon-community"
                        src="/assets/images/template/icon-community.svg"
                        width="101"
                        height="87"
                      />
                      <Image
                        className="w-64px d-none dark:d-block"
                        alt="icon-community-dark"
                        src="/assets/images/template/icon-community-dark.svg"
                        width="100"
                        height="100"
                      />
                    </div>
                  </div>
                  <div className="panel py-4 px-2">
                    <div
                      className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center"
                      data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);"
                    >
                      <h1 className="h4 sm:h2">Create an account</h1>
                      <div className="hstack gap-2">
                        <a
                          href="#github"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-dark text-white dark:bg-white dark:text-dark"
                        >
                          <i className="icon icon-1 unicon-logo-github" />
                        </a>
                        <a
                          href="#facebook"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-blue-600 text-white"
                        >
                          <i className="icon icon-1 unicon-logo-facebook" />
                        </a>
                      </div>
                      <div className="panel my-2">
                        <hr className="m-0" />
                        <span className="position-absolute top-50 start-50 translate-middle p-1 fs-7 text-uppercase bg-secondary dark:bg-gray-900">
                          Or
                        </span>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="vstack gap-2"
                      >
                        <input
                          className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                        <div className="hstack text-start">
                          <div className="form-check text-start rtl:text-end">
                            <input
                              id="uc_form_check_terms"
                              className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                              type="checkbox"
                              required
                            />
                            <label
                              htmlFor="uc_form_check_terms"
                              className="hstack justify-between form-check-label fs-6"
                            >
                              I read and accept the
                              <Link
                                href={`/page-terms`}
                                className="uc-link ltr:ms-narrow rtl:me-narrow"
                              >
                                terms of use
                              </Link>
                              .
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-md text-white mt-2"
                          type="submit"
                        >
                          Create my account
                        </button>
                      </form>
                      <p>
                        Already have an account?
                        <Link className="uc-link" href={`/sign-in`}>
                          Sign in
                        </Link>
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
  );
}
