"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { features, homeLinks, links } from "@/data/menu";
import { featuresMenu, services } from "@/data/services";
export default function Nav3() {
  return (
    <>
      <li className="has-dd-menu ">
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
        <div className="uc-dropbar uc-full-dd uc-products uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top border-dark dark:border-white border-opacity-5 rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop w-100 ">
          <div className="container max-w-xl">
            <div className="uc-dropbar-inner after-bg">
              <div className="row gx-5 col-match justify-between">
                <div className="col-8">
                  <div className="panel vstack gap-4 py-4">
                    <div className="panel vstack gap-4">
                      <div className="hstack gap-4 justify-between">
                        <h5 className="h5 fw-medium m-0">
                          Discover our Products &amp; Solutions
                        </h5>
                        <Link
                          href={`/page-features`}
                          className="btn btn-sm dark:text-white"
                        >
                          <span>See what's new</span>
                          <span className="cstack w-32px h-32px rounded-circle bg-primary-100 dark:bg-primary">
                            <i className="icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                          </span>
                        </Link>
                      </div>
                      <div className="row child-cols-4 g-3">
                        {features.map((feature, index) => (
                          <div key={index}>
                            <Link
                              href={`/page-features`}
                              className="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                            >
                              <span className="icon">
                                <i
                                  className={`icon-2 ${feature.iconClass} text-gray-900 dark:text-white`}
                                />
                              </span>
                              <div className="panel">
                                <h6 className="h6 fs-7 fw-medium mb-narrow">
                                  {feature.title}
                                </h6>
                                <p className="fs-8 text-muted">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="panel vstack gap-2">
                      <div className="hstack gap-4 justify-between">
                        <h6 className="h6 m-0 fs-8 text-uppercase">
                          Templates and integrations
                        </h6>
                        <Link
                          href={`/page-integrations`}
                          className="btn btn-text h-24px p-0 fs-8 text-uppercase dark:text-white"
                        >
                          <span>See +80 integrations</span>
                        </Link>
                      </div>
                      <div className="row child-cols g-0">
                        {homeLinks.map((link, index) => (
                          <div key={index}>
                            <Link
                              href={link.href}
                              className="vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                            >
                              <div className="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                                <Image
                                  alt={link.imgAlt}
                                  src={link.imgSrc}
                                  width={700}
                                  height={817}
                                />
                              </div>
                              <div className="panel p-1">
                                <span className="fs-8 fw-medium m-0 text-gray-900 dark:text-white">
                                  {link.label}
                                </span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800">
                    <div className="panel category-section">
                      <h6 className="h6 fs-8 text-uppercase">
                        Professional solutions
                      </h6>
                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                        {services.map((service, index) => (
                          <li key={index}>
                            <a href="#">{service}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="panel category-section">
                      <h6 className="h6 fs-8 text-uppercase">
                        Get started is Easy!
                      </h6>
                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                        {links.map((link, index) => (
                          <li key={index}>
                            {link.isInternal ? (
                              <Link href={link.href}>{link.label}</Link>
                            ) : (
                              <a href={link.href}>{link.label}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          Resources{" "}
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
        <div className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop fit-content-600">
          <div className="row child-cols-6 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                {featuresMenu.map((feature, index) => (
                  <li key={index}>
                    <Link
                      className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                      href={feature.href}
                    >
                      <i
                        className={`icon-1 ${feature.iconClass} fw-bold text-primary dark:text-secondary`}
                      />
                      <span className="vstack gap-narrow mt-nnarrow">
                        <b className="fw-bold dark:text-white">
                          {feature.title}
                        </b>
                        <span className="fw-normal">{feature.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="vstack gap-2 p-3 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <div
                  className="featured-image panel"
                  data-uc-lightbox="video-autoplay: true;"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Image"
                      src="/assets/images/common/login.webp"
                      width="1500"
                      height="1000"
                    />
                  </figure>
                  <button className="btn btn-md btn-alt-primary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-2">
                    <i className="icon-1 unicon-play-filled-alt" />
                  </button>
                  <a
                    data-caption="Easy project managment of any complexity."
                    data-attrs="width: 640; height: 480;"
                    className="position-cover"
                    role="button"
                  ></a>
                </div>
                <div className="vstack justify-between gap-2">
                  <div className="vstack gap-1">
                    <h5 className="h6 m-0">
                      Everything you need is right at your fingertips
                    </h5>
                    <p className="fs-7 opacity-70">
                      Say goodbye to the hassle of managing multiple software
                      and tools for different tasks.
                    </p>
                  </div>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-sm btn-primary"
                  >
                    Start free trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          Learn{" "}
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
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="row child-cols-6 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/blog`}
                  >
                    <i className="icon-1 unicon-course fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Blog</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    onClick={openNewsletterModal}
                    role="button"
                  >
                    <i className="icon-1 unicon-email fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Newsletter</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-features`}
                  >
                    <i className="icon-1 unicon-play fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Video Tutorials</b>
                      <span className="fw-normal">
                        Assign tasks, share files, and communicate with your
                        team.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-career`}
                  >
                    <i className="icon-1 unicon-star fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">We're hiring</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-contact`}
                  >
                    <i className="icon-1 unicon-headset fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Help Center</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href={`/page-pricing`}>Pricing</Link>
      </li>
      <li>
        <a
          href="https://themeforest.net/user/ib-themes/portfolio"
          target="_blank"
        >
          Buy now
        </a>
      </li>
    </>
  );
}
