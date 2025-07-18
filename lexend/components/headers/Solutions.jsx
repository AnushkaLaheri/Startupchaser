import { sections4 } from "@/data/menu";
import Link from "next/link";
import React from "react";

export default function Solutions() {
  return (
    <>
      {sections4.map((section, index) => (
        <div key={index}>
          <h6 className="h6 mb-3">
            <i className={`fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`} />
            {section.title}
          </h6>
          <ul className="uc-nav uc-navbar-dropdown-nav vstack gap-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  className="hstack items-start gap-2"
                  href={`/page-features`}
                >
                  <div className="cstack min-w-32px h-32px rounded bg-primary">
                    <i className={`icon-1 ${item.icon} text-dark`} />
                  </div>
                  <span className="vstack gap-narrow mt-nnarrow">
                    <b className="fw-medium dark:text-white">{item.title}</b>
                    <span className="fs-7">{item.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
