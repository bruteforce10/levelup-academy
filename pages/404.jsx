import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Costum404() {
  return (
    <div className="mx-auto w-full text-center">
      <Image
        src={"/img/404.png"}
        alt={"404"}
        width={500}
        height={300}
        className="mx-auto"
      />
      <p className="text-lg text-center">
        Maaf Halaman yang anda akses tidak ditemukan
      </p>
      <Link
        href={"/"}
        type="submit"
        className="bg-prime mt-6 px-8 py-3 rounded-full text-md font-extrabold text-white border-4 border-white
  hover:border-[#a1b7e7] transition-all  "
      >
        Back to Home
      </Link>
    </div>
  );
}
