import useSectionView from "@/lib/hook";
import React from "react";

export default function DescriptionSection({ about }) {
  const { ref } = useSectionView("About", 1);
  return (
    <div
      id="About"
      ref={ref}
      className="scroll-mt-[180px] text-gray-800  text-lg font-normal  leading-loose"
      dangerouslySetInnerHTML={{ __html: about }}
    ></div>
  );
}
