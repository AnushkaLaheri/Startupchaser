import { featurePageLinks, sections3 } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductPages() {
  return (
    <>
      {" "}
      {sections3.map((section, index) => (
        <div key={index} className="vstack gap-3">
          <h6 className="h6 m-0">
            <i className={`fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`} />
            {section.title}
          </h6>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <Link
                href={`/page-features`}
                className="hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
              >
                <span className="icon rounded dark:bg-white">
                  <Image
                    className="w-32px"
                    alt="icon"
                    width={24}
                    height={24}
                    src={item.iconSrc}
                  />
                </span>
                <div className="panel">
                  <span className="fs-7 mb-narrow">{item.title}</span>
                  <p className="fs-7 opacity-60">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
          <div>
            <Link
              href={`/page-features`}
              className="ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary"
            >
              <span className="border-bottom hover:border-primary duration-150">
                {section.viewAllText}
              </span>
              <i className="fs-8 unicon-arrow-up-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
