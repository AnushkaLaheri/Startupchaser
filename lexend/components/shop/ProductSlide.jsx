"use client";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
const imageSources = [
  "/assets/images/common/products/img-08.jpg",
  "/assets/images/common/products/img-17.jpg",
  "/assets/images/common/products/img-18.jpg",
  "/assets/images/common/products/img-19.jpg",
  "/assets/images/common/products/img-20.jpg",
  "/assets/images/common/products/img-21.jpg",
  "/assets/images/common/products/img-22.jpg",
];

const imageItems = [
  {
    src: "/assets/images/common/products/img-08.jpg",
    href: "/assets/images/common/products/img-08.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-17.jpg",
    href: "/assets/images/common/products/img-17.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-18.jpg",
    href: "/assets/images/common/products/img-18.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-19.jpg",
    href: "/assets/images/common/products/img-19.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-20.jpg",
    href: "/assets/images/common/products/img-20.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-21.jpg",
    href: "/assets/images/common/products/img-21.jpg",
    alt: "Disney Toys",
  },
  {
    src: "/assets/images/common/products/img-22.jpg",
    href: "/assets/images/common/products/img-22.jpg",
    alt: "Disney Toys",
  },
];
export default function ProductSlide() {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="product-slider panel swiper-parent">
      <div className="vstack gap-1">
        <div className="panel">
          <Gallery>
            <Swiper
              modules={[Thumbs, Navigation]}
              navigation={{
                prevEl: ".snbp11",
                nextEl: ".snbn11",
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="swiper swiper-main h-100"
              spaceBetween={8}
            >
              {imageItems.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <Item
                    original={item.src}
                    thumbnail={item.src}
                    width={1280}
                    height={1707}
                    key={index}
                  >
                    {({ ref, open }) => (
                      <div className="product type-product">
                        <figure className="featured-image m-0 rounded ratio ratio-3x4 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={item.src}
                            width={1280}
                            height={1707}
                            alt={item.alt}
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption={item.alt}
                          ></a>
                        </figure>
                      </div>
                    )}
                  </Item>
                </SwiperSlide>
              ))}

              {/* Add Arrows */}
              <div className="swiper-nav snbn11 swiper-next btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 end-0 translate-middle-y me-narrow md:me-2 z-1">
                <i className="unicon-chevron-right icon-1 md:icon-2" />
              </div>
              <div className="swiper-nav snbp11  swiper-prev btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-y ms-narrow md:ms-2 z-1">
                <i className="unicon-chevron-left icon-1 md:icon-2" />
              </div>
            </Swiper>{" "}
          </Gallery>
        </div>
        <div className="panel">
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={5}
          >
            {imageSources.map((src, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="product type-product h-100">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src={src}
                      width={1280}
                      height={1707}
                      alt={`Disney Toys ${index + 1}`}
                    />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
