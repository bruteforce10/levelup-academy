import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardMyCourse({ data }) {
  return (
    <Link
      href={
        data?.statusPayment === "paymentPending"
          ? "/dashboard/transactions"
          : `/course?class=${data?.id}`
      }
      className="rounded-3xl block bg-[#fff] overflow-hidden"
    >
      <Image
        src={data?.gambar?.url}
        alt="placeholder"
        width={500}
        className="w-full"
        height={500}
      />
      <div className="p-4 space-y-8">
        <div className="space-y-1">
          <div className="font-extrabold text-xl line-clamp-2 hover:line-clamp-none cursor-pointer">
            {data?.judul}
          </div>
          <p className="text-md font-light text-opacity-70 text-deep">
            Class Recording
          </p>
        </div>
        {data?.statusPayment === "paymentPending" ? (
          <div className="flex items-center gap-x-2 text-[#FFC947] font-medium animate-pulse whitespace-nowrap">
            <Image src="/icon/pending.svg" width={24} height={24} alt="check" />
            Menunggu Pembayaran
          </div>
        ) : (
          <div className="flex items-center gap-x-3 font-medium">
            <Image
              src="/icon/checklist-green.svg"
              width={24}
              height={24}
              alt="check"
            />
            Akses Selamanya
          </div>
        )}
      </div>
    </Link>
  );
}
