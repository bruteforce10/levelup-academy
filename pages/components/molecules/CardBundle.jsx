import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";

export default function CardBundle({ data }) {
  console.log(data);
  return (
    <Link
      href={`/bundle/${data?.slug}`}
      className=" rounded-3xl overflow-hidden flex-shrink-0 max-lg:w-[250px] lg:w-[280px] max-sm:w-full  bg-[#fff]"
    >
      <Image
        src={data?.coverGambar?.url}
        alt="class"
        className="w-full object-cover"
        width={320}
        height={320}
      />
      <div className="space-y-3  p-4">
        <h4 className="font-extrabold text-xl line-clamp-2 hover:line-clamp-none leading-normal ">
          {data?.secondJudul}
        </h4>
        <div className="flex gap-x-2 items-center">
          <div className="text-red-500 text-sm font-bold  line-through animate-pulse ">
            {Currency(data?.harga)}
          </div>
          <p className="text-lg font-medium">{Discount(data?.harga)}</p>
        </div>
      </div>
    </Link>
  );
}
