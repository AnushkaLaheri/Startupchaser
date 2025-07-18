import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks4, socialLinks } from "@/data/footer";

export default function Footer5() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer pb-4 lg:pb-6 dark:bg-gray-800 dark:text-white m-2 rounded-2 lg:rounded-3">
        <div className="uc-footer-content pt-6 lg:pt-8">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link href={`/`} style={{ width: 140 }}>
                          <Image
                            className="text-primary"
                            alt="Lexend"
                            src="/assets/images/common/logo-dark.svg"
                            width="117"
                            height="40"
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
                  {footerLinks4.map((section, index) => (
                    <div key={index} className={section.extraClass || ""}>
                      <ul className="nav-y gap-2 fw-medium">
                        <li className="fs-7 text-uppercase dark:text-gray-300">
                          {section.title}
                        </li>
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
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p className="opacity-60">
                  Lexend © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2 text-gray-300">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
