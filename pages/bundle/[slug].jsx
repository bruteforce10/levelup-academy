import { getBundle } from "@/lib/service";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SubHeading from "../components/atoms/SubHeading";
import KeyPointSection from "../components/organisms/KeyPointSection";
import Heading from "../components/heading";
import Link from "next/link";
import CardBuySection from "../components/organisms/CardBuySection";
import { useSession } from "next-auth/react";
import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";
import FooterBuy from "../components/molecules/FooterBuy";

export default function Bundle() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    if (slug) {
      getBundle(slug).then((result) => {
        setData(result);
        console.log(result);
      });
    }
  }, [slug]);

  return (
    <div className="px-4 container mt-[60px] max-sm:mt-8 mx-auto pb-18">
      <Head>
        <title>{data?.secondJudul} | Level-Up Academy</title>
      </Head>
      <section className="flex  gap-8 justify-between max-md:flex-wrap-reverse ">
        <div className="space-y-8 w-7/12 max-md:w-full">
          <div className="space-y-4">
            <h2 className=" text-gray-800 text-4xl font-bold max-sm:text-center  leading-[46.80px]">
              {data?.judul}
            </h2>
            <p className=" text-gray-800 text-lg max-xl:text-md max-sm:text-center font-normal leading-loose">
              {data?.desc}
            </p>
            <div className="w-full max-sm:mx-auto max-sm:text-center">
              <Link
                href={"#paket"}
                className=" bg-prime px-6 py-3  rounded-full inline-block text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
              >
                Lihat Paket Kelas
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <SubHeading size="2xl">Siapa Yang Cocok Ikut Kelas Ini?</SubHeading>
            <KeyPointSection keyPoints={data?.listCocok} />
            <div className="space-y-6">
              <p className="font-medium italic text-md">
                Kelas ini juga cocok untuk kamu yang ingin berkarier sebagai:
              </p>
              <KeyPointSection keyPoints={data?.listCareer} />
            </div>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-start max-md:justify-start max-md:w-full">
          <Image
            className="rounded-2xl w-[400px] object-contain "
            src={data?.gambar?.url}
            alt="preview"
            height={600}
            width={600}
          />
        </div>
      </section>
      <section className="mt-24 space-y-24">
        <div className="space-y-8">
          <div className="-space-y-8">
            <Heading
              tag={"Start Learning Today"}
              judul={data?.secondJudul}
              align={"sm:text-start max-sm:text-center"}
            />
            <p className="text-lg ">
              Ini dia kelas-kelas yang akan kamu dapatkan
            </p>
          </div>
          <div>
            <div className="space-y-12 scroll-mt-32" id="paket">
              {data?.courses?.map((course) => (
                <div key={course.id} className="flex gap-8 max-lg:flex-wrap ">
                  <Image
                    src={course.gambar?.url}
                    width={300}
                    className="rounded-3xl object-cover"
                    height={300}
                    alt={course.judul}
                  />
                  <div className="space-y-4">
                    <h4 className="text-3xl leading-relaxed font-extrabold max-sm:text-2xl">
                      {course.judul}
                    </h4>
                    <p className="text-lg leading-relaxed md:w-[700px] ">
                      {course.descBundle}
                    </p>
                    <Link
                      href={`/kelas/${course.id}`}
                      target="_blank"
                      className="text-md text-prime font-semibold inline-block underline"
                    >
                      Lihat Kelas
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-3 text-center mx-auto">
            <SubHeading size="3xl">Low Risk, High Return</SubHeading>
            <p className="w-[400px] max-sm:w-full mx-auto ">
              Investasi kepada diri kita sendiri memberikan leverage kuat untuk
              masa depan karir kita
            </p>
          </div>
        </div>
      </section>
      <div
        id="buy"
        className="space-y-6 bg-[#fff] rounded-2xl scroll-mt-[200px] px-[38px] py-8 w-[400px] max-sm:w-full mx-auto"
      >
        <Image
          src={"/img/icon-disc.svg"}
          alt="discount"
          width={70}
          height={70}
        />
        <div className="space-y-2">
          <div className="text-gray-800 text-lg font-normal ">Selamanya</div>
          <div className="text-red-500 text-xl font-bold  line-through animate-pulse ">
            {Currency(data?.harga)}
          </div>
          <div id="hookBuy" className="text-black text-3xl font-extrabold">
            {Discount(data?.harga)}
          </div>
        </div>
        <div className="  text-black text-lg font-normal leading-relaxed">
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
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=628816101512&text=hi%20mimin%20saya%20dengan%20email:%20${
            session?.user?.email
          }%20ingin%20klaim%20promo%20${
            data?.secondJudul
          }%20ini%20dengan%20harga%20${Discount(data?.harga)}`}
          className=" bg-prime w-full inline-block text-center p-3 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
        >
          Dapatkan Promonya
        </Link>
      </div>
      <FooterBuy price={data?.harga} />
    </div>
  );
}
