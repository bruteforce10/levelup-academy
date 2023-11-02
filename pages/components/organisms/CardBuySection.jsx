import useSectionView from "@/lib/hook";
import Image from "next/image";
import React from "react";

export default function CardBuySection() {
  const { ref } = useSectionView("buy", 1);
  return (
    <div
      id="buy"
      className="space-y-6 bg-[#fff] rounded-2xl scroll-mt-[200px] px-[38px] py-8 w-[400px] mx-auto"
    >
      <Image src={"/img/icon-disc.svg"} alt="discount" width={70} height={70} />
      <div className="space-y-2">
        <div className="text-gray-800 text-lg font-normal ">Selamanya</div>
        <div className="text-red-500 text-xl font-bold  line-through animate-pulse ">
          Rp 400,000
        </div>
        <div className="text-black text-3xl font-extrabold font-['Plus Jakarta Sans'] ">
          Rp 50,000
        </div>
      </div>
      <div
        ref={ref}
        className="  text-black text-lg font-normal leading-relaxed"
      >
        Miliki kelas Premium secara permanen dan bangun sebuah projek nyata
      </div>
      <hr />
      <ul className="space-y-4">
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Akses selamanya
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Video Tutorial, Source Code, dan Materi (pdf)
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Premium rewards
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Sertifikat kelulusan
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Free update materi selama 4 bulan
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Free akses kelas Freemium
        </li>
      </ul>
      <button className="px-6 bg-prime rounded-full text-[#fff] w-full hover:scale-105 transition-all  font-bold py-3">
        Beli Kelas
      </button>
    </div>
  );
}
