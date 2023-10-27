import React from "react";
import Heading from "./heading";
import { faqQuest } from "@/lib/data";

export default function Faq() {
  return (
    <section className="container lg:px-8 px-4 mx-auto mt-20 ">
      <Heading
        tag={"Tanya Mimin Level-Up"}
        judul={
          <span>
            Frequently Asked <br /> Questions 😊
          </span>
        }
        align={"text-center"}
      />

      <div className="grid md:grid-cols-2 gap-6 gridcols-1">
        {faqQuest.map((item, index) => (
          <div className="collapse collapse-plus bg-base-200 h-fit" key={index}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
