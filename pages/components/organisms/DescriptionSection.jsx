import useSectionView from "@/lib/hook";
import React from "react";

export default function DescriptionSection() {
  const { ref } = useSectionView("About", 1);
  return (
    <div
      id="About"
      ref={ref}
      className="scroll-mt-[180px] text-gray-800 text-lg font-normal  leading-loose"
    >
      Faktor pertama yang menjadi alasan pengguna menggunakan aplikasi
      e-commerce adalah tampilan antarmuka (UI) yang menarik. UI yang dirancang
      dengan baik dapat menanamkan kepercayaan pada produk yang ditawarkan, yang
      nantinya berpengaruh penting terhadap kelancaran bisnis produk tersebut.
      Kelas ini akan membahas proses pengembangan UI pada sisi Front-End secara
      lengkap, dari mendesain UI dengan Adobe XD sampai slicing desain ke
      Flutter.
    </div>
  );
}
