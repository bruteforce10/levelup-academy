import React, { useEffect, useState } from "react";
import Heading from "./heading";
import CardClass from "./molecules/CardClass";
import { MyContext } from "@/lib/context/AppContext";

export default function ClassSection() {
  const { dataClass } = MyContext();
  return (
    <section className="container lg:px-8 px-4 mx-auto mt-20">
      <Heading
        tag={"Become Freelancer"}
        judul={
          <span>
            Kelas Terfavorit <br /> Berbasis Industri.
          </span>
        }
        align={"max-sm:text-center"}
      />
      <div className="w-full overflow-x-scroll pb-8">
        <div className="gap-6 flex ">
          {dataClass.map((item, index) => (
            <CardClass key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
