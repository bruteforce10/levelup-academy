import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import ReviewTestimonialItems from "../molecules/ReviewTestimonialItems";
import useSectionView from "@/lib/hook";

export default function ReviewClassSection() {
  const { ref } = useSectionView("Reviews", 1);
  return (
    <div>
      <div
        className="flex gap-4 flex-wrap max-md:justify-center scroll-mt-[180px]"
        ref={ref}
        id="Reviews"
      >
        <button className="bg-deep text-[#fff] px-[28px] py-[12px] font-bold rounded-full">
          All Rating
        </button>
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            className="bg-[#fff] text-deep flex items-center gap-x-2 px-[28px] py-[12px] font-bold rounded-full"
          >
            <AiFillStar size={24} color="#F4A42B" />
            {5 - index}
          </button>
        ))}
      </div>
      <ReviewTestimonialItems />
    </div>
  );
}
