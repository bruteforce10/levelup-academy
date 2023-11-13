import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { categoryClass } from "@/lib/data";
import Heading from "./heading";
import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="container lg:px-8 px-4 mx-auto mt-20">
      <Heading
        tag={"Start Learning Today"}
        judul={
          <span>
            Kelas Online Design, Development,
            <br className="max-sm:hidden" />
            Industries dan Freelancer
          </span>
        }
        align={"sm:text-start max-sm:text-center"}
      />
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 max-sm:gap-y-4 md:gap-4 ">
        {categoryClass.map((item, index) => (
          <Link
            href={`/kelas/category?category=${item.id}`}
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
          </Link>
        ))}
      </div>
    </section>
  );
}
