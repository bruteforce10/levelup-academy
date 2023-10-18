import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { categoryClass } from "@/lib/data";
import Heading from "./heading";

export default function CategorySection() {
  return (
    <section className="container px-8 mx-auto mt-20">
      <Heading
        tag={"Start Learning Today"}
        judul={
          <span>
            Kelas Online Design, Development,
            <br />
            Industries dan Freelancer
          </span>
        }
        align={"sm:text-start"}
      />
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 max-sm:gap-y-4 md:gap-4 ">
        {categoryClass.map((item, index) => (
          <div
            key={index}
            className="bg-[#fff] shadow-sm rounded-xl flex flex-col space-y-10 px-6 py-5 "
          >
            <Image src={item.icon} alt="icon" className="w-[75px]" />
            <div className="flex items-center w-full justify-between">
              <div>
                <h4 className="font-extrabold text-xl">{item.name}</h4>
                <p className="text-deep/60">{item.desc}</p>
              </div>
              <IoIosArrowForward size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
