import Image from "next/image";
import React from "react";
import BoxChecklist from "../components/atoms/BoxChecklist";
import SubHeading from "../components/atoms/SubHeading";
import SideBarClass from "../components/organisms/SideBarClass";

export default function Preview() {
  return (
    <div className="px-4 container mt-[60px] mx-auto ">
      <section className="flex  gap-8 justify-between max-md:flex-wrap-reverse ">
        <div className="space-y-6 w-7/12 max-md:w-full">
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-2">
              <Image src="/icon/globe.svg" alt="globe" height={24} width={24} />
              <p className="text-lg max-xl:text-sm font-medium">
                Release date October 2022
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icon/analyse.svg"
                alt="globe"
                height={24}
                width={24}
              />
              <p className="text-lg max-xl:text-sm font-medium">
                Last updated September 2023
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className=" text-gray-800 text-4xl font-bold  leading-[46.80px]">
              Kelas Online Design Real Estate Mobile with Figma
            </h2>
            <p className=" text-gray-800 text-lg max-xl:text-md font-normal leading-loose">
              Persiapan skillmu untuk menjadi seorang Cyber Security Specialist
              / Security Pentester dengan mengikuti paket kursus ini. Kamu akan
              belajar melalui studi kasus dan proyek yang bisa kamu praktikan.
            </p>
          </div>
          <div className="flex h-12 gap-4 flex-wrap">
            <BoxChecklist>
              <span className="font-bold mr-1">40</span>
              Member Enrolled
            </BoxChecklist>
            <BoxChecklist>Dapat Sertifikat</BoxChecklist>
            <BoxChecklist>Cocok untuk pemula</BoxChecklist>
          </div>
        </div>
        <div className="w-5/12 flex justify-end max-md:justify-start max-md:w-full">
          <Image
            className="rounded-2xl w-[400px] object-cover "
            src="/sample.jpg"
            alt="preview"
            height={600}
            width={600}
          />
        </div>
      </section>
      <section className="mt-36  flex gap-10">
        <SideBarClass />
        <div className="space-y-20">
          <div className="space-y-4">
            <SubHeading size="3xl">Develop Your Skills</SubHeading>
            <div className=" text-gray-800 text-lg font-normal  leading-loose">
              Faktor pertama yang menjadi alasan pengguna menggunakan aplikasi
              e-commerce adalah tampilan antarmuka (UI) yang menarik. UI yang
              dirancang dengan baik dapat menanamkan kepercayaan pada produk
              yang ditawarkan, yang nantinya berpengaruh penting terhadap
              kelancaran bisnis produk tersebut. Kelas ini akan membahas proses
              pengembangan UI pada sisi Front-End secara lengkap, dari mendesain
              UI dengan Adobe XD sampai slicing desain ke Flutter.
            </div>
          </div>
          <div className="space-y-4">
            <SubHeading size="3xl">Sneak Peak</SubHeading>
            <div className="grid grid-cols-2 gap-4">
              <Image
                className="rounded-2xl object-cover "
                src="/sample-testi.png"
                alt="preview"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
