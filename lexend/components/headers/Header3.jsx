"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav2 from "./component/Nav2";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";

export default function Header3() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const elementRef = useRef(null);
  const [isDDOpen, setIsDDOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        setIsDDOpen(false);
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      style={{ "--uc-nav-height": "80px !important" }}
      className={`uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 ${
          scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"
        } `}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      >
        <div className="container max-w-xl">
          <div className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white">
            <div className="uc-navbar-left">
              <div className="uc-logo text-dark dark:text-white">
                <Link
                  className="panel text-none"
                  href={`/`}
                  style={{ width: 140 }}
                >
                  <Image
                    className="dark:d-none"
                    alt="Lexend"
                    src="/assets/images/common/logo-light.svg"
                    width="117"
                    height="40"
                  />
                  <Image
                    className="d-none dark:d-block"
                    alt="Lexend"
                    src="/assets/images/common/logo-dark.svg"
                    width="117"
                    height="40"
                  />
                </Link>
              </div>
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                <Nav2 />
              </ul>
            </div>
            <div className="uc-navbar-right">
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                <li ref={elementRef}>
                  <a
                    onClick={() => setIsDDOpen((pre) => !pre)}
                    role="button"
                    aria-haspopup="true"
                  >
                    Request a demo
                  </a>
                  <div
                    className={`uc-navbar-dropdown p-3 w-300px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop ${
                      isDDOpen ? "uc-open" : ""
                    } `}
                    data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
                  >
                    <p className="fs-7">
                      Lexend offers a comprehensive suite of tools that cover
                      all aspects of your business.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="vstack gap-1 my-2"
                    >
                      <input
                        className="form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                        type="text"
                        placeholder="Full name"
                        required
                      />
                      <input
                        className="form-control form-control-sm rounded-default fs-7 w-full bg-gray-25 dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                      <div className="hstack items-center justify-between mt-1">
                        <div className="form-check m-0">
                          <input
                            id="header_request_demo_application"
                            className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                            type="checkbox"
                            required
                          />
                          <label
                            htmlFor="header_request_demo_application"
                            className="hstack justify-between form-check-label fw-medium fs-7"
                          >
                            I read and agree to{" "}
                            <Link
                              href={`/page-terms`}
                              className="uc-link text-underline ltr:ms-narrow rtl:me-narrow dark:text-secondary"
                            >
                              terms
                            </Link>
                            .
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-sm rounded-default text-white mt-1"
                        type="submit"
                      >
                        Request a demo
                      </button>
                    </form>
                    <p className="fs-7">
                      We care about your data in our{" "}
                      <Link
                        href={`/page-privacy`}
                        className="uc-link text-underline dark:text-secondary"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                className="btn btn-sm btn-primary rounded-default text-white text-none d-none lg:d-inline-flex"
                href={`/page-pricing`}
              >
                Start free trial
              </Link>
              <a
                className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                onClick={openMobileMenu}
              >
                <svg width={20} height={20} viewBox="0 0 20 20">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                    }}
                  />
                  <rect className="line-1" y={3} width={20} height={2} />
                  <rect className="line-2" y={9} width={20} height={2} />
                  <rect className="line-3" y={9} width={20} height={2} />
                  <rect className="line-4" y={15} width={20} height={2} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
