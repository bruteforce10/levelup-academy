import Image from "next/image";
import React from "react";
import FeatureClass from "../atoms/FeatureClass";
import StarRating from "../atoms/StarRating";

export default function CardClass() {
  return (
    <div className=" rounded-3xl overflow-auto flex-auto w-full max-md:w-82  bg-[#fff]">
      <Image
        src="/img/dummy-class.webp"
        alt="class"
        className="w-full object-contain"
        width={320}
        height={320}
      />
      <div className="space-y-8 min-h-60 p-4">
        <div className="space-y-3">
          <div className="flex gap-1 items-center">
            <StarRating rating={4} />
            <p className="font-medium text-sm ">(36)</p>
          </div>
          <h4 className="font-extrabold text-xl line-clamp-2 hover:line-clamp-none cursor-pointer leading-normal ">
            Belajar membangun gedung bertingkat dengan Tekla Structures
          </h4>
          <FeatureClass sertifikat={true} user={227} level={0} />
        </div>
        <p className="text-lg font-medium">Rp.320.000</p>
      </div>
    </div>
  );
}
