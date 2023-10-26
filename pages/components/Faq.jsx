import React from "react";
import Heading from "./heading";

export default function Faq() {
  return (
    <section className="container px-8 mx-auto mt-20 mb-[2000px]">
      <Heading
        tag={"Tanya Mimin Level-Up"}
        judul={
          <span>
            Frequently Asked <br /> Questions 😊
          </span>
        }
        align={"sm:text-center"}
      />

      <div className="grid grid-cols-2 gap-12">
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </section>
  );
}
