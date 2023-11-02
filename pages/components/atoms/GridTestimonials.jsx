import Image from "next/image";
import React from "react";

export default function GridTestimonials(data) {
  return (
    <div className=" bg-[#fff] rounded-2xl  cursor-pointer  w-full p-6 flex justify-between flex-col  h-full">
      <div className="space-y-6">
        <h4 className="text-xl font-extrabold">{data?.data?.title}</h4>
        <p className="text-sm">{data?.data?.description}</p>
      </div>
      <div className="flex gap-2 items-center">
        {!data?.data?.account?.image ? (
          <Image src="/icon/profile.svg" alt="avatar" width={40} height={40} />
        ) : (
          <Image
            src={data?.data?.account?.image?.url}
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
        )}
        <div className="flex flex-col space-y-1 ">
          <p className="text-xs font-extrabold">{data?.data?.account?.name}</p>
          <span className="text-xs text-light opacity-60">
            {data?.data?.account?.goals || "Lifetime Learner"}
          </span>
        </div>
      </div>
    </div>
  );
}
