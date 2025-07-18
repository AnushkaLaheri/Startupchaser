"use client";
import { accordionItems2 } from "@/data/faq";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Accordion2() {
  const parentRefs = useRef([]);

  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    parentRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginTop = "0px";
    });
    if (currentIndex !== -1) {
      parentRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginTop = "20px";
    }
  }, [currentIndex]);

  return (
    <>
      {accordionItems2.map((item, i) => (
        <li
          ref={(el) => (parentRefs.current[i] = el)}
          className={`${currentIndex == i ? "uc-open" : ""} `}
          key={item.id}
        >
          <a
            onClick={() => {
              setCurrentIndex((pre) => (pre == i ? -1 : i));
            }}
            className="uc-accordion-title h5 lg:h4 m-0"
          >
            <span className="hstack gap-1 lg:gap-2">
              <span className="cstack w-36px h-36px bg-primary rounded-circle">
                <Image
                  className="icon icon-1 text-white image-filter-white"
                  alt="feature-icon"
                  src={item.icon}
                  width="24"
                  height="24"
                />
              </span>
              <span>{item.title}</span>
            </span>
          </a>
          <div
            ref={(el) => (answerRefs.current[i] = el)}
            className="uc-accordion-content mt-1 lg:mt-2"
          >
            {item.content}
          </div>
        </li>
      ))}
    </>
  );
}
