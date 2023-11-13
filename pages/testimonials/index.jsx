import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { postComment } from "@/lib/service";
import TestimonialSection from "../components/molecules/TestimonialSection";
import Head from "next/head";

export default function Testimonials() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    desc: "",
  });

  const [error, setError] = useState({
    title: "",
    desc: "",
  });
  const { data: session } = useSession();

  const validate = () => {
    const newError = { ...error };
    if (!data.title) {
      newError.title = "Judul harus diisi";
    }

    if (!data.desc) {
      newError.desc = "Deskripsi harus diisi";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findErrors = validate();
    const MySwal = withReactContent(Swal);

    if (Object.values(findErrors).some((err) => err !== "")) {
      setError(findErrors);
    } else {
      setLoading(true);

      if (!session) {
        MySwal.fire({
          icon: "error",
          confirmButtonColor: "#1759D7",
          title: "Oops...",
          text: "Anda harus login terlebih dahulu!",
          footer:
            '<a href="/auth/login?callbackUrl=/testimonials" class="text-blue-500 font-medium">Silahkan Login 👉</a>',
        });
        setLoading(false);
      } else {
        const resultComment = await postComment({
          title: data.title,
          desc: data.desc,
          email: session.user.email,
        });
        if (resultComment) {
          setData({
            ...data,
            title: "",
            desc: "",
          });
          MySwal.fire({
            icon: "success",
            confirmButtonColor: "#22C58B",
            title: "Sukses!",
            text: "Terima kasih sudah memberikan komentar",
          });
          setLoading(false);
        }
      }
    }
  };

  const onChange = (e) => {
    if (e.target.name === "desc") {
      const text = e.target.value;
      const string = text.replace("\n", " ");
      setData({
        ...data,
        [e.target.name]: string,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "title") {
      if (e.target.value.length < 50) {
        setError({
          ...error,
          title: "Judul maksimal 50 karakter",
        });
      } else if (e.target.value.length === 50) {
        setError({
          ...error,
          title: "",
        });
      }
    }
    if (e.target.name === "desc") {
      if (e.target.value.length < 120) {
        setError({
          ...error,
          desc: "Judul maksimal 120 karakter",
        });
      } else if (e.target.value.length === 120) {
        setError({
          ...error,
          desc: "",
        });
      }
    }
  };

  return (
    <div className="  md:px-8  pb-20 ">
      <Head>
        <title>Ceritakan Pengalaman Positif Kamu di Level-Up Academy</title>
      </Head>
      <div className="flex gap-[50px] container mx-auto max-lg:flex-wrap justify-center max-xl:px-6  mt-[50px] lg:h-full">
        <form onSubmit={handleSubmit} className="w-5/12 max-lg:w-full ">
          <h4 className="text-3xl font-extrabold mb-6 max-sm:w-full  w-[430px]">
            Ceritakan Pengalamanmu 😊
          </h4>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-lg">Judul</span>
            </label>
            <input
              type="text"
              maxLength={50}
              value={data.title}
              onBlur={() => {
                setError({
                  ...error,
                  title: "",
                });
              }}
              onChange={onChange}
              name="title"
              className="input bg-[#E5E9F2] w-full rounded-full"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">{error.title}</span>
              <span className="label-text-alt text-white">.</span>
            </label>
          </div>
          <div className="form-control w-full mb-2 ">
            <label className="label">
              <span className="label-text text-lg">Ketik Pengalamanmu</span>
            </label>
            <textarea
              type="text"
              value={data.desc}
              maxLength={120}
              onChange={onChange}
              onBlur={() => {
                setError({
                  ...error,
                  desc: "",
                });
              }}
              name="desc"
              className="textarea bg-[#E5E9F2] w-full rounded-[28px]"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">{error.desc}</span>
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
              Continue
            </button>
          )}
        </form>
        <div className="w-7/12 max-lg:w-full  h-[550px]  ">
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
}
