"use client";
import { useContextElement } from "@/context/Context";
import { closeCart } from "@/utlis/toggleCart";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
export default function Cart() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeCart();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeCart();
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      id="uc-cart-panel"
      data-uc-offcanvas="overlay: true; flip: true;"
      className="uc-offcanvas "
      tabIndex={-1}
      style={{ display: "block" }}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 885 }}
      >
        <button
          onClick={closeCart}
          className="uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
        >
          <i className="unicon-close" />
        </button>
        <div className="mini-cart-content vstack justify-between panel h-100">
          <div className="mini-cart-header">
            <h3 className="title h5 m-0 text-dark dark:bg-gray-900">
              Shopping cart
            </h3>
          </div>
          <div className="mini-cart-listing panel flex-1 my-4 overflow-scroll">
            {!cartProducts.length && (
              <p className="alert alert-warning" hidden="">
                Your cart empty!
              </p>
            )}
            <div className="panel vstack gap-3">
              {cartProducts.map((elm, i) => (
                <div key={i}>
                  <article className="product type-product panel">
                    <div className="hstack gap-2">
                      <figure className="featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden">
                        <img
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          src={elm.image}
                          alt="Laptop Cover"
                        />
                        <Link
                          href={`/shop-product-detail/${elm.id}`}
                          className="position-cover"
                          data-caption="Laptop Cover"
                        />
                      </figure>
                      <div className="content vstack gap-narrow fs-6">
                        <h5 className="h6 m-0">
                          <Link
                            className="text-none text-dark dark:text-white"
                            href={`/shop-product-detail/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h5>
                        <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                          <span className="qty">{elm.quantity}</span> x
                          <span className="price">${elm.price.toFixed(2)}</span>
                        </div>
                        <a
                          onClick={() => removeItem(elm.id)}
                          className="remove fs-7 text-dark dark:text-white"
                        >
                          Remove
                        </a>
                      </div>
                      <a
                        href="#remove_from_cart"
                        className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger"
                        hidden=""
                      >
                        <i className="unicon-close icon-1" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="mini-cart-footer panel pt-3 border-top">
            <div className="panel vstack gap-3 justify-between">
              <div className="mini-cart-total hstack justify-between">
                <h5 className="h5 m-0 text-dark dark:text-white">Subtotal</h5>
                <b className="fs-5">${totalPrice.toFixed(2)}</b>
              </div>
              <div className="mini-cart-actions vstack gap-1">
                <Link
                  href="/shop-cart"
                  className="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  View cart
                </Link>
                <Link
                  href="/shop-checkout"
                  className="btn btn-md btn-primary text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
