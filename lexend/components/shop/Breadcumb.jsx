import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Breadcumb({ pageName }) {
  return (
    <div
      style={{ marginTop: "80px" }}
      className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
    >
      <div className="container max-w-xl">
        <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
          <li>
            <Image
              alt="icon"
              className="me-1"
              src="/assets/images/common/icons/home.svg"
              width="18"
              height="18"
            />
          </li>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180"></i>
          </li>
          <li>
            <span className="opacity-50">{pageName ? pageName : "Shop"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
