/* eslint-disable @next/next/no-img-element */
import {
  getAllClass,
  getSearchUser,
  getStatusClass,
  setUserCourse,
  updateCoursePayment,
} from "@/lib/service";
import React, { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Image from "next/image";

export default function Admin() {
  const MySwal = withReactContent(Swal);
  const [data, setData] = useState({
    email: "",
    isSuccess: "",
    idClass: "",
    ClassName: "",
  });
  const [course, setCourse] = useState([]);
  const [statusCourse, setStatusCourse] = useState([]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getAllClass().then((result) => {
      setCourse(result);
    });
  }, []);

  const handleStatusClass = async () => {
    if (data.email) {
      const result = await getStatusClass(data.email);
      if (result?.length > 0) {
        setStatusCourse(result);
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Kelas Kosong",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email Tidak Boleh Kosong",
      });
    }
  };

  const handleSubmit = async () => {
    const resultStatusClass = await getStatusClass(data.email);
    if (resultStatusClass.length > 0) {
      const filterStatusClass = resultStatusClass.filter(
        (item) => item?.coursePayment[0]?.id === data.idClass
      );
      if (filterStatusClass.length > 0) {
        const result = await updateCoursePayment({
          email: data.email,
          id: filterStatusClass[0]?.id,
        });
        if (result) {
          MySwal.fire({
            icon: "success",
            title: "Sukses!",
            text: "Status Berhasil",
          });
        }
      } else {
        const result = await setUserCourse(data);
        if (result) {
          MySwal.fire({
            icon: "success",
            title: "Sukses!",
            text: "Kelas Berhasil ditambahkan",
          });
        }
      }
    } else {
      const result = await setUserCourse(data);
      if (result) {
        MySwal.fire({
          icon: "success",
          title: "Sukses!",
          text: "Kelas Berhasil ditambahkan",
        });
      }
    }
  };

  return (
    <div className="container px-8 mx-auto space-y-8">
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input
          type="text"
          value={data.email}
          onBlur={() => {
            getSearchUser(data.email).then((result) => {
              if (result) {
                setData({
                  ...data,
                  isSuccess: "email tersedia",
                });
              } else {
                setData({
                  ...data,
                  isSuccess: "",
                });
              }
            });
          }}
          onChange={onChange}
          name="email"
          className="input bg-[#E5E9F2] w-full rounded-full"
        />
        <label className="label">
          <span className="label-text-alt text-md text-green-500">
            {data.isSuccess}
          </span>
          <span className="label-text-alt text-white">.</span>
        </label>
      </div>
      <div className="dropdown dropdown-bottom ">
        <label
          tabIndex={0}
          className="btn  bg-[#E5E9F2]  leading-relaxed text-left "
        >
          {data.ClassName || "Pilih Course"}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white  rounded-box block w-[24rem] h-[20rem] overflow-y-auto"
        >
          {course.map((option, index) => (
            <li
              className="block p-2"
              key={index}
              onClick={() => {
                setData({
                  ...data,
                  idClass: option.id,
                  ClassName: option.judul,
                });
              }}
            >
              <div>
                <img src={option.gambar.url} alt={option.judul} />
                <a className="text-xl">{option.judul}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-8">
        <div className="flex gap-4 ">
          <button
            onClick={handleStatusClass}
            className="bg-prime  py-2 px-6 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
          >
            Cek Status Kelas
          </button>
          <button
            onClick={handleSubmit}
            className="bg-second  py-2 px-6 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#82e0bf] transition-all"
          >
            Submit Class
          </button>
        </div>
        <div className="space-y-4">
          {statusCourse.map((option, index) => (
            <div key={index} className="flex gap-4 max-sm:flex-wrap">
              <Image
                src={option?.coursePayment[0]?.gambar?.url}
                alt={option.judul}
                width={100}
                height={100}
                className="rounded-xl object-cover"
              />
              <div>
                <p className="text-lg">{option?.coursePayment[0]?.judul}</p>
                <p className="text-md">{option?.statusPayment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
