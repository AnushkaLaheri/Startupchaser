"use client";
import { useEffect, useState } from "react";
import Nav3 from "./component/Nav3";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import LanguageSelect2 from "../common/LanguageSelect2";

export default function Header4() {
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
        <div
          style={{ "--uc-nav-height": "32px" }}
          className="uc-navbar-top bg-primary-700 text-white uc-dark d-none lg:d-block"
        >
          <div className="hide-on-sticky">
            <div className="container container-expand max-w-1440px">
              <div className="uc-navbar min-h-32px fs-8">
                <div className="uc-navbar-left">
                  <ul className="uc-navbar-nav gap-2 fw-medium">
                    <li>
                      <a href="#">Customer stories</a>
                    </li>
                    <li>
                      <Link href={`/page-terms`}>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link href={`/page-contact`}>
                        <span>Hire an Expert</span>
                        <i className="fs-8 unicon-arrow-up-right fw-bold ms-narrow rtl:-rotate-90" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="uc-navbar-right">
                  <div className="uc-navbar-item">
                    <a
                      className="btn btn-xs p-0 fs-8 text-white"
                      href="tel:01032701349"
                    >
                      <i className="icon-narrow unicon-phone" />
                      <span>Tel: +1 327 1349</span>
                    </a>
                  </div>
                  <div className="uc-navbar-item">
                    <a className="btn btn-xs p-0 fs-8 text-white" href="#chat">
                      <i className="icon-narrow unicon-chat-bot" />
                      <span>Live Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ "--uc-nav-height": "80px" }} className="uc-navbar-main">
          <div className="container container-expand max-w-1440px">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
              style={{ position: "static" }}
            >
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
                  <Nav3 />
                </ul>
              </div>
              <div className="uc-navbar-right">
                <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                  <LanguageSelect2 />
                </ul>
                <Link
                  className="btn btn-md btn-primary rounded-default lg:px-3 text-none shadow-xs d-none lg:d-inline-flex"
                  href={`/page-contact`}
                >
                  Send inquiry
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
        </div>
      </nav>
    </header>
  );
}
