import Image from "next/image";
import React from "react";

export default function Costum404() {
  return (
    <div className="mx-auto w-full text-center">
      <Image
        src={"/img/404.png"}
        alt={"404"}
        width={500}
        height={300}
        className="mx-auto"
      />
      <h4 className="text-3xl font-extrabold">404 - Page Not Found</h4>
    </div>
  );
}
