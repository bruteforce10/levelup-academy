import React from "react";

export default function FormResetPassword() {
  const handleSendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "audifirdi@gmail.com",
        subject: "Atur Ulang Kata Sandi",
        text: `Email ini Anda terima atas permintaan mengatur ulang kata sandi akun anda pada Level-Up Academy. Jika ini bukan Anda, silahkan abaikan email ini.`,
      }),
    });

    const data = await response.json();
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
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text text-lg">Email address</span>
          </label>
          <input
            type="email"
            name="email"
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
          <label className="label">
            <span className="label-text-alt text-red-500"></span>
            <span className="label-text-alt text-white">.</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white
        hover:border-[#a1b7e7] transition-all  "
        >
          Send Reset Link
        </button>
      </div>
    </form>
  );
}
