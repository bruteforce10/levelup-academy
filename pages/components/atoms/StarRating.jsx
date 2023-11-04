import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({ review }) {
  const [rating, setRating] = React.useState(0);
  useEffect(() => {
    if (review) {
      const sum = Math.round(
        review.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.rating;
        }, 0) / review.length
      );
      setRating(sum);
    }
  }, [review]);

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
