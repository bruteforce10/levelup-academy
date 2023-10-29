import React from "react";
import Heading from "./heading";
import CardClass from "./molecules/CardClass";

export default function ClassSection() {
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
        <CardClass />
        <CardClass />
        <CardClass />
        <CardClass />
      </div>
    </section>
  );
}
