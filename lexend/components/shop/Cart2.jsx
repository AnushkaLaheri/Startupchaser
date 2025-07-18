"use client";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { products } from "@/data/products";
export default function Cart2() {
  const {
    cartProducts,
    setCartProducts,
    totalPrice,
    isAddedToCartProducts,
    addProductToCart,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-xl">
        <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="cart-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Cart — v2</h1>
            </div>
          </header>
          <div className="cart-details panel">
            <div className="row gy-4 gx-4 xl:gx-8">
              <div className="col">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="panel max-h-sm overflow-auto border border-gray-50 dark:border-gray-700"
                >
                  {!cartProducts.length ? (
                    <p className="alert alert-warning" hidden="">
                      Your cart empty!
                    </p>
                  ) : (
                    <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                      <thead className="bg-gray-800 text-white sticky-top ft-tertiary bg-gray-50 dark:bg-gray-800 z-1">
                        <tr>
                          <th className="w-100px" />
                          <th className="w-100px" />
                          <th className="w-1/3">Product</th>
                          <th className="w-1/6">Price</th>
                          <th className="w-1/6">QTY</th>
                          <th className="w-1/6">Subtotal</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartProducts.map((elm, i) => (
                          <tr key={i}>
                            <td>
                              <a
                                onClick={() => removeItem(elm.id)}
                                className="remove text-none"
                              >
                                <i className="icon icon-1 unicon-close" />
                              </a>
                            </td>
                            <td>
                              <div className="image panel w-48px lg:w-72px">
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
                              </div>
                            </td>
                            <td>
                              <h5 className="title h6 m-0">
                                <Link
                                  href={`/shop-product-detail/${elm.id}`}
                                  className="text-none"
                                >
                                  {elm.name}
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <span className="price">
                                ${elm.price.toFixed(2)}
                              </span>
                            </td>
                            <td>
                              <input
                                type="number"
                                className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                                step={1}
                                min={1}
                                max={99}
                                name="quantity"
                                value={elm.quantity}
                                onChange={(e) =>
                                  setQuantity(elm.id, e.target.value / 1)
                                }
                                title="Qty"
                                autoComplete="off"
                              />
                            </td>
                            <td>
                              <span className="subtotal">
                                ${(elm.price * elm.quantity).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="sticky-bottom ft-tertiary bg-gray-50 text-dark dark:bg-gray-800 dark:text-white z-1">
                        <tr>
                          <td colSpan={5}>
                            <div className="coupon hstack gap-narrow lg:gap-1 max-w-250px lg:max-w-350px">
                              <input
                                type="text"
                                name="coupon_code"
                                className="form-control form-control-xs sm:form-control-sm lg:form-control-md dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-500"
                                id="coupon_code"
                                defaultValue=""
                                placeholder="Coupon code"
                              />
                              <button
                                type="submit"
                                className="btn btn-xs sm:btn-sm lg:btn-md btn-primary text-nowrap"
                                name="apply_coupon"
                                value="Apply coupon"
                              >
                                Apply coupon
                              </button>
                            </div>
                          </td>
                          <td colSpan={1}>
                            <button
                              type="submit"
                              className="btn btn-xs sm:btn-sm lg:btn-md btn-alt-dark text-nowrap w-100 dark:hover:bg-gray-500"
                              name="update_cart"
                              value="Update cart"
                            >
                              Update cart
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  )}
                </form>
              </div>
              <div className="col-12 lg:col-4">
                <div className="panel vstack gap-4 lg:gap-6">
                  <div className="panel vstack gap-1 lg:gap-2">
                    <h5 className="h5 sm:h4 mx-0">Cart totals</h5>
                    <div className="max-h-sm overflow-auto border border-gray-50 dark:border-gray-700">
                      <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                        <tbody>
                          <tr>
                            <th className="ft-tertiary bg-gray-800 text-white">
                              Subtotal
                            </th>
                            <td>${totalPrice.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <th className="ft-tertiary bg-gray-800 text-white">
                              Shipping
                            </th>
                            <td>
                              <div className="nav-y">
                                <span>Flat rate: $23.00</span>
                                <span>Shipping to Morocco</span>
                                <a className="text-primary" href="#">
                                  Edit address
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th className="ft-tertiary bg-gray-800 text-white">
                              Total
                            </th>
                            <td>
                              <span className="total fw-bold fs-6 lg:fs-5">
                                ${(totalPrice + 23).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link
                      href={`/shop-checkout`}
                      className="btn btn-md xl:btn-lg btn-primary text-white text-nowrap w-100 mt-1"
                    >
                      Proceed to checkout
                    </Link>
                  </div>
                  <div className="panel vstack gap-1 lg:gap-2">
                    <h5 className="h5 sm:h4 mx-0">You may interested in:</h5>
                    <div className="row child-cols-6 gy-4 gx-2">
                      {products.slice(0, 2).map((elm, i) => (
                        <div key={i}>
                          <article className="product type-product panel">
                            <div className="vstack gap-2">
                              <div className="panel">
                                <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                                  <Image
                                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    alt="White Classic Watch"
                                    src={elm.image}
                                    width="1280"
                                    height="1707"
                                  />
                                  <Link
                                    href={`/shop-product-detail/${elm.id}`}
                                    className="position-cover"
                                    data-caption="White Classic Watch"
                                  ></Link>
                                </figure>
                                {elm.discount && (
                                  <span className="position-absolute top-0 start-0 m-1 fs-7 ft-tertiary lh-sm h-16px px-narrow bg-yellow-400 text-dark">
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
                                  title="Average 5 out of 5"
                                >
                                  {[...Array(elm.rating)].map((elm, i) => (
                                    <li key={i}>
                                      <i className="icon fs-7 sunicon-star-filled text-yellow" />
                                    </li>
                                  ))}
                                  {[...Array(5 - elm.rating)].map((elm, i) => (
                                    <li key={i}>
                                      <i className="icon fs-7 sunicon-star-filled" />
                                    </li>
                                  ))}
                                </ul>
                                <div className="hstack justify-center gap-narrow fs-7">
                                  {elm.oldPrice && (
                                    <span className="price-old text-line-through opacity-40">
                                      ${elm.oldPrice.toFixed(2)}
                                    </span>
                                  )}
                                  <span className="price">
                                    ${elm.price.toFixed(2)}
                                  </span>
                                </div>
                                <a
                                  className="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow"
                                  onClick={() => addProductToCart(elm.id)}
                                >
                                  {isAddedToCartProducts(elm.id)
                                    ? "Already Added"
                                    : "Add To Cart"}
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
