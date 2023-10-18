import FormLogin from "@/pages/components/organisms/ModalLogin/FormLogin";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div>
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

        <div className=" mt-20 max-lg:mx-auto lg:ml-[600px] w-8/12 ">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
