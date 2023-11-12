import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { feature } from "@/lib/data";

export default function FeatureSection() {
  return (
    <section
      id="benefit"
      className="container scroll-mt-[100px] lg:px-8 px-4 mx-auto mt-20"
    >
      <div className="flex gap-12 max-lg:flex-wrap">
        <Image
          src="/img/feature.png"
          alt="feature"
          className="rounded-[47px] object-cover"
          width={650}
          height={500}
        />
        <div>
          <Heading
            tag={"You Deserve Better Career"}
            judul={
              <span>
                Kenapa Kamu Harus
                <br />
                Belajar Di Level Up
              </span>
            }
            align={"sm:text-start"}
          />
          <ul className="-mt-5 space-y-4">
            {feature.map((item, index) => (
              <li
                className="flex items-center gap-x-4 font-semibold"
                key={index}
              >
                <Image
                  src="/icon/checklist.svg"
                  width={28}
                  height={28}
                  alt="check"
                />{" "}
                {item}
              </li>
            ))}
          </ul>
          <button className="px-8 mt-6 bg-prime border-4 border-white box-content hover:border-[#99b7f0] transition-all rounded-full text-white font-bold py-3">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}
