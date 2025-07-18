"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Nav from "./component/Nav";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";
import LanguageSelect2 from "../common/LanguageSelect2";

export default function Header2() {
  const prevScrollPos = useRef(0);
  const ticking = useRef(false);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          const isScrollingUp = currentScrollPos < prevScrollPos.current;

          if (currentScrollPos <= 80) {
            setScrollingUp(false);
          } else if (isScrollingUp !== scrollingUp) {
            setScrollingUp(isScrollingUp);
          }

          prevScrollPos.current = currentScrollPos;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]); // Depend on `scrollingUp` only

  return (
    <header
      className={`uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 ${
          scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"
        }`}
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
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                <Nav />
              </ul>
            </div>
            <div className="uc-navbar-right">
              <div className="d-none xl:d-block">
                <a
                  className="text-none fw-medium"
                  onClick={openContactModal}
                  role="button"
                >
                  <span>Request a demo</span>
                </a>
              </div>
              <div className="d-none lg:d-block">
                <Link className="text-none fw-medium" href={`/sign-in`}>
                  <span>Log in</span>
                </Link>
              </div>
              <Link
                className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                href={`/page-pricing`}
              >
                Start free trial
              </Link>
              <LanguageSelect2 />
              <a
                className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                onClick={openMobileMenu}
              >
                <svg width={20} height={20} viewBox="0 0 20 20">
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
