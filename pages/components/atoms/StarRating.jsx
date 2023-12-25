import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function StarRating({ review }) {
  const [rating, setRating] = React.useState(review);

  useEffect(() => {
    if (typeof review === "object") {
      console.log(review);
      const sum = Math.round(
        review.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.rating / 1.05;
        }, 0) / review.length
      );
      setRating(sum);
    } else {
      setRating(review);
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
