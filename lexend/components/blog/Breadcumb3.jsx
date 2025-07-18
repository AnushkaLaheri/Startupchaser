import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Breadcumb3({ pageName = "Blog Sidebar Left" }) {
  return (
    <div className="page-header panel vstack justify-center items-center gap-2 py-6 xl:py-9 mx-2 text-center rounded-2 bg-primary-25 dark:bg-gray-800">
      <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold dark:text-white">
        <li>
          <Image
            className="text-primary dark:text-secondary icon-1"
            alt="home-icon"
            data-uc-svg=""
            src="/assets/images/common/icons/homepage.svg"
            width="32"
            height="32"
          />
        </li>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
        </li>
        <li>
          <span className="opacity-50">{pageName}</span>
        </li>
      </ul>
      <h1 className="h4 md:h3 xl:h1 m-0">{pageName}</h1>
    </div>
  );
}
