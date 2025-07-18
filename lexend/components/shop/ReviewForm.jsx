"use client";
export default function ReviewForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="panel vstack gap-2 lg:gap-3 mt-2"
      action="?"
    >
      <div className="row g-2 child-cols-12 lg:child-cols-6">
        <div className="form-group">
          <label
            className="form-label fs-7 ft-tertiary"
            htmlFor="reviewer_name"
          >
            Name <sup className="text-danger">*</sup>
          </label>
          <input
            type="text"
            id="reviewer_name"
            className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
          />
        </div>
        <div className="form-group">
          <label
            className="form-label fs-7 ft-tertiary"
            htmlFor="reviewer_email"
          >
            Email <sup className="text-danger">*</sup>
          </label>
          <input
            type="email"
            id="reviewer_email"
            className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label fs-7 ft-tertiary">
          Your rating
          <sup className="text-danger">*</sup>
        </label>
        <ul
          className="nav-x gap-0 text-gray-100 dark:text-gray-700"
          title="Average 1 out of 5"
        >
          <li>
            <i className="icon fs-5 unicon-star-filled text-yellow" />
          </li>
          <li>
            <i className="icon fs-5 unicon-star-filled" />
          </li>
          <li>
            <i className="icon fs-5 unicon-star-filled" />
          </li>
          <li>
            <i className="icon fs-5 unicon-star-filled" />
          </li>
          <li>
            <i className="icon fs-5 unicon-star-filled" />
          </li>
        </ul>
      </div>
      <div className="form-group">
        <label className="form-label fs-7 ft-tertiary" htmlFor="reviewer_title">
          Review title
          <sup className="text-danger">*</sup>
        </label>
        <input
          type="text"
          id="reviewer_title"
          className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
        />
      </div>
      <div className="form-group">
        <label
          className="form-label fs-7 ft-tertiary"
          htmlFor="reviewer_message"
        >
          Your review
        </label>
        <textarea
          id="reviewer_message"
          className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
          rows={5}
          required
          defaultValue={""}
        />
      </div>
      <div className="form-group form-check text-start rtl:text-end">
        <input
          className="form-check-input rounded-0 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
          type="checkbox"
          id="remember_me"
        />
        <label
          className="hstack justify-between form-check-label fs-7 lg:fs-6"
          htmlFor="remember_me"
        >
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>
      <button className="btn btn-sm lg:btn-md btn-primary text-white w-100">
        Submit review
      </button>
    </form>
  );
}
