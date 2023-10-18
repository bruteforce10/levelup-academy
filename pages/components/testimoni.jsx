import React from "react";
import Heading from "./heading";
import TestimoniItems from "./molecules/TestimoniItems";

export default function Testimoni() {
  return (
    <div className="bg-tersierbase h-[600px] overflow-hidden">
      <section className=" flex justify-center container pl-8 mx-auto gap-8 pr-4  ">
        <div className="w-5/12 py-[100px] mt-20">
          <Heading
            tag={"Trusted By 2.9K+ Students"}
            judul={
              <span className="text-[#fff]">
                {" "}
                Pengalaman Luar Biasa di Level-Up🚀
              </span>
            }
            align={"sm:text-start"}
          />
          <p className="-mt-6 text-[#fff]">
            Kisah sukses students Level-Up Bagaimana dapat meningkatkan Skills &
            membantu meraih tujuan Mereka
          </p>
          <button className="text-[#fff]">Selengkapnya</button>
        </div>
        <div className="w-7/12 grid grid-cols-2  py-12 space-x-6 ">
          <TestimoniItems isReverse={false} />
          <TestimoniItems isReverse={true} />
        </div>
      </section>
    </div>
  );
}
