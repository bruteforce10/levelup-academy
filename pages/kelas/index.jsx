import React from "react";
import Heading from "../components/heading";
import SubHeading from "../components/atoms/SubHeading";
import Image from "next/image";
import { categoryClass } from "@/lib/data";
import CardClass from "../components/molecules/CardClass";
import ListClassSection from "./ListClassSection";

export default function KelasOnline() {
  return (
    <div className="px-4 container mt-[60px] mx-auto h-[3000px] ">
      <div>
        <Heading
          tag={"#LevelUpYourCareer"}
          judul={<span>Katalog Kelas</span>}
          align={"sm:text-start"}
        />
        <p className="text-lg font-medium -mt-6 leading-relaxed">
          Level-Up Academy menyediakan Kelas yang sesuai <br /> bidang kamu
          minati dan dengan kelas ramah untuk pemula
        </p>
      </div>
      <div className="mt-14 space-y-6 ">
        <SubHeading>Popular Category</SubHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  max-sm:gap-y-4 md:gap-4 ">
          {categoryClass.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff] shadow-sm rounded-3xl flex cursor-pointer  items-center justify-start gap-x-6  px-6 py-5 "
            >
              <Image src={item.icon} alt="icon" className="w-[75px]" />
              <h4 className="font-extrabold text-xl">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 space-y-6">
        <SubHeading>Terbaru Rilis</SubHeading>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <CardClass />
          <CardClass />
          <CardClass />
          <CardClass />
        </div>
      </div>
      <ListClassSection />
    </div>
  );
}
