"use client";
import Link from "next/link";

export default function Resetpass2() {
  return (
    <div className="section py-6 sm:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h1 className="h3 sm:h1 m-0">Reset password</h1>
          <div className="panel w-100 sm:w-350px">
            <form onSubmit={(e) => e.preventDefault()} className="vstack gap-2">
              <input
                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="email"
                placeholder="Your email"
                required
              />
              <div className="form-check text-start rtl:text-end">
                <input
                  id="uc_form_not_robot"
                  className="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                  type="checkbox"
                  required
                />
                <label
                  htmlFor="uc_form_not_robot"
                  className="form-check-label fs-6"
                >
                  <span>I'm not a robot</span>.
                </label>
              </div>
              <button
                className="btn btn-primary btn-md text-white mt-2"
                type="submit"
              >
                Reset a password
              </button>
            </form>
          </div>
          <p className="mt-2 sm:m-0">
            Remember your password?
            <Link className="uc-link" href={`/sign-in-2`}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
