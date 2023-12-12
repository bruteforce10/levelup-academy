import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function CallSection() {
  return (
    <div className="container  place-content-start lg:px-8 px-4 mx-auto relative mt-20 h-fit ">
      <div className="flex items-center max-md:flex-wrap justify-center max-md:gap-y-8 md:gap-x-16 relative z-30">
        <Image
          src="/img/call-center.png"
          alt="call-center"
          width={300}
          height={300}
        />
        <div className="space-y-6 md:mt-[120px] max-md:text-center max-md:pb-20">
          <h5 className="font-extrabold xl:text-4xl text-3xl">
            Bingung dan ingin bertanya?
          </h5>
          <p className="leading-relaxed text-lg w-[350px] lg:w-[500px] mx-auto max-sm:w-[320px]">
            Ngga perlu sungkan, hehe. Konsultasi-kan dulu ke kami aja lewat
            WhatsApp ya.
          </p>
          <Link
            href={"https://api.whatsapp.com/send?phone=6285602883970"}
            target="_blank"
            className="px-8 mt-6 bg-second border-4 max-lg:mx-auto w-fit   flex gap-2 border-[#fff] box-content hover:border-[#6de0b6] transition-all rounded-full text-white font-bold py-3"
          >
            <span>
              <AiOutlineWhatsApp size={24} />
            </span>{" "}
            Whatsapp
          </Link>
        </div>
      </div>
      <div className="bg-[#fff] xl:w-[80%] w-full max-lg:w-[96%] h-[300px] max-md:h-[500px]  absolute z-[1] bottom-0 rounded-3xl inset-x-0 mx-auto"></div>
    </div>
  );
}
