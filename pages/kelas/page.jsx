import Image from "next/image";
import React from "react";

export default function Kelas() {
  return (
    <div className="container px-8 mx-auto mt-20">
      <div className="flex justify-between">
        <div>
          <h2>Kelas Online Design Real Estate Mobile with Figma</h2>
          <p>Learn How to Make Mobile Design</p>
        </div>
        <div>
          <Image src="/sample.jpg" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
