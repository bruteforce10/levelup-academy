import React from "react";

export default function CardSoftware({ item }) {
  return (
    <div
      className="flex px-3 gap-4 items-center border-2 border-white md:w-[300px] w-[200px] py-4 rounded-2xl mx-2  md:mx-4 bg-[#fff] shadow-sm  cursor-pointer
        hover:border-prime hover:border-2 transition-all box-border h-auto"
    >
      <div className="md:w-[72px] w-[60px]">{item.img}</div>
      <div>
        <h4 className="md:text-xl text-lg font-bold">{item.name}</h4>
        <p className="text-deep/60 max-md:text-sm">{item.desc}</p>
      </div>
    </div>
  );
}
