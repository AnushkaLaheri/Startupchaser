"use client";
import { products } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProducts() {
  return (
    <div className="featured-products-panel panel pt-4 lg:pt-8 mt-4 border-top border-gray-100 dark:border-gray-800">
      <header className="panel hstack justify-center gap-2 text-center">
        <h3 className="h5 lg:h4">You might also like</h3>
      </header>
      <div className="panel swiper-parent mt-4 md:mt-6">
        {/* Swiper init */}
        <Swiper
          className="swiper"
          spaceBetween={8} // default gap
          slidesPerView={2} // default items
          pagination={{ clickable: true }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp8",
            nextEl: ".snbn8",
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
        >
          {products.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <article className="product type-product panel">
                <div className="vstack gap-2">
                  <div className="panel">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        src={elm.image}
                        width={1280}
                        height={1707}
                        alt="Elegant Watch"
                      />
                      <Link
                        href={`/shop-product-detail/${elm.id}`}
                        className="position-cover"
                        data-caption="Elegant Watch"
                      ></Link>
                    </figure>
                    {elm.discount && (
                      <span className="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">
                        {elm.discount}
                      </span>
                    )}
                  </div>
                  <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                    <h5 className="h6 lg:h5 m-0">
                      <Link
                        className="text-none"
                        href={`/shop-product-detail/${elm.id}`}
                      >
                        {elm.title}
                      </Link>
                    </h5>
                    <ul
                      className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                      title="Average 5 out of 5"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index}>
                          <i
                            className={`icon fs-7 unicon-star-filled ${
                              index < elm.rating ? "text-yellow" : ""
                            }`}
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="hstack justify-center gap-narrow fs-7">
                      {elm.oldPrice && (
                        <span className="price-old text-line-through opacity-40">
                          ${elm.oldPrice}
                        </span>
                      )}
                      <span className="price">${elm.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Add Arrows */}
        <div className="swiper-nav snbp8 swiper-next btn btn-xs md:btn-md w-32px md:w-48px h-32px md:h-48px bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-circle shadow-xs position-absolute top-50 start-100 translate-middle-x mt-n9 md:mt-n10 z-1">
          <i className="unicon-chevron-right icon-1 md:icon-2" />
        </div>
        <div className="swiper-nav snbn8 swiper-prev btn btn-xs md:btn-md w-32px md:w-48px h-32px md:h-48px bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-x mt-n9 md:mt-n10 z-1">
          <i className="unicon-chevron-left icon-1 md:icon-2" />
        </div>
      </div>
    </div>
  );
}
