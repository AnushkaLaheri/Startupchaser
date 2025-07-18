"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductPages from "./ProductPages";
import Solutions from "./Solutions";
import { categories } from "@/data/menu";

export default function Header7() {
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
  return (
    <header
      className={`uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky  ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      style={{}}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent`}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
          <div className="container">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-1 lg:px-2 bg-white dark:bg-tertiary-600 bg-opacity-90 rounded-2 mt-2 shadow-xs"
              data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo ltr:ms-1 rtl:me-1">
                  <Link
                    className="panel text-none"
                    href={`/home-8`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-light.svg"
                      width={148}
                      height={39}
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-dark.svg"
                      width={148}
                      height={39}
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center  ">
                <ul className="uc-navbar-nav fs-5 gap-3 lg:gap-4 d-none lg:d-flex">
                  <li className="has-dd-menu">
                    <a href="#" role="button" aria-haspopup="true">
                      Products{" "}
                      <span
                        data-uc-navbar-parent-icon=""
                        className="uc-icon uc-navbar-parent-icon"
                      >
                        <svg width={12} height={12} viewBox="0 0 12 12">
                          <polyline
                            fill="none"
                            stroke="#000"
                            strokeWidth="1.1"
                            points="1 3.5 6 8.5 11 3.5"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-tertiary-600 dark:text-white uc-drop uc-open"
                      data-uc-drop=" offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                      style={{
                        width: "100%",
                        maxWidth: 1452,
                      }}
                    >
                      <div className="uc-dropbar-content p-3 lg:p-6">
                        <div className="container container-full">
                          <div className="row child-cols-4 gx-6">
                            <ProductPages />
                          </div>
                        </div>
                      </div>
                      <div className="uc-dropbar-footer p-2 xl:p-4 xl:px-6 bg-gray-25 dark:bg-opacity-10 dark:text-white">
                        <ul className="nav-x gap-4 fs-8">
                          <li>
                            <a href="#">
                              <i className="fs-8 unicon-api" />
                              <span className="border-bottom hover:border-primary duration-150">
                                Explore Apps
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fs-8 unicon-airplay" />
                              <span className="border-bottom hover:border-primary duration-150">
                                AI Solutions
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fs-8 unicon-cloud-lightning" />
                              <span className="border-bottom hover:border-primary duration-150">
                                Join Lexend Early Access
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="has-dd-menu">
                    <a href="#" role="button" aria-haspopup="true">
                      Solutions{" "}
                      <span
                        data-uc-navbar-parent-icon=""
                        className="uc-icon uc-navbar-parent-icon"
                      >
                        <svg width={12} height={12} viewBox="0 0 12 12">
                          <polyline
                            fill="none"
                            stroke="#000"
                            strokeWidth="1.1"
                            points="1 3.5 6 8.5 11 3.5"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-tertiary-600 dark:text-white uc-drop"
                      data-uc-drop=" offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;"
                      style={{
                        width: "100%",
                        maxWidth: 1452,
                      }}
                    >
                      <div className="uc-dropbar-content">
                        <div className="container container-full">
                          <div className="uc-dropbar-inner p-2">
                            <div className="row col-match justify-between">
                              <div className="col-8">
                                <div className="panel vstack gap-4 p-4">
                                  <div className="vstack gap-narrow flex-none">
                                    <h5 className="h5 xl:h4 m-0">
                                      Workflow quick-start automation guide
                                    </h5>
                                    <p className="fs-7 opacity-60">
                                      How Lexend can help you automate your work
                                    </p>
                                  </div>
                                  <div className="row child-cols-4 gx-4 col-match justify-between">
                                    <Solutions />
                                  </div>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="panel vstack gap-4 p-4 bg-gray-25 dark:bg-opacity-10 rounded-default">
                                  {categories.map((category, index) => (
                                    <div
                                      key={index}
                                      className="panel category-section"
                                    >
                                      <h5 className="h6">{category.title}</h5>
                                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                                        {category.links.map(
                                          (link, linkIndex) => (
                                            <li key={linkIndex}>
                                              {link.href === "#" ? (
                                                <a href={link.href}>
                                                  {link.text}
                                                </a>
                                              ) : (
                                                <Link href={link.href}>
                                                  {link.text}
                                                </Link>
                                              )}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href={`/blog-sidebar`}>Insights</Link>
                  </li>
                  <li>
                    <Link href={`/page-pricing-2`}>Pricing</Link>
                  </li>
                  <li>
                    <Link href={`/page-about`}>About</Link>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <Link
                  className="uc-link fs-5 text-dark dark:text-white"
                  href={`/sign-in`}
                >
                  Log in
                </Link>
                <Link
                  className="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs"
                  href={`/sign-up`}
                >
                  Sign up
                </Link>
                <a
                  className="btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none"
                  onClick={openMobileMenu}
                >
                  <i className="icon icon-2 unicon-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
