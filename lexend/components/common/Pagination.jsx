"use client";
import React, { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(2); // Default active page

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <ul>
      <li>
        <a onClick={() => setActivePage((pre) => (pre == 1 ? 1 : pre - 1))}>
          <span className="icon icon-1 unicon-chevron-left rtl:rotate-180" />
        </a>
      </li>
      {[1, 2].map((page) => (
        <li key={page}>
          <a
            className={activePage === page ? "uc-active" : ""}
            onClick={() => handleClick(page)}
          >
            {page}
          </a>
        </li>
      ))}
      {activePage > 3 && activePage < 7 && (
        <li className="uc-disabled">
          <span>…</span>
        </li>
      )}
      {activePage === 3 && (
        <li>
          <a className={"uc-active"}>3</a>
        </li>
      )}
      {activePage > 3 && activePage < 7 && (
        <li>
          <a className={"uc-active"}>{activePage}</a>
        </li>
      )}
      <li className="uc-disabled">
        <span>…</span>
      </li>
      {activePage === 7 && (
        <li>
          <a className={"uc-active"}>7</a>
        </li>
      )}
      {[8, 9].map((page) => (
        <li key={page}>
          <a
            className={activePage === page ? "uc-active" : ""}
            onClick={() => handleClick(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li>
        <a onClick={() => setActivePage((pre) => (pre >= 9 ? 9 : pre + 1))}>
          <span className="icon icon-1 unicon-chevron-right rtl:rotate-180" />
        </a>
      </li>
    </ul>
  );
}
