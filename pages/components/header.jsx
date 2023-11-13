import React from "react";
import HeaderImg from "@/public/img/header.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[url('../public/img/background.png')] bg-contain bg-top h-fit w-full">
      <div className="container  lg:px-8 mx-auto px-4 ">
        <main className=" mt-[-300px] text-white   ">
          <div className="sm:pt-[380px] pt-[350px] ">
            <div className="flex gap-4  max-lg:flex-wrap ">
              <h1 className=" sm:leading-relaxed leading-normal tracking-wide md:leading-[150%] md:text-6xl max-sm:text-center text-5xl -mt-4 lg:w-8/12 w-full   ">
                Ayo{" "}
                <span className="bg-search max-md:bg-none pb-4">
                  Tingkatkan
                </span>{" "}
                Keahlian Kamu Disini!
              </h1>
              <div className=" lg:w-4/12 w-full space-y-4 max-sm:pb-14">
                <p className=" text-sm leading-relaxed text-white/80 max-sm:text-center ">
                  Bersiaplah untuk dunia kerja dengan terus belajar dan berlatih
                  konsisten. Pilih kelas sesuai minat, tingkatkan keterampilan
                  Anda.
                  <span className="font-bold"> #BelajarKapanSaja</span>
                </p>
                <div className="grid grid-cols-2  items-center  sm:w-[400px]  gap-4 max-sm:justify-center max-sm:gap-6 max-sm:mx-auto ">
                  <Link
                    href="/auth/register"
                    className="px-6 max-sm:px-4 bg-second whitespace-nowrap block mx-auto  rounded-full text-deep font-bold py-3"
                  >
                    Daftar Sekarang!
                  </Link>
                  <Link href="/kelas" className="text-white ">
                    <span className="font-medium underline whitespace-nowrap block   underline-offset-2">
                      Lihat Seluruh Kelas ✨
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full lg:h-[460px] rounded-[24px] overflow-hidden max-sm:hidden">
              <Image
                src={HeaderImg}
                alt="header"
                className="w-full h-auto lg:mt-[-120px]"
                quality={95}
                priority
              />
            </div>
            <div className=" mt-10 flex max-lg:justify-between justify-center pb-10 max-sm:hidden ">
              <div className="space-y-2 w-3/12 ">
                <h3 className="text-6xl tracking-wider">1.3K+</h3>
                <p className="text-lg text-white/60">Akses Terjual </p>
              </div>
              <div className="space-y-2 w-3/12  text-center border-white border-x-2 max-lg:hidden  ">
                <h3 className="text-6xl  tracking-wider ">7K+</h3>
                <p className="text-lg text-white/60">Sukses Stories</p>
              </div>
              <div className="space-y-2 w-3/12 max-lg:w-4/12 text-center border-white border-r-2 max-lg:border-x-2">
                <h3 className="text-6xl  tracking-wider">127+</h3>
                <p className="text-lg text-white/60">Materi</p>
              </div>
              <div className="space-y-2 w-3/12  text-center ">
                <h3 className="text-6xl tracking-wider ">Free</h3>
                <p className="text-lg text-white/60">Update Materi</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
