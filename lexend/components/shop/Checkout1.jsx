"use client";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function Checkout1() {
  const {
    cartProducts,

    totalPrice,
  } = useContextElement();
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Checkout</h1>
            </div>
          </header>
          <div>
            <div className="panel vstack gap-8">
              <div className="panel vstack gap-4">
                <h3 className="h5 lg:h4 m-0">Billing details:</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="panel vstack gap-2 lg:gap-3"
                  action="?"
                >
                  <div className="row g-2 child-cols-12 lg:child-cols-6">
                    <div className="form-group">
                      <label
                        className="form-label ft-tertiary"
                        htmlFor="checkout_firstname"
                      >
                        Firstname <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        id="checkout_firstname"
                        className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label ft-tertiary"
                        htmlFor="checkout_lastname"
                      >
                        Lastname <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        id="checkout_lastname"
                        className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="form-label ft-tertiary"
                      htmlFor="checkout_email"
                    >
                      Email <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="email"
                      id="checkout_email"
                      className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="contact@johndeo.co"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="form-label ft-tertiary"
                      htmlFor="checkout_country"
                    >
                      Country <sup className="text-danger">*</sup>
                    </label>
                    <select
                      className="form-select form-control-lg rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      id="checkout_country"
                      aria-label="checkout_country"
                      required
                    >
                      <option value="">Morocco</option>
                      <option value="australia">Australia</option>
                      <option value="usa">USA</option>
                      <option value="kingdom">United Kingdom</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      className="form-label ft-tertiary"
                      htmlFor="checkout_street_address"
                    >
                      Street address <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      id="checkout_street_address"
                      className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="House number and street name"
                      required
                    />
                    <input
                      type="text"
                      id="checkout_street_address_2"
                      className="form-control mt-1 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      placeholder="Apartment, suite, unit, etc."
                    />
                  </div>
                  <div className="row g-2 child-cols-12 lg:child-cols-4">
                    <div className="form-group">
                      <label
                        className="form-label ft-tertiary"
                        htmlFor="checkout_town_city"
                      >
                        Town / City <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        id="checkout_town_city"
                        className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Salé"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label ft-tertiary"
                        htmlFor="checkout_state_county"
                      >
                        State / County
                        <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        id="checkout_state_county"
                        className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder="Rabat / Salé / Zemmour-Zair"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label ft-tertiary"
                        htmlFor="checkout_postcode_zip"
                      >
                        Postcode / ZIP
                        <sup className="text-danger">*</sup>
                      </label>
                      <input
                        type="text"
                        id="checkout_postcode_zip"
                        className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                        placeholder={11000}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="panel vstack gap-4">
                <h3 className="h5 lg:h4 m-0">Your order:</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="panel max-h-sm overflow-auto border border-gray-50 dark:text-white dark:border-gray-700"
                >
                  <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                    <thead className="sticky-top ft-tertiary bg-gray-800 text-white z-1">
                      <tr>
                        <th className="lg:w-1/3">Product</th>
                        <th className="lg:w-1/6">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((elm, i) => (
                        <tr key={i}>
                          <td>
                            <h5 className="title h6 m-0">
                              <Link
                                href={`/shop-product-detail/${elm.id}`}
                                className="text-none"
                              >
                                {elm.name}
                              </Link>{" "}
                              x {elm.quantity}
                            </h5>
                          </td>
                          <td>
                            <span className="subtotal">
                              {" "}
                              ${elm.price.toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}

                      <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                        <td>
                          <span className="fw-bold">Subtotal</span>
                        </td>
                        <td>
                          <span className="checkout-subtotal">
                            ${totalPrice.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                        <td>
                          <span className="fw-bold">Shipping</span>
                        </td>
                        <td>
                          <span className="checkout-shipping">
                            Flat rate: $23.00
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                        <td>
                          <span className="fw-bold">Total</span>
                        </td>
                        <td>
                          <span className="checkout-total fw-bold">
                            ${(totalPrice + 23).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="panel vstack gap-4">
                <h3 className="h5 lg:h4 m-0">Select payment method:</h3>
                <div className="panel vstack gap-2 lg:gap-4 p-2 lg:p-4 bg-gray-50 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800 rounded">
                  <div className="vstack lg:hstack justify-stretch items-center gap-1 lg:gap-2 fs-6">
                    <div className="w-100">
                      <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                        <div className="form-check">
                          <input
                            className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                            type="radio"
                            name="payment_method"
                            id="payment_method_bacs"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="payment_method_bacs"
                          >
                            Direct bank transfer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                        <div className="form-check">
                          <input
                            className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                            type="radio"
                            name="payment_method"
                            id="payment_method_cod"
                          />
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="payment_method_cod"
                          >
                            Cash on delivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                        <div className="form-check">
                          <input
                            className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600"
                            type="radio"
                            name="payment_method"
                            id="payment_method_paypal"
                          />
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="payment_method_paypal"
                          >
                            PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-dark dark:text-white text-opacity-60">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <Link
                    href={`/shop-order`}
                    className="btn btn-md xl:btn-lg btn-primary text-white"
                  >
                    Place order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
