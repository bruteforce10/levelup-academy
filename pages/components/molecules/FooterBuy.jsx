import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";
import { MyContext } from "@/lib/context/AppContext";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function FooterBuy({ price }) {
  const { activeSection } = MyContext();
  return (
    <div
      className={clsx(
        "fixed bottom-0 z-[99] justify-between items-center py-3 px-4 inset-x-0 hidden w-full transition-all bg-[#fff] shadow-md",
        activeSection === "buy" ? "hidden" : "max-md:flex"
      )}
    >
      <div className="space-y-1">
        <p className="text-2xl font-extrabold">{Currency(Discount(price))}</p>
        <p className="text-md text-red-500 line-through font-bold animate-pulse">
          {Currency(price)}
        </p>
      </div>
      <Link
        href={"#hookBuy"}
        className=" bg-prime px-4 py-2 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
      >
        Apply Now
      </Link>
    </div>
  );
}
