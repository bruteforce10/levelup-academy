import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({ rating }) {
  return (
    <div className="flex ">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <AiFillStar size={24} color="#F4A42B" />
          ) : (
            <AiOutlineStar size={24} color="#F4A42B" />
          )}
        </span>
      ))}
    </div>
  );
}
