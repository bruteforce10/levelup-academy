import Image from "next/image";
import React from "react";
import Heading from "../components/heading";
import CardClass from "../components/molecules/CardClass";
import { MyContext } from "@/lib/context/AppContext";
import Head from "next/head";

export default function FreshSale() {
  const { dataClass } = MyContext();
  return (
    <section className="container lg:px-8 px-4 -mt-16 mx-auto">
      <Head>
        <title>Promo Grand Opening Kelas Online Level-Up Academy</title>
      </Head>
      <div className="mt-32 space-y-6 max-sm:mt-32">
        <Image
          src="/img/giatBelajar.png"
          width={400}
          height={300}
          alt="fresh-sale"
          className="mx-auto"
        />
        <p className="w-[300px] text-center mx-auto">
          Belajar dengan mentor expert dengan harga yang lebih terjangkau 😎
        </p>
      </div>
      <div className="mt-12">
        <Heading
          tag={"Best Sale Ever"}
          judul={
            <span>
              Belajar Jadi Lebih
              <br />
              Mudah & Asyik
            </span>
          }
          align={"sm:text-start max-sm:text-center"}
        />
        <div className="flex mt-14 max-md:mt-0 gap-6 flex-wrap">
          {dataClass.length <= 0 && (
            <div>
              <p className="text-lg">Belum ada Promo</p>
            </div>
          )}
          {dataClass &&
            dataClass.map((item, index) => (
              <CardClass key={index} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
