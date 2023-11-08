import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardMyCourse({ data }) {
  console.log(data);
  return (
    <div className="rounded-3xl bg-[#fff] overflow-hidden">
      <Image
        src={data?.coursePayment[0]?.gambar?.url}
        alt="placeholder"
        width={500}
        height={500}
      />
      <div className="p-4 space-y-8">
        <div className="space-y-1">
          <Link
            href={`/kelas/`}
            className="font-extrabold text-xl line-clamp-2 hover:line-clamp-none cursor-pointer"
          >
            {data?.coursePayment[0]?.judul}
          </Link>
          <p className="text-md font-light text-opacity-70 text-deep">
            Class Recording
          </p>
        </div>
        {data?.statusPayment === "paymentPending" ? (
          <div className="flex items-center gap-x-2 text-[#FFC947] font-medium">
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
    </div>
  );
}
