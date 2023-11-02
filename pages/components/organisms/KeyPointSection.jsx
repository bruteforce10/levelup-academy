import useSectionView from "@/lib/hook";
import Image from "next/image";
import React from "react";

export default function KeyPointSection() {
  const { ref } = useSectionView("Main Topic", 1);
  const data = [
    "Mempelajari slicing hasil desain dengan HTML,CSS dan Bootstrap",
    "Membuat aplikasi marketplace (user sebagai penjual dan pembeli)",
    "Mengintegrasikan Midtrans Payment Gateway sebagai metode pembayaran",
    "Mempelajari deployment dan configuration aplikasi ke DigitalOcean",
    "Membangun aplikasi dengan PHP dan Framework Laravel",
  ];

  return (
    <div id="Main Topic" className="scroll-mt-[130px]">
      <ul className="flex flex-wrap gap-8" ref={ref}>
        {data.map((item, index) => (
          <li
            className="flex items-center gap-x-3 w-5/12 max-lg:w-full"
            key={index}
          >
            <Image
              src="/icon/checklist.svg"
              width={28}
              height={28}
              alt="check"
            />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
