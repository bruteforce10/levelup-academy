import useSectionView from "@/lib/hook";
import Image from "next/image";
import React from "react";

export default function KeyPointSection({ keyPoints }) {
  const { ref } = useSectionView("Main Topic", 1);

  return (
    <div id="Main Topic" className="scroll-mt-[130px]">
      <ul className="flex flex-wrap gap-8" ref={ref}>
        {keyPoints &&
          keyPoints.map((item, index) => (
            <li
              className="flex items-start gap-x-3 w-5/12 max-lg:w-full"
              key={index}
            >
              <Image
                src="/icon/checklist.svg"
                width={28}
                height={28}
                alt="check"
              />{" "}
              <div className="-mt-1">{item}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
