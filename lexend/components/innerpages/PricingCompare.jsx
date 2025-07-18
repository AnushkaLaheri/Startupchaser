import React from "react";

export default function PricingCompare() {
  return (
    <div id="pricing_compare" className="pricing-compare section panel">
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-10">
        <div className="container">
          <div
            className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="heading vstack gap-2 items-center panel text-center max-w-600px mx-auto">
              <h2 className="title h3 m-0">
                Let's compare plans and choose what fit your needs!
              </h2>
            </div>
            <div className="panel p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="table-header-cell" scope="row">
                      <div className="text-transparent">
                        <span>Nom du forfait</span>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/5"
                      scope="col"
                      id="plan-1"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Free</span>
                        </div>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/5"
                      scope="col"
                      id="plan-2"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Pro</span>
                        </div>
                      </div>
                    </th>
                    <th
                      className="table-header-cell w-1/5"
                      scope="col"
                      id="plan-3"
                    >
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Business</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={4} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>AI Automation key features</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Users
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>1 user</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>5 users</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Unlimited users</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Tracking &amp; notifications
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Real-time analytics
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Files uploads
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span>1GB</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>5GB</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Unlimited</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          CRM and Zapier integrations
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Unlimited team workspaces
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          SSO support
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={4} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>Products</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Email Template Builder
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Landing Page Builder
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Reporting &amp; analytics
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          E-commerce and retail
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Large Community
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={4} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>Chatbots</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          To-Do List
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Reports
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Spreadsheets
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Collaboration
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Chatbots
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={4} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>AI-Powered Solutions</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Automation
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Teaming
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Use Case
                        </span>
                        <div
                          data-uc-tooltip="The number of users of each plan."
                          tabIndex={0}
                          aria-expanded="false"
                          role="tooltip"
                        >
                          <i className="icon icon-narrow unicon-information-filled mt-px" />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                          <i className="icon-narrow unicon-checkmark fw-bold" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
