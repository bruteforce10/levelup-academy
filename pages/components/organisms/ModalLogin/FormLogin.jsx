import React from "react";
import Image from "next/image";

export default function FormLogin() {
  return (
    <>
      <h4 className="font-extrabold text-2xl mb-6">Sign In</h4>
      <div className="form-control w-full mb-2">
        <label className="label">
          <span className="label-text text-lg">Email address</span>
        </label>
        <input
          type="email"
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
      </div>
      <div className="form-control w-full mb-6">
        <label className="label">
          <span className="label-text text-lg">Password</span>
        </label>
        <input
          type="password"
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt w-full text-end text-sm cursor-pointer text-gray-400 hover:scale-95 origin-top-right transition-all">
            Lupa Password
          </span>
        </label>
      </div>
      <div className="space-y-4">
        <button
          className="bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
        >
          Sign In
        </button>
        <button className="bg-[#E5E9F2] w-full p-3 rounded-full text-md font-extrabold hover:shadow-md transition-all">
          Create New Account
        </button>
        <div className="w-full border-[1px] border-gray-200 rounded-full"></div>
        <button className="bg-[#34364A] w-full p-3 rounded-full text-md font-bold flex justify-center gap-2 text-white hover:shadow-xl transition-all">
          <Image src="/google.svg" alt="google" width={24} height={24} />
          Masuk / Daftar
        </button>
      </div>
    </>
  );
}
