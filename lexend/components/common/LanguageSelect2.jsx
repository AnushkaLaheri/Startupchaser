"use client";
const languages = ["En", "Ar", "Ch"];
import { useState } from "react";

export default function LanguageSelect2() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <div className="d-inline-block" style={{ position: "relative" }}>
      <a
        onClick={() => setLangOpen((pre) => !pre)}
        className="hstack gap-1 text-none fw-medium"
        role="button"
        aria-expanded={langOpen}
        aria-haspopup="true"
      >
        <i className="icon icon-1 unicon-earth-filled" />
        <span>{selectedLang}</span>
        <span
          data-uc-drop-parent-icon=""
          className="uc-icon uc-drop-parent-icon"
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
        className={`p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop ${
          langOpen ? "uc-open" : ""
        } `}
        style={{
          top: "30px",
          right: 0,
          maxWidth: 60,
        }}
      >
        <ul className="nav-y gap-1 fw-medium items-end">
          {languages.map((language, index) => (
            <li
              onClick={() => {
                setSelectedLang(language);
                setLangOpen(false);
              }}
              key={index}
            >
              <a>{language}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
