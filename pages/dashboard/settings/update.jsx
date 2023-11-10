import SubHeading from "@/pages/components/atoms/SubHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Update() {
  return (
    <div className="bg-white flex justify-center flex-col gap-12 items-center mt-8">
      <Image
        src="/icon/success_update.svg"
        width={550}
        height={550}
        alt="update-profile"
      />
      <div className="space-y-6">
        <SubHeading size="4xl">Sukses Diperbarui</SubHeading>
        <p className="text-md font-light max-w-xs text-center">
          Lanjutkan pembelajaran Anda dengan mentor yang berpengalaman di
          bidangnya
        </p>
        <Link
          href={"/dashboard/myclass"}
          className="bg-prime block text-center mt-4 px-28 py-3 rounded-full text-md  font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
