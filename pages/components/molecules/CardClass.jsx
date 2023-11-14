import Image from "next/image";
import React from "react";
import FeatureClass from "../atoms/FeatureClass";
import StarRating from "../atoms/StarRating";
import Link from "next/link";
import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";

export default function CardClass({ data }) {
  return (
    <div className=" rounded-3xl overflow-hidden flex-shrink-0 max-lg:w-[250px] lg:w-[280px] max-sm:w-full  bg-[#fff]">
      <Image
        src={data?.gambar?.url}
        alt="class"
        className="w-full md:h-[12rem] md:object-cover object-contain"
        width={320}
        height={320}
      />
      <div className="space-y-8 min-h-60 p-4">
        <div className="space-y-3">
          <div className="flex gap-1 items-center">
            <StarRating review={data?.reviews} />
            <p className="font-medium text-sm ">
              ({data?.reviews.length + 12})
            </p>
          </div>
          <Link
            href={`/kelas/${data?.id}`}
            className="font-extrabold text-xl line-clamp-2 hover:line-clamp-none cursor-pointer leading-normal "
          >
            {data?.judul}
          </Link>
          <FeatureClass
            sertifikat={data?.sertifikat}
            user={43}
            level={data?.level}
          />
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="text-red-500 text-sm font-bold  line-through animate-pulse ">
            {Currency(data?.price)}
          </div>
          <p className="text-lg font-medium">{Discount(data?.price)}</p>
        </div>
      </div>
    </div>
  );
}
