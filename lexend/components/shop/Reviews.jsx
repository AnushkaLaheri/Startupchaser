import React from "react";
import Image from "next/image";
import { reviews } from "@/data/reviews";
export default function Reviews() {
  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="vstack items-start gap-2">
            <div className="vstack gap-2 flex-1">
              <div className="hstack justify-between items-center gap-2">
                <h5 className="h5 m-0 flex-1">{review.title}</h5>
                <ul
                  className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                  title={`Average ${review.rating} out of 5`}
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <li key={starIndex}>
                      <i
                        className={`icon fs-6 unicon-star-filled ${
                          starIndex < review.rating ? "text-yellow" : ""
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-dark dark:text-white text-opacity-70">
                {review.content}
              </p>
            </div>
            <div className="hstack items-center gap-2 h6 ft-tertiary text-dark dark:text-white text-opacity-70">
              <div className="w-40px">
                <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={`Reviewer name: ${review.reviewerName}`}
                    src={review.imageSrc}
                    width="260"
                    height="260"
                  />
                </figure>
              </div>
              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                <span>
                  By
                  <a className="text-none text-primary" href="#">
                    {review.reviewerName}
                  </a>
                </span>
                <span>On {review.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
