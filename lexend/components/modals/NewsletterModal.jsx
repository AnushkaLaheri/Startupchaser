"use client";
import { closeNewsletterModal } from "@/utlis/toggleNewsletterModal";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function NewsletterModal() {
  const pathname = usePathname();
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
        closeNewsletterModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeNewsletterModal();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-newsletter-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
          type="button"
          onClick={closeNewsletterModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="row md:child-cols-6 col-match g-0">
          <div className="d-none md:d-flex">
            <div className="position-relative w-100 ratio-1x1 rounded-2 overflow-hidden">
              <Image
                className="media-cover"
                alt="Newsletter image"
                src="/assets/images/common/newsletter.jpg"
                width="544"
                height="660"
              />
            </div>
          </div>
          <div>
            <div className="panel vstack self-center p-4 md:py-8 text-center">
              <h3 className="h3 md:h2">Subscribe to our Newsletter</h3>
              <p className="ft-tertiary">
                Join 10k+ people to get notified about new posts, news and
                updates.
              </p>
              <div className="panel mt-2 lg:mt-4">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="vstack gap-1"
                >
                  <input
                    type="email"
                    className="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700"
                    placeholder="Your email address.."
                  />
                  <button type="submit" className="btn btn-sm btn-primary">
                    Sign up
                  </button>
                </form>
                <p className="fs-7 mt-2">Do not worry we don't spam!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
