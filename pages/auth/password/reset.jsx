import FormResetPassword from "@/pages/components/organisms/FormResetPassword";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Reset() {
  const router = useRouter();
  return (
    <div className="bg-[#F6F8FD] h-[100vh]">
      <Head>
        <title>
          Dapatkan Kelas Premium dengan Login In | Level-Up Academy{" "}
        </title>
      </Head>
      <button
        className="flex absolute top-8 left-[1.2rem] text-semibold bg-[#fff] px-3 py-2 rounded-full"
        onClick={() => router.back()}
      >
        <IoIosArrowBack size={24} />
        Back
      </button>
      <Image
        src={"/img/logo.png"}
        alt="logo"
        width={110}
        className="mx-auto max-lg:block hidden pt-4"
        height={110}
      />
      <div className=" grid grid-cols-2 max-lg:grid-cols-1 ">
        <div className=" lg:block hidden fixed ">
          <Image
            src="/img/header-form.png"
            alt="cover-login"
            className=" w-[500px]"
            width={1080}
            height={1920}
          />
        </div>

        <div className=" mt-20 max-lg:mx-auto lg:ml-[600px] w-8/12 h-full ">
          <FormResetPassword />
        </div>
      </div>
    </div>
  );
}
