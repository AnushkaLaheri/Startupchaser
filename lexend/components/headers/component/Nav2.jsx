"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { mainPages, othermenuItems } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav2() {
  const pathname = usePathname();
  return (
    <>
      <li className="has-dd-menu">
        <a href="#" role="button" aria-haspopup="true">
          Features{" "}
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
          style={{ top: 127, maxWidth: "100vw" }}
          className="uc-navbar-dropdown w-100 ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
        >
          <div
            className="row g-0 col-match uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div className="col-7">
              <div className="panel p-3">
                <h6 className="h6 ms-3">Main pages</h6>
                <div className="row child-cols-3 g-0">
                  {mainPages.map((page, index) => (
                    <div key={index}>
                      <Link
                        href={page.href}
                        className={`vstack p-1 text-none text-center rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 ${
                          pathname == page.href ? "menuActiveBg" : ""
                        } `}
                      >
                        <div className="featured-image panel border shadow-xs rounded-1 overflow-hidden">
                          <Image
                            alt={page.alt}
                            src={page.src}
                            width={700}
                            height={817}
                          />
                        </div>
                        <div className="panel p-1">
                          <h5 className="fs-7 m-0">{page.title}</h5>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="panel p-3 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <h6 className="h6 ms-3">Other pages</h6>
                <div className="row child-cols-6 g-0">
                  <div>
                    <ul className="uc-nav uc-navbar-dropdown-nav">
                      {othermenuItems.slice(0, 8).map((item, index) => (
                        <li key={index}>
                          <Link
                            className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                            href={item.href}
                          >
                            <i
                              className={`icon-1 ${item.icon} fw-bold text-primary dark:text-secondary`}
                            />
                            <span className="vstack gap-narrow">
                              <b className="fw-bold dark:text-white">
                                {item.title}
                              </b>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="uc-nav uc-navbar-dropdown-nav">
                      {othermenuItems.slice(8).map((item, index) => (
                        <li key={index}>
                          <Link
                            className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                            href={item.href}
                          >
                            <i
                              className={`icon-1 ${item.icon} fw-bold text-primary dark:text-secondary`}
                            />
                            <span className="vstack gap-narrow">
                              <b className="fw-bold dark:text-white">
                                {item.title}
                              </b>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
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
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div
            className="row child-cols-6 g-0 col-match uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-features`}
                  >
                    <i className="icon-1 unicon-checkmark fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">To-Do List</b>
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
                    href={`/page-features`}
                  >
                    <i className="icon-1 unicon-chart-pie fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Reports</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-features`}
                  >
                    <i className="icon-1 unicon-increase-level fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Spreadsheets</b>
                      <span className="fw-normal">
                        Suite of tools that cover all aspects of your business.
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-features`}
                  >
                    <i className="icon-1 unicon-chart-venn-diagram fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Collaboration</b>
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
        <div
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div
            className="row child-cols-6 g-0 col-match uc-grid uc-grid-stack"
            data-uc-grid=""
          >
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
          More
        </a>
      </li>
    </>
  );
}
