"use client";

import { closeSearchModal } from "@/utlis/toggleSearchModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SearchModal() {
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
        closeSearchModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeSearchModal();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-search-modal"
      className="uc-modal-full uc-modal"
      data-uc-modal="overlay: true"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog d-flex justify-center bg-white text-dark dark:bg-gray-900 dark:text-white"
        data-uc-height-viewport=""
        role="dialog"
        aria-modal="true"
        style={{ minHeight: "auto" }}
      >
        <div className="uc-modal-close-full m-1 p-0 vstack gap-narrow text-center">
          <button
            className="icon-3 btn btn-md btn-dark dark:bg-white dark:text-dark w-24px sm:w-32px h-24px sm:h-32px rounded-circle flex-1"
            type="button"
            onClick={closeSearchModal}
          >
            <i className="unicon-close" />
          </button>
        </div>
        <div className="panel w-100 sm:w-500px px-2 py-10">
          <h3 className="h4 sm:h2 text-center">What are you looking for?</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hstack gap-1 mt-4 border-bottom p-narrow dark:border-gray-700"
          >
            <span className="d-inline-flex justify-center items-center w-24px sm:w-40 h-24px sm:h-40px opacity-50">
              <i className="unicon-search icon-3" />
            </span>
            <input
              type="search"
              name="q"
              className="form-control-plaintext ms-1 fs-6 sm:fs-5 w-full dark:text-white"
              placeholder="Type your keyword.."
              aria-label="Search"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}
