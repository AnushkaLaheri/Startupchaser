"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <div>
          <div>
            <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-days">
              {days}
            </div>
            <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
              Days
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-hours">
              {hours}
            </div>
            <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
              Hours
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-minutes">
              {minutes}
            </div>
            <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
              Minutes
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cstack h4 sm:h2 w-64px h-64px sm:min-w-100px sm:min-h-100px py-2 border rounded uc-countdown-seconds">
              {seconds}
            </div>
            <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
              Seconds
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default function CommingSoon() {
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);

  return (
    <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center h-screen">
          <h2 className="h3 sm:h1">Coming soon!</h2>
          <div
            className="row child-cols-3 items-center justify-center g-1 sm:g-2"
            data-uc-countdown="date: 2024-04-07T16:09:10+00:00"
          >
            {showCountdown && (
              <Countdown
                date={
                  new Date(
                    Date.now() +
                      Math.floor(99) * 24 * 60 * 59 * 1000
                  )
                }
                renderer={renderer}
              />
            )}
          </div>
          <p className="fs-6 xl:fs-5 mt-8">
            Comeback again when we’re live! <br />
            Thank you for understanding and patience!
          </p>
        </div>
      </div>
    </div>
  );
}
