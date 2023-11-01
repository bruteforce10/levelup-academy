import Image from "next/image";
import React from "react";

export default function BoxChecklist({ children }) {
  return (
    <div className=" h-12 px-4 py-2 bg-[#E1FFF4] rounded-2xl justify-center items-center gap-2 inline-flex">
      <Image
        src="/icon/checklist-only.svg"
        alt="checklist"
        height={20}
        width={20}
      />
      <div className="text-[#439879] text-sm font-normal  leading-loose">
        {children}
      </div>
    </div>
  );
}
