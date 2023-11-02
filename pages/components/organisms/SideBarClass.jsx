import { MyContext } from "@/lib/context/AppContext";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function SideBarClass() {
  const { activeSection } = MyContext();
  const navList = [
    "About",
    "Gallery",
    "Main Topic",
    "Tools",
    "Lessons",
    "Reviews",
  ];

  return (
    <div className="min-w-[200px] max-md:hidden sticky top-20 h-fit max-w-[500px] py-[38px] px-[32px] bg-[#fff] rounded-2xl flex-col justify-start items-start gap-[34px] inline-flex">
      {navList.map((item, index) => (
        <Link
          href={`#${item}`}
          key={index}
          className={clsx(
            "text-black text-opacity-40 text-md font-semibold ",
            activeSection === item ? "text-opacity-100" : "text-opacity-40"
          )}
        >
          {item}
        </Link>
      ))}
      <Link
        href={"#buy"}
        className="px-[12px] w-full cursor-pointer py-[9px] bg-blue-700 rounded-[26px] justify-center items-start inline-flex"
      >
        <div className="text-white text-md font-bold  ">Beli Kelas</div>
      </Link>
    </div>
  );
}
