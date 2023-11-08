import React, { useEffect, useState } from "react";
import Heading from "./heading";
import TestimoniItems from "./molecules/TestimoniItems";
import Marquee from "react-fast-marquee";
import CardTestimoni from "./CardTestimoni";
import Link from "next/link";
import { getComments } from "@/lib/service";
import StarRating from "./atoms/StarRating";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

export default function Testimoni() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getComments().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="bg-tersierbase h-fit max-lg:py-[60px]  lg:h-[600px] overflow-y-hidden mt-20">
      <section className=" lg:flex justify-center container lg:pl-8  px-4 mx-auto gap-8 pr-4  ">
        <div className="lg:w-5/12  lg:py-[100px] ">
          <Tippy theme="light" content="🎖️ Rating Google Level-Up Academy">
            <Link
              href={"https://maps.app.goo.gl/EwtKQVjjd4qnmh1r9"}
              target="_blank"
              className="flex text-white gap-x-2 max-md:origin-left max-md:scale-75 "
            >
              <p>5,0</p>
              <StarRating review={5} />
              <p className="underline underline-offset-2">45 ulasan google</p>
            </Link>
          </Tippy>
          <Heading
            judul={
              <span className="text-[#fff]">
                {" "}
                Pengalaman Luar Biasa di <br className="max-lg:block hidden" />{" "}
                Level-Up🚀
              </span>
            }
            align={"text-start"}
          />
          <p className="-mt-6 text-[#fff]">
            Kisah sukses students Level-Up Bagaimana dapat meningkatkan skills &
            membantu meraih tujuan Mereka
          </p>
          <div className="flex gap-4">
            <Link
              href="/kelas"
              className="px-8 mt-6 bg-prime border-4 border-tersierbase box-content hover:border-[#18123063] transition-all rounded-full text-white font-bold py-3"
            >
              Katalog Kelas
            </Link>
            <Link
              href="/testimonials"
              className="px-8 mt-6 bg-tersier border-4 border-tersierbase box-content hover:border-[#18123063] transition-all rounded-full text-deep font-bold py-3"
            >
              Share Ceritamu
            </Link>
          </div>
        </div>
        <div className="w-7/12 grid grid-cols-2 max-lg:hidden py-12 gap-6 ">
          <TestimoniItems isReverse={false} data={data} />
          <TestimoniItems isReverse={true} data={data} />
        </div>
      </section>
      <Marquee className="mt-12 lg:hidden " pauseOnHover={true}>
        {data.map((item, index) => (
          <CardTestimoni key={index} data={item} />
        ))}
      </Marquee>
    </div>
  );
}
