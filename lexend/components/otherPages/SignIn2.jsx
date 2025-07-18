"use client";
import Link from "next/link";
export default function SignIn2() {
  return (
    <div className="section py-6 sm:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h1 className="h3 sm:h1 m-0">Sign in</h1>
          <div className="panel w-100 sm:w-350px">
            <form onSubmit={(e) => e.preventDefault()} className="vstack gap-2">
              <input
                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="email"
                placeholder="Your email"
                required
              />
              <input
                className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                type="password"
                placeholder="Password"
                required
              />
              <div className="hstack justify-between text-start">
                <div className="form-check text-start rtl:text-end">
                  <input
                    id="uc_form_remember_me"
                    className="form-check-input rounded-0 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                    type="checkbox"
                  />
                  <label
                    htmlFor="uc_form_remember_me"
                    className="hstack justify-between form-check-label fs-6"
                  >
                    Remember me?
                  </label>
                </div>
                <Link href={`/reset-password-2`} className="uc-link">
                  Forgot password
                </Link>
              </div>
              <button
                className="btn btn-primary btn-md text-white mt-2"
                type="submit"
              >
                Log in
              </button>
            </form>
          </div>
          <p>
            Have no account yet?
            <Link className="uc-link" href={`/sign-up-2`}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
