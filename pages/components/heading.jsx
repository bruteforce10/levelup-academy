import React from "react";

export default function Heading({ tag, judul, align }) {
  return (
    <div className={`space-y-2  mb-10 ${align}`}>
      <h4 className="font-medium sm:text-xl text-md text-second">{tag}</h4>
      <h3
        className="sm:text-4xl  tracking-wider leading-normal text-2xl"
        style={{ lineHeight: "1.5", marginBottom: "10px" }}
      >
        {judul}
      </h3>
    </div>
  );
}
