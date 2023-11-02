import Image from "next/image";
import React from "react";

export default function CardTestimoni({ data }) {
  return (
    <div className=" bg-[#fff] rounded-2xl mx-2 cursor-pointer flex flex-col justify-between  space-y-4 p-4 h-[230px]  w-[300px]">
      <div className="space-y-6">
        <h4 className="text-xl font-extrabold">{data?.title}</h4>
        <p className="text-sm">{data?.description}</p>
      </div>
      <div className="flex gap-2 items-center">
        {!data?.account?.image ? (
          <Image src="/icon/profile.svg" alt="avatar" width={40} height={40} />
        ) : (
          <Image
            src={data?.account?.image?.url}
            alt="avatar"
            width={40}
            className="rounded-full w-10 h-10 object-cover"
            height={40}
          />
        )}
        <div className="flex flex-col space-y-1 items-center\">
          <p className="text-xs font-extrabold">{data?.account?.name}</p>
          <span className="text-xs text-light opacity-60">
            {data?.account?.goals || "Lifetime Learner"}
          </span>
        </div>
      </div>
    </div>
  );
}
