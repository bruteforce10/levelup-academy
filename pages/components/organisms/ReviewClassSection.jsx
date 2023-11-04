import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReviewTestimonialItems from "../molecules/ReviewTestimonialItems";
import useSectionView from "@/lib/hook";

export default function ReviewClassSection({ reviews }) {
  const [isActive, setActive] = useState(0);
  const [dataReviews, setDataReviews] = useState(reviews);
  useEffect(() => {
    if (isActive === 0) {
      setDataReviews(reviews);
    }
  }, [reviews, setActive, isActive]);
  const { ref } = useSectionView("Reviews", 1);

  return (
    <div>
      <div
        className="flex gap-4 flex-wrap max-md:justify-center scroll-mt-[180px]"
        ref={ref}
        id="Reviews"
      >
        <button
          onClick={() => {
            setActive(0);
          }}
          className={
            isActive === 0
              ? "bg-deep text-[#fff] px-[28px] py-[12px] font-bold rounded-full"
              : "bg-[#fff] text-deep px-[28px] py-[12px] font-bold rounded-full"
          }
        >
          All Rating
        </button>
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActive(5 - index);
              const filterRating = reviews.filter(
                (item) => item.rating == 5 - index
              );
              console.log(filterRating);
              setDataReviews(filterRating);
            }}
            className={
              isActive !== 5 - index
                ? "bg-[#fff] text-deep flex items-center gap-x-2 px-[28px] py-[12px] font-bold rounded-full"
                : "bg-deep text-[#fff] flex items-center gap-x-2 px-[28px] py-[12px] font-bold rounded-full"
            }
          >
            <AiFillStar size={24} color="#F4A42B" />
            {5 - index}
          </button>
        ))}
      </div>
      <ReviewTestimonialItems data={dataReviews} />
    </div>
  );
}
