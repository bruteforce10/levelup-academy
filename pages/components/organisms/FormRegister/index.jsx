import { signUp } from "@/lib/service";
import Image from "next/image";
import React, { useState } from "react";

export default function FormRegister() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUp(data);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full mb-2">
        <label className="label">
          <span className="label-text text-lg">Nama (maks. 50 karakter)</span>
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
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
          value={data.password}
          onChange={onChange}
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
      </div>
      <div className="space-y-4">
        <button
          type="submit"
          className="bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
        >
          Continue
        </button>
      </div>
    </form>
  );
}
