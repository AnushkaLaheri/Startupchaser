import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks6 } from "@/data/footer";

export default function Footer8() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-6 lg:py-8 xl:py-9 lg:m-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700 border border-secondary dark:border-white dark:border-opacity-15">
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12">
                    <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mb-6 xl:mb-8">
                      <div className="mb-2 lg:mb-3">
                        <a
                          href="#"
                          className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                        >
                          <span>Start your free trial</span>
                        </a>
                      </div>
                      <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-row md-flex-column">
                        <div className="hstack justify-center gap-2">
                          <b>Super</b>
                          <div className="rating panel">
                            <div className="hstack justify-center gap-narrow">
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="hstack justify-center gap-narrow">
                          <span className="desc rtl:order-first">
                            5,200+ reviews on
                          </span>
                          <div>
                            <Image
                              alt="Trustpilot"
                              className="w-96px dark:d-none"
                              src="/assets/images/review-logo/05.svg"
                              width={138}
                              height={42}
                            />
                            <Image
                              alt="Trustpilot"
                              className="w-96px d-none dark:d-inline-flex"
                              src="/assets/images/review-logo/dark-05.svg"
                              width={138}
                              height={42}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none"
                          href={`/home-9`}
                          style={{ width: 140 }}
                        >
                          <Image
                            className="text-tertiary dark:text-primary"
                            alt="Lexend"
                            data-uc-svg=""
                            src="/assets/images/common/logo-8-dark.svg"
                            width={148}
                            height={39}
                          />
                        </Link>
                        <p className="mt-2">
                          Design amazing digital experiences that create more
                          happy in the world.
                        </p>
                      </div>
                      <LanguageSelect />
                    </div>
                  </div>
                  {footerLinks6.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <ul className="nav-y gap-2 fw-medium dark:text-white">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 mt-6 border-top">
                <p>Lexend © {new Date().getFullYear()}, All rights reserved.</p>
                <ul className="nav-x justify-center gap-2">
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-x-filled" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-youtube" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
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
