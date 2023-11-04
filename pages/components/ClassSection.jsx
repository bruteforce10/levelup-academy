import React, { useEffect, useState } from "react";
import Heading from "./heading";
import CardClass from "./molecules/CardClass";
import { MyContext } from "@/lib/context/AppContext";

export default function ClassSection() {
  const { dataClass } = MyContext();
  return (
    <section className="container lg:px-8 px-4 mx-auto mt-20 ">
      <Heading
        tag={"Become Freelancer"}
        judul={
          <span>
            Kelas Terfavorit <br /> Berbasis Industri.
          </span>
        }
        align={"max-sm:text-start"}
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {dataClass.map((item, index) => (
          <CardClass key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
