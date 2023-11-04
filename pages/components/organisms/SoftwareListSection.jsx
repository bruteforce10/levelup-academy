import useSectionView from "@/lib/hook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SoftwareListSection({ software }) {
  const { ref } = useSectionView("Tools", 1);
  return (
    <div
      className="flex gap-6 max-md:flex-col scroll-mt-[180px]"
      ref={ref}
      id="Tools"
    >
      {software.map((item) => (
        <div
          key={item.software}
          className="bg-[#fff] w-[250px] max-md:w-full px-[38px] max-md:flex max-md:items-center  max-md:gap-x-8  py-[32px] md:space-y-6 rounded-2xl"
        >
          <Image
            src={`/icon/${item.softwareName}.svg`}
            alt={item.softwareName}
            width={60}
            height={60}
          />
          <div>
            <h5 className="text-gray-800 text-xl font-bold">{item.software}</h5>
            <p className="text-gray-800 text-opacity-50 text-lg font-normal  leading-loose">
              {item.free ? "Software Gratis" : "Software Berbayar"}
            </p>
          </div>
          <Link
            href={item.link}
            target="_blank"
            className="bg-slate-200 block max-md:hidden rounded-[18px]  px-[16px] py-[12px] text-lg font-bold"
          >
            Download Now
          </Link>
        </div>
      ))}
    </div>
  );
}
