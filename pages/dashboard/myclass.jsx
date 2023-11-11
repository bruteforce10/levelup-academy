import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import SubHeading from "../components/atoms/SubHeading";
import CardMyCourse from "../components/molecules/CardMyCourse";
import { useSession } from "next-auth/react";
import { getPaymentUser } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";

export default function MyClass() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, [email]);

  return (
    <div className=" flex gap-x-8 relative container max-lg:px-8 mx-auto ">
      <SideBarCourse />

      <section className="mt-[60px] w-full">
        <div className="space-y-3">
          <SubHeading size="3xl">My Courses</SubHeading>
          <p className="max-md:text-center max-md:mx-auto max-w-xs leading-relaxed">
            Upgrade terus ilmu dan pengalaman terbaru kamu di bidang teknologi
          </p>
        </div>
        {data.length <= 0 && (
          <div className="space-y-8 mx-auto mt-14 ">
            <Image
              src={"/icon/class-null.svg"}
              alt="class null"
              className="mx-auto"
              width={400}
              height={400}
            />
            <p className="md:text-lg text-opacity-80  text-center leading-relaxed text-deep">
              Sepertinya kamu belum mengikuti kelas.
              <br /> Jangan khawatir, yuk cari kelas yang sesuai dengan
              kebutuhanmu!
            </p>
            <div className="mx-auto text-center w-full">
              <Link
                href={"/kelas"}
                className="bg-prime inline-block   py-3 px-6 rounded-full text-md font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
              >
                Lihat Katalog Kelas
              </Link>
            </div>
          </div>
        )}

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {data?.map((item) => (
            <CardMyCourse key={item.id} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
