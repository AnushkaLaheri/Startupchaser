"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import Slider from "rc-slider";
import React, { useState } from "react";

export default function ShopSidebar() {
  const [value, setValue] = useState([50, 160]);
  return (
    <aside
      id="sidebar"
      className="sidebar lg:w-250px xl:w-300px"
      data-uc-sticky="end: true;"
    >
      <div className="vstack gap-4">
        <div className="widget-wrap border rounded">
          <div className="widget-content">
            <form
              className="form-icon-group form-icon-flip"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="search"
                name="q"
                className="form-control form-control-sm h-48px w-full border-0 dark:bg-gray-900 dark:text-white"
                placeholder="Search products.."
              />
              <button
                type="submit"
                className="form-icon text-dark dark:text-white hover:text-primary transition-color duration-150"
              >
                <i className="unicon-search icon-1" />
              </button>
            </form>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">Filter by price</h5>
          </div>
          <div className="widget-content p-2">
            <form
              className="panel vstack gap-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <Slider
                formatLabel={() => ``}
                range
                max={200}
                min={0}
                defaultValue={value}
                onChange={(value) => setValue(value)}
                id="slider"
              />
              <div className="hstack justify-between gap-2">
                <span className="fs-7 opacity-60">
                  Price: ${value[0]} — ${value[1]}
                </span>
                <button type="submit" className="btn btn-xs btn-primary">
                  Filter
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">
              Featured products
            </h5>
          </div>
          <div className="widget-content p-2">
            <div className="row child-cols-6 gy-4 gx-2">
              {products.slice(0, 4).map((elm, i) => (
                <div key={i}>
                  <article className="product type-product panel">
                    <div className="vstack gap-2">
                      <div className="panel">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Disney Toys"
                            src={elm.image}
                            width="1280"
                            height="1707"
                          />
                          <Link
                            href={`/shop-product-detail/${elm.id}`}
                            className="position-cover"
                            data-caption="Disney Toys"
                          ></Link>
                        </figure>
                        {elm.discount && (
                          <span className="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">
                            {elm.discount}
                          </span>
                        )}
                      </div>
                      <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                        <h5 className="h6 m-0">
                          <Link
                            className="text-none"
                            href={`/shop-product-detail/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h5>
                        <ul
                          className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                          title="Average 4 out of 5"
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">Most popular</h5>
          </div>
          <div className="widget-content p-2">
            <div className="panel vstack gap-2">
              {products.slice(2, 6).map((elm, i) => (
                <div key={i}>
                  <article className="product type-product panel">
                    <div className="row g-0">
                      <div className="panel w-64px xl:w-80px">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Laptop Cover"
                            src={elm.image}
                            width="1280"
                            height="1707"
                          />
                          <Link
                            href={`/shop-product-detail/${elm.id}`}
                            className="position-cover"
                            data-caption="Laptop Cover"
                          ></Link>
                        </figure>
                        {elm.discount && (
                          <span className="position-absolute top-0 start-0 m-narrow fs-7 ft-tertiary lh-sm h-16px px-narrow bg-yellow-400 text-dark">
                            {elm.discount}
                          </span>
                        )}
                      </div>
                      <div className="col ms-2">
                        <div className="panel vstack gap-1">
                          <h4 className="h6 m-0">
                            <Link
                              className="text-none"
                              href={`/shop-product-detail/${elm.id}`}
                            >
                              {elm.name}
                            </Link>
                          </h4>
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
                          <div className="hstack gap-narrow fs-7">
                            {elm.oldPrice && (
                              <span className="price-old text-line-through opacity-40">
                                ${elm.oldPrice}
                              </span>
                            )}
                            <span className="price">${elm.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">Recent products</h5>
          </div>
          <div className="widget-content p-2">
            <div className="panel vstack gap-2">
              {products.slice(4, 8).map((elm, i) => (
                <div key={i}>
                  <article className="product type-product panel">
                    <div className="row g-0">
                      <div className="panel w-64px xl:w-80px">
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Laptop Cover"
                            src={elm.image}
                            width="1280"
                            height="1707"
                          />
                          <Link
                            href={`/shop-product-detail/${elm.id}`}
                            className="position-cover"
                            data-caption="Laptop Cover"
                          ></Link>
                        </figure>
                        {elm.discount && (
                          <span className="position-absolute top-0 start-0 m-narrow fs-7 ft-tertiary lh-sm h-16px px-narrow bg-yellow-400 text-dark">
                            {elm.discount}
                          </span>
                        )}
                      </div>
                      <div className="col ms-2">
                        <div className="panel vstack gap-1">
                          <h4 className="h6 m-0">
                            <Link
                              className="text-none"
                              href={`/shop-product-detail/${elm.id}`}
                            >
                              {elm.name}
                            </Link>
                          </h4>
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
                          <div className="hstack gap-narrow fs-7">
                            {elm.oldPrice && (
                              <span className="price-old text-line-through opacity-40">
                                ${elm.oldPrice}
                              </span>
                            )}
                            <span className="price">${elm.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">Categories</h5>
          </div>
          <div className="widget-content p-2">
            <nav className="panel nav-y gap-2">
              <a
                className="hstack justify-between text-none text-dark dark:text-white"
                href="#"
              >
                <span className="cat">Strategy</span>
                <span className="count ft-secondary">(12)</span>
              </a>
              <a
                className="hstack justify-between text-none text-dark dark:text-white"
                href="#"
              >
                <span className="cat">Hollywood</span>
                <span className="count ft-secondary">(8)</span>
              </a>
              <a
                className="hstack justify-between text-none text-dark dark:text-white"
                href="#"
              >
                <span className="cat">Life Style</span>
                <span className="count ft-secondary">(7)</span>
              </a>
              <a
                className="hstack justify-between text-none text-dark dark:text-white"
                href="#"
              >
                <span className="cat">Food</span>
                <span className="count ft-secondary">(25)</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="widget-wrap border rounded">
          <div className="widget-heading panel border-bottom p-2">
            <h5 className="title h6 ft-tertiary text-start">Follow me</h5>
          </div>
          <div className="widget-content p-2">
            <ul className="social-icons nav-x justify-start gap-1 text-gray-900 dark:text-white">
              <li>
                <a
                  className="w-40px h-40px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://dribbble.com/unistudioinc"
                >
                  <i className="unicon-logo-x-filled icon-1 xl:icon-2" />
                </a>
              </li>
              <li>
                <a
                  className="w-40px h-40px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110 text-white bg-primary border-primary"
                  href="https://ui8.net/users/unistudio"
                >
                  <i className="unicon-logo-medium icon-1 xl:icon-2" />
                </a>
              </li>
              <li>
                <a
                  className="w-40px h-40px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://facebook.com/unistudioinc"
                >
                  <i className="unicon-logo-facebook icon-1 xl:icon-2" />
                </a>
              </li>
              <li>
                <a
                  className="w-40px h-40px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://themeforest.net/user/unistudioco"
                >
                  <i className="unicon-logo-instagram icon-1 xl:icon-2" />
                </a>
              </li>
              <li>
                <a
                  className="w-40px h-40px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110"
                  href="https://unistudio.co/unicore/"
                >
                  <i className="unicon-logo-pinterest icon-1 xl:icon-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
