"use client";
import { useContextElement } from "@/context/Context";
import { icons, menuItems } from "@/data/menu";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();
  const [activeParent1, setActiveParent1] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href) {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href) {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href) {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide "
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              href={`/`}
              className="h5 text-none text-gray-900 dark:text-white"
            >
              <Image
                className="w-32px"
                alt="Lexend"
                src="/assets/images/common/logo-mark.svg"
                width="34"
                height="34"
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
          >
            <i className="unicon-close" />
          </button>
        </header>
        <div className="panel">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="search-panel"
            className="form-icon-group vstack gap-1 mb-2 uc-sticky"
            data-uc-sticky=""
          >
            <input
              type="email"
              className="form-control form-control-sm fs-7 rounded-default"
              placeholder="Search.."
            />
            <span className="form-icon text-gray">
              <i className="unicon-search icon-1" />
            </span>
          </form>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 40, width: 290, margin: "0px 0px 16px" }}
            hidden=""
          />
          <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.subItems ? "uc-parent" : ""} ${
                  activeParent1 == index ? "active" : ""
                }`}
              >
                {item.href ? (
                  <Link
                    className={isMenuActive(item) ? "menuActive" : ""}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <a
                      className={isMenuActive(item) ? "menuActive" : ""}
                      onClick={() =>
                        setActiveParent1((pre) => (pre == index ? -1 : index))
                      }
                    >
                      {item.label}
                    </a>
                    {item.subItems && (
                      <ul
                        className={`uc-nav-sub ${
                          activeParent1 == index ? "active" : ""
                        }`}
                      >
                        {item.subItems.map((subItem, index2) => (
                          <li
                            key={index2}
                            className={`${!subItem.href ? "uc-parent" : ""}  ${
                              activeParent2 == index2 ? "active" : ""
                            }`}
                            role="presentation"
                          >
                            {subItem.href ? (
                              <Link
                                className={
                                  isMenuActive(subItem) ? "menuActive" : ""
                                }
                                href={subItem.href}
                              >
                                {subItem.label}
                              </Link>
                            ) : (
                              <>
                                <a
                                  className={
                                    isMenuActive(subItem) ? "menuActive" : ""
                                  }
                                  onClick={() =>
                                    setActiveParent2((pre) =>
                                      pre == index2 ? -1 : index2
                                    )
                                  }
                                >
                                  {subItem.label}
                                </a>
                                {subItem.subItems && (
                                  <ul
                                    className={`uc-nav-sub ${
                                      activeParent2 == index2 ? "active" : ""
                                    }`}
                                  >
                                    {subItem.subItems.map((subItem, index3) => (
                                      <li
                                        key={index3}
                                        className={
                                          !subItem.href ? "uc-parent" : ""
                                        }
                                        role="presentation"
                                      >
                                        {subItem.href ? (
                                          <Link
                                            className={
                                              isMenuActive(subItem)
                                                ? "menuActive"
                                                : ""
                                            }
                                            href={subItem.href}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ) : (
                                          <></>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className="hr opacity-10 my-1" />
            <li>
              <Link href={`/sign-up`}>Create an account</Link>
            </li>
            <li>
              <Link href={`/sign-in`}>Log in</Link>
            </li>
            <li>
              <a href="https://themeforest.net/user/ib-themes/portfolio">
                Buy Template
              </a>
            </li>
          </ul>
          <ul className="social-icons nav-x mt-4">
            <li>
              {icons.map((icon, index) => (
                <a key={index} href={icon.href}>
                  <i className={icon.iconClass} />
                </a>
              ))}
            </li>
          </ul>
          <div
            className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed"
            data-uc-sticky="position: bottom"
          >
            <div className="vstack gap-1">
              <span className="fs-7 opacity-60">Select theme:</span>
              <div className="darkmode-trigger" data-darkmode-switch="">
                <label className="switch">
                  <input
                    checked={!isDark}
                    onChange={handleToggle}
                    type="checkbox"
                  />
                  <span className="slider fs-5" />
                </label>
              </div>
            </div>
          </div>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 83, width: 290, margin: "32px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
