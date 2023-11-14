import Image from "next/image";
import React from "react";

export default function AuthorCourse({ author }) {
  return (
    <div className="flex gap-x-4 items-center bg-[#fff] p-4 max-sm:w-full w-[350px] rounded-3xl">
      <Image
        src={author?.image?.url}
        alt="author"
        width={80}
        height={80}
        className="p-1 border-[1.5px] w-16 h-16 object-cover border-prime rounded-full"
      />
      <div className="space-y-2">
        <p className="text-xl font-bold">{author?.author}</p>
        <p className="text-sm font-light">{author?.label}</p>
      </div>
    </div>
  );
}
