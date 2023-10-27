import React from "react";
import Marquee from "react-fast-marquee";
import Heading from "./heading";
import { listSoftware, listSoftwareSecond } from "@/lib/data";
import CardSoftware from "./CardSoftware";

export default function ListSoftwareResult() {
  return (
    <section className="mt-20">
      <div className="container lg:px-8 px-4 mx-auto">
        <Heading
          tag={"Mastering Development Skills"}
          judul={
            <span>
              Level-Up Class Online. <br />
              Materi Paling Update.
            </span>
          }
          align={"max-sm:text-center"}
        />
      </div>
      <Marquee className=" pb-10  " pauseOnHover={true}>
        {listSoftware.map((item, index) => (
          <CardSoftware key={index} item={item} />
        ))}
      </Marquee>
      <Marquee className=" pb-10  " pauseOnHover={true} direction="right">
        {listSoftwareSecond.map((item, index) => (
          <CardSoftware key={index} item={item} />
        ))}
      </Marquee>
    </section>
  );
}
