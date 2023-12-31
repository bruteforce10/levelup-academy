import React from "react";
import SideBarCourse from "../../components/organisms/SideBarCourse";
import SubHeading from "@/pages/components/atoms/SubHeading";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Settings() {
  return (
    <div className=" flex gap-x-8 relative max-lg:px-8 container mx-auto ">
      <Head>
        <title>Settings | Level-Up Academy</title>
      </Head>
      <SideBarCourse />
      <section className="mt-[60px] ">
        <div className="space-y-3">
          <SubHeading size="3xl">Settings</SubHeading>
          <p className="max-md:text-center max-md:mx-auto max-w-xs leading-relaxed">
            Pengaturan akun yang mungkin dibutuhkan selama proses belajar
          </p>
        </div>
        <div className="mt-10 flex gap-6 flex-wrap">
          <div className="w-[300px] flex-auto  rounded-3xl p-6 space-y-6 bg-[#fff]">
            <Image
              src="/icon/course-profile.svg"
              alt="profile"
              width="70"
              height="100"
            />
            <div className="space-y-3">
              <h4 className={`text-2xl font-bold`}>My Profile</h4>
              <p className="text-md text-deep text-opacity-50">
                Ubah data diri kamu
              </p>
            </div>
            <Link
              href={"/dashboard/settings/profile"}
              className="px-6 bg-tersier block text-center rounded-full  w-full hover:scale-105 transition-all  font-bold py-3"
            >
              Edit Now
            </Link>
          </div>
          <div className="w-[300px] flex-auto  rounded-3xl p-6 space-y-6 bg-[#fff]">
            <Image
              src="/icon/course-password.svg"
              alt="profile"
              width="70"
              height="100"
            />
            <div className="space-y-3">
              <h4 className={`text-2xl font-bold`}>My Password</h4>
              <p className="text-md text-deep text-opacity-50">
                Ganti kata sandimu
              </p>
            </div>
            <Link
              href={"/dashboard/settings/password"}
              className="px-6 bg-tersier block text-center rounded-full  w-full hover:scale-105 transition-all  font-bold py-3"
            >
              Change Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
