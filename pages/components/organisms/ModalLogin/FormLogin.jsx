import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import * as EmailValidator from "email-validator";

export default function FormLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const { push, query } = useRouter();
  const callBackUrl = query.callbackUrl || "/";

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newError = { ...error };
    if (!data.email) {
      newError.email = "Email harus diisi";
    } else if (!EmailValidator.validate(data.email)) {
      newError.email = "Email tidak valid";
    }

    if (!data.password) {
      newError.password = "Password harus diisi";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findErrors = validate();
    setLoading(true);

    if (Object.values(findErrors).some((err) => err !== "")) {
      setData({
        name: "",
        email: "",
        password: "",
      });
      setLoading(false);
      setError(findErrors);
    } else {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: callBackUrl,
        });

        if (res.ok) {
          setLoading(false);
          push(callBackUrl);
          const modal = document.getElementById("my_modal_1");
          modal.close();
        } else {
          setLoading(false);
          setData({
            email: "",
            password: "",
          });
          setError({
            ...error,
            email: "Email atau Password salah",
          });
        }
      } catch (error) {}
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full">
      <h4 className="font-extrabold text-2xl mb-6">Sign In</h4>
      <div className="form-control w-full mb-2">
        <label className="label">
          <span className="label-text text-lg">Email address</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt text-red-500">{error.email}</span>
          <span className="label-text-alt text-white">.</span>
        </label>
      </div>
      <div className="form-control w-full mb-6">
        <label className="label">
          <span className="label-text text-lg">Password</span>
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          maxLength={12}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt text-red-500">{error.password}</span>
          {/* <span className="label-text-alt text-sm cursor-pointer text-gray-400 hover:scale-95 origin-top-right transition-all">
              Lupa Password
            </span> */}
        </label>
      </div>
      <div className="space-y-4">
        {isLoading ? (
          <button
            disabled="disabled"
            className="btn  text-white  w-full  rounded-full text-md font-extrabold  border-4 border-white  transition-all"
          >
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <button
            type="submit"
            className="bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white
  hover:border-[#a1b7e7] transition-all  "
          >
            Sign In
          </button>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            push("/auth/register?callbackUrl=" + callBackUrl);
            const modal = document.getElementById("my_modal_1");
            modal.close();
          }}
          className="bg-[#E5E9F2] w-full p-3 rounded-full text-md font-extrabold hover:shadow-md transition-all"
        >
          Create New Account
        </button>
        {/* <div className="w-full border-[1px] border-gray-200 rounded-full my-4"></div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google", {
              callbackUrl: callBackUrl,
              redirect: false,
            });
          }}
          className="bg-[#34364A] w-full p-3 rounded-full text-md font-bold flex justify-center gap-2 text-white hover:shadow-xl transition-all"
        >
          <Image src="/google.svg" alt="google" width={24} height={24} />
          Masuk / Daftar
        </button> */}
      </div>
    </form>
  );
}
