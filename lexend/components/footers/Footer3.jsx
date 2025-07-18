import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks2, socialLinks } from "@/data/footer";

export default function Footer3() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel py-4 lg:py-6 xl:py-9 overflow-hidden"
    >
      <div className="container max-w-xl">
        <div
          className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
        >
          <div className="uc-footer-top panel p-4 lg:p-6 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800">
            <div className="vstack lg:hstack gap-4 justify-between section-heading-2">
              <div>
                <div className="uc-logo">
                  <Link
                    className="panel text-none "
                    href={`/home-4`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt=""
                      src="/assets/images/common/logo-light.svg"
                      width="117"
                      height="40"
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt=""
                      src="/assets/images/common/logo-dark.svg"
                      width="117"
                      height="40"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <div className="hstack items-start gap-1">
                  <a href="#">
                    <Image
                      className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150 image-filter"
                      alt="Google Play Store"
                      data-uc-svg=""
                      src="/assets/images/common/playstore.svg"
                      width="135"
                      height="40"
                    />
                  </a>
                  <a href="#">
                    <Image
                      className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150 image-filter"
                      alt="Apple Store"
                      data-uc-svg=""
                      src="/assets/images/common/appstore.svg"
                      width="134"
                      height="40"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="uc-footer-nav panel">
            <div className="row child-cols-6 sm:child-cols col-match g-4">
              {footerLinks2.map((section, index) => (
                <div
                  key={index}
                  className={
                    section.header === "Other" ? "d-none lg:d-block" : ""
                  }
                >
                  <ul className="nav-y gap-1 fw-medium">
                    <li className="uc-nav-header opacity-60 lg:mb-2">
                      {section.header}
                    </li>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="uc-footer-bottom panel vstack gap-4 pt-4 lg:pt-6 border-top dark:text-white">
            <div className="vstack sm:hstack justify-center items-center gap-1 lg:gap-2">
              <p className="opacity-60">
                Lexend © {new Date().getFullYear()}, All rights reserved.
              </p>
              <ul className="nav-x gap-2 fw-medium">
                <li>
                  <a href="#">Privacy notice</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Cookie settings</a>
                </li>
              </ul>
            </div>
            <div className="hstack justify-center gap-2 lg:gap-3">
              <ul className="nav-x gap-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <i className={`icon icon-2 ${link.iconClass}`} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="vr" />
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
