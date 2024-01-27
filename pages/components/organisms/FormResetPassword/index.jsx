import React, { useState } from "react";
import { motion } from "framer-motion";
import { getSearchUser, getUser } from "@/lib/service";

export default function FormResetPassword() {
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email === "") {
      setLoading(false);
      setError("Email harus diisi");
      return;
    }

    try {
      const result = await getUser({ email });
      if (!result) {
        setLoading(false);
        setError("Email tidak ditemukan");
        return;
      }

      console.log("Before fetch email API:", email);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Atur Ulang Kata Sandi",
          data: {
            email: email,
            name: result?.name,
            url: `https://www.levelupclass.online/reset/${result?.id}?email=${email}`,
          },
        }),
      });

      const data = await response?.json();
      if (data?.success) {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 8000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Terjadi kesalahan saat mengirim email");
    }
  };

  return (
    <form onSubmit={handleSendEmail} className="h-full">
      <div className="space-y-4 mb-12 max-lg:text-center">
        <h4 className="font-extrabold text-2xl ">Lupa Password</h4>
        <p className="lg:max-w-[300px] md:w-[400px] max-lg:mx-auto">
          Pastikan akun Anda terdaftar manual bukan melalui Google Account
        </p>
      </div>
      <div className="bg-[#fff] p-6  rounded-3xl">
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            role="alert"
            className="alert alert-success"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Kami sudah mengirim surel yang berisi tautan untuk mereset kata
              sandi Anda!
            </span>
          </motion.div>
        )}
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text text-lg">Email address</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">{error}</span>
            <span className="label-text-alt text-white">.</span>
          </label>
        </div>

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
            Send Reset Link
          </button>
        )}
      </div>
    </form>
  );
}
