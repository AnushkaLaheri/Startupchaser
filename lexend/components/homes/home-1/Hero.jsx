"use client";
import Brands from "@/components/common/Brands";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="hero_header"
        className="hero-header section panel overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 end-0 h-500px xl:h-screen bg-gray-900" />
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block uc-dark"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 250; delay: anime.stagger(50, {start: 500});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "40%", left: "25%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white image-filter-white"
              width={193}
              height={216}
              alt="star-1"
              src="/assets/images/template/star-1.svg"
            />
          </div>
          <div
            className="position-absolute  rotate-45"
            style={{ top: "25%", right: "12%" }}
          >
            <Image
              className="w-24px text-gray-900 dark:text-white image-filter-white"
              width={69}
              height={95}
              alt="star-2"
              src="/assets/images/template/star-2.svg"
            />
          </div>
          <div
            className="position-absolute  translate-middle-y -rotate-12"
            style={{ top: "20%", left: "12%" }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-trophy"
              src="/assets/images/template/icon-trophy.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-trophy-dark"
              src="/assets/images/template/icon-trophy-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y rotate-45 ms-n3"
            style={{ top: "35%" }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-location"
              src="/assets/images/template/icon-location.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-location-dark"
              src="/assets/images/template/icon-location-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y"
            style={{ top: "80% ", left: "4% " }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-globe"
              src="/assets/images/template/icon-globe.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-globe-dark"
              src="/assets/images/template/icon-globe-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute  translate-middle-y rotate-45"
            style={{ top: "53% ", right: "18% " }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-crown"
              src="/assets/images/template/icon-crown.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-crown-dark"
              src="/assets/images/template/icon-crown-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y -rotate-45"
            style={{ top: "80%", right: "8%" }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-diamond"
              src="/assets/images/template/icon-diamond.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-diamond-dark"
              src="/assets/images/template/icon-diamond-dark.svg"
              width="100"
              height="100"
            />
          </div>
          <div
            className="position-absolute translate-middle-y -rotate-12 me-n3"
            style={{ top: "35% ", right: "0px" }}
          >
            <Image
              className="w-56px xl:w-64px d-block dark:d-none"
              alt="icon-chat"
              src="/assets/images/template/icon-chat.svg"
              width="100"
              height="100"
            />
            <Image
              className="w-56px xl:w-64px d-none dark:d-block"
              alt="icon-chat-dark"
              src="/assets/images/template/icon-chat-dark.svg"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="section-outer panel pb-6 sm:pb-9 pt-9 sm:pt-10">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div className="vstack gap-6 sm:gap-8 xl:gap-9">
                <div className="panel text-center max-w-850px mx-auto uc-dark">
                  <div
                    className="vstack items-center gap-2 text-white"
                    data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-4 mt-4 sm:mt-0">
                      Easy project managment{" "}
                      <br className="d-none sm:d-block" />
                      of any complexity
                    </h1>
                    <Link
                      href={`/page-pricing`}
                      className="btn btn-md lg:btn-lg btn-primary text-white min-w-150px sm:mt-1 lg:mt-2"
                    >
                      Try it out
                    </Link>
                    <div className="hstack justify-center gap-2 mt-1 sm:mt-2">
                      <div className="hstack justify-center gap-0">
                        <Image
                          className="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900"
                          alt="Avatar image"
                          src="/assets/images/avatars/03.png"
                          width="150"
                          height="150"
                        />
                        <Image
                          className="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900"
                          alt="Avatar image"
                          src="/assets/images/avatars/02.png"
                          width="150"
                          height="150"
                        />
                        <Image
                          className="w-40px rounded-circle ltr:ms-n2 rtl:me-n2 border border-2 border-gray-900"
                          alt="Avatar image"
                          src="/assets/images/avatars/08.png"
                          width="150"
                          height="150"
                        />
                      </div>
                      <span className="fs-7 sm:fs-6 fw-medium opacity-60">
                        4.6k Hardworking Members
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="panel"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                  data-uc-lightbox="video-autoplay: true;"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-16x9 lg:rounded-2 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="Lexend"
                      src="/assets/images/template/home-01-hero-cover.webp"
                      width="1280"
                      height="719"
                    />
                  </figure>
                  <a
                    className="cstack text-none position-absolute top-50 start-50 translate-middle bg-white text-primary w-64px h-64px sm:w-80px sm:h-80px rounded-circle shadow-md"
                    onClick={() => setOpen(true)}
                    data-caption="Easy project managment of any complexity."
                    data-attrs="width: 640; height: 480;"
                  >
                    <i className="icon icon-2 sm:icon-3 unicon-play-filled-alt" />
                  </a>
                </div>
              </div>
              <div className="brands panel overflow-hidden mt-4 sm:mt-6 xl:mt-8 opacity-50">
                <div
                  className="block-panel panel"
                  data-anime="onview: -100; opacity: [0, 1]; duration: 450; delay: 200;"
                >
                  <div className="element-brands text-gray-900 dark:text-white">
                    <Brands />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid.webm"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
