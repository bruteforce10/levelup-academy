import { signUp } from "@/lib/service";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as EmailValidator from "email-validator";
import { signIn } from "next-auth/react";

export default function FormRegister() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState({
    name: "",
    errorRegister: "",
    email: "",
    password: "",
  });

  const { push, query } = useRouter();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
      errorRegister: "",
    });
  };

  const validate = () => {
    const newError = { ...error };
    if (!data.email) {
      newError.email = "Email harus diisi";
    } else if (!EmailValidator.validate(data.email)) {
      newError.email = "Email tidak valid";
    }
    if (!data.name) {
      newError.name = "Nama harus diisi";
    }

    if (!data.password) {
      newError.password = "Password harus diisi";
    } else if (data.password.length <= 6) {
      newError.password = "Password minimal 6 karakter";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findErrors = validate();
    setLoading(true);

    if (Object.values(findErrors).some((err) => err !== "")) {
      setLoading(false);
      setError(findErrors);
    } else {
      const result = await signUp(data);
      if (!result?.response?.status) {
        const res = await signIn("credentials", {
          redirect: false,
          email: result.email,
          password: result.password,
        });
        if (res.ok) {
          setLoading(false);
          push(`/auth/register/upload-profile?data=${result.id}`);
        }
      }

      const errorResult = result?.response?.errors[0]?.message;
      setError({
        ...error,
        errorRegister: errorResult,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full mb-2">
        <p className="text-red-500">{error?.errorRegister}</p>
        <label className="label">
          <span className="label-text text-lg">Nama (maks. 20 karakter)</span>
        </label>
        <input
          type="text"
          maxLength={20}
          name="name"
          value={data.name}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt text-red-500">{error.name}</span>
          <span className="label-text-alt text-white">.</span>
        </label>
      </div>
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
          <span className="label-text text-lg">
            Password (maks. 12 karakter)
          </span>
        </label>
        <input
          type="password"
          name="password"
          maxLength={12}
          value={data.password}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt text-red-500">{error.password}</span>
          <span className="label-text-alt text-white">.</span>
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
            className=" bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
          >
            Continue
          </button>
        )}
      </div>
    </form>
  );
}
