import useSectionView from "@/lib/hook";
import Image from "next/image";
import React from "react";

export default function SoftwareListSection() {
  const { ref } = useSectionView("Tools", 1);
  return (
    <div
      className="flex gap-6 max-md:flex-col scroll-mt-[180px]"
      ref={ref}
      id="Tools"
    >
      <div className="bg-[#fff] w-[250px] max-md:w-full px-[38px] max-md:flex max-md:items-center  max-md:gap-x-8  py-[32px] md:space-y-6 rounded-2xl">
        <Image src={"/icon/autocad.svg"} alt="autocad" width={60} height={60} />
        <div>
          <h5 className="text-gray-800 text-xl font-bold">Autocad</h5>
          <p className="text-gray-800 text-opacity-50 text-lg font-normal  leading-loose">
            Software Gratis
          </p>
        </div>
        <button className="bg-slate-200 max-md:hidden rounded-[18px]  px-[16px] py-[12px] text-lg font-bold">
          Download Now
        </button>
      </div>
      <div className="bg-[#fff] w-[250px] max-md:w-full px-[38px] max-md:flex max-md:items-center  max-md:gap-x-8  py-[32px] md:space-y-6 rounded-2xl">
        <Image src={"/icon/autocad.svg"} alt="autocad" width={60} height={60} />
        <div>
          <h5 className="text-gray-800 text-xl font-bold">Autocad</h5>
          <p className="text-gray-800 text-opacity-50 text-lg font-normal  leading-loose">
            Software Gratis
          </p>
        </div>
        <button className="bg-slate-200 max-md:hidden rounded-[18px]  px-[16px] py-[12px] text-lg font-bold">
          Download Now
        </button>
      </div>
    </div>
  );
}
