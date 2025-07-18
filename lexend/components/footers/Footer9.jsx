import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footer";

export default function Footer9() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer vstack gap-6 lg:gap-8 py-6 lg:py-8 dark:text-white">
        <div className="uc-footer-cta">
          <div className="container">
            <div className="uc-footer-inner panel vstack lg:hstack justify-between items-center text-center lg:text-start ltr:lg:text-start rtl:lg:text-end gap-3 sm:gap-4 md-flex-column">
              <div className="vstack gap-2">
                <h2 className="h3 xl:h2 m-0">Stay up to date!</h2>
                <p className="fs-6 xl:fs-4 text-dark dark:text-white text-opacity-70 dark:text-white">
                  Subscribe to our latest news, announcements, and articles.
                </p>
              </div>
              <div className="panel w-100 sm:w-350px xl:w-450px">
                <form className="row child-cols g-1">
                  <div>
                    <div className="form-group inline-block">
                      <input
                        type="email"
                        className="form-control rounded-default h-48px w-full text-black bg-white"
                        placeholder="Your email.."
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-auto">
                    <button className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary border-0 rounded-default w-full h-48px text-white">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="uc-footer-content">
          <div className="container">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-5">
                    <div className="panel vstack items-start gap-3 xl:gap-4 ltr:md:pe-8 rtl:md:ps-8">
                      <div>
                        <Link
                          className="panel text-none"
                          href={`/home-10`}
                          style={{ width: 140 }}
                        >
                          <Image
                            className="text-primary dark:text-tertiary"
                            alt="Lexend"
                            data-uc-svg=""
                            src="/assets/images/common/logo-8-light.svg"
                            width={148}
                            height={39}
                          />
                        </Link>
                        <p className="mt-2">
                          Connect Instantly, Communicate Seamlessly, Stay
                          connected with friends, family, and colleagues
                          anywhere in the world.
                        </p>
                      </div>
                      <LanguageSelect />
                    </div>
                  </div>
                  {footerLinks.map((links, i) => (
                    <div key={i}>
                      <ul className="nav-y gap-2 fw-medium">
                        {links.links.map((link, i2) => (
                          <li key={i2}>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p className="opacity-60">
                  Lexend © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2">
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-x-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-2 unicon-logo-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
