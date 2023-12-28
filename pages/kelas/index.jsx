import React, { useEffect, useState } from "react";
import Heading from "../components/heading";
import SubHeading from "../components/atoms/SubHeading";
import Image from "next/image";
import { categoryClass } from "@/lib/data";
import CardClass from "../components/molecules/CardClass";
import ListClassSection from "./ListClassSection";
import { MyContext } from "@/lib/context/AppContext";
import Link from "next/link";
import Head from "next/head";
import { getBundle } from "@/lib/service";
import CardBundle from "../components/molecules/CardBundle";
import CallSection from "../components/CallSection";

export default function KelasOnline() {
  const { dataClass, dataFilter } = MyContext();
  const [dataBundle, setBundle] = useState([]);
  const [classList, setClassList] = useState(dataClass);
  const waktuDiskon = new Date();
  waktuDiskon.setDate(waktuDiskon.getDate() - 7);

  useEffect(() => {
    if (dataClass) {
      const classNew = dataClass.filter((item) => {
        return new Date(item.createdAt).getTime() > waktuDiskon.getTime();
      });
      setClassList(classNew);
    }
    getBundle().then((res) => {
      setBundle(res.bundles);
    });
  }, [dataClass]);

  return (
    <div className="px-4 container mt-[60px] mx-auto">
      <Head>
        <title>Katalog Kelas - Level-Up Academy</title>
      </Head>
      <div>
        <Heading
          tag={"#LevelUpYourCareer"}
          judul={<span>Katalog Kelas</span>}
          align={"max-sm:text-center"}
        />
        <p className="md:text-lg font-medium -mt-6 max-sm:text-center leading-relaxed">
          Level-Up Academy menyediakan Kelas yang sesuai{" "}
          <br className="max-md:hidden" /> bidang kamu minati dan dengan kelas
          ramah untuk pemula
        </p>
      </div>
      <div className="mt-14 space-y-6 ">
        <SubHeading>Popular Category</SubHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  max-sm:gap-y-4 md:gap-4 ">
          {categoryClass.map((item, index) => (
            <Link
              href={`/kelas/category?category=${item.id}`}
              key={index}
              className="bg-[#fff] shadow-sm rounded-3xl flex cursor-pointer  items-center justify-start gap-x-6  px-6 py-5 "
            >
              <Image src={item.icon} alt="icon" className="w-[75px]" />
              <h4 className="font-extrabold text-xl">{item.name}</h4>
            </Link>
          ))}
        </div>
      </div>
      <div className="max-sm:mt-24 mt-14 space-y-6 ">
        <SubHeading>
          Promo Bundle Kelas{" "}
          <span className="py-1 px-2 text-sm rounded-3xl ml-1  bg-[#F4A42B] ">
            New
          </span>
        </SubHeading>
        <div className="w-full overflow-x-scroll pb-8">
          <div className="gap-6 flex ">
            {dataBundle &&
              dataBundle.map((item, index) => (
                <CardBundle key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
      {classList.length > 0 && (
        <div className="mt-14 space-y-6 max-md:hidden">
          <SubHeading>Terbaru Rilis</SubHeading>
          <div className="w-full overflow-x-scroll pb-8">
            <div className="gap-6 flex ">
              {dataClass &&
                classList.map((item, index) => (
                  <CardClass key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
      )}
      <ListClassSection />
    </div>
  );
}
