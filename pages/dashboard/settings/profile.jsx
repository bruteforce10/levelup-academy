/* eslint-disable @next/next/no-img-element */
import { goalsTarget } from "@/lib/data";
import SubHeading from "@/pages/components/atoms/SubHeading";
import SideBarCourse from "@/pages/components/organisms/SideBarCourse";
import { clsx } from "clsx";
import React from "react";

export default function Profile() {
  return (
    <div className="h-[10000px] flex gap-x-8 relative container mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px] max-sm:px-8">
        <div className="space-y-3">
          <SubHeading size="3xl">Edit Profile</SubHeading>
          <p className="max-md:text-center max-w-[18rem] leading-relaxed">
            Masukkan informasi yang valid agar proses belajar lebih mudah
          </p>
        </div>
        <div className=" mt-8 p-6 rounded-3xl w-[400px] bg-[#fff]">
          <form className="space-y-2">
            <div className="space-y-6 mb-10 text-center">
              <img
                src={"/icon/upload.svg"}
                alt="upload-file"
                width={84}
                height={84}
              />

              <div>
                <h4 className="font-extrabold text-xl">My Avatar</h4>
              </div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">Upload Avatar</span>
              </label>
              <input
                type="file"
                accept="image/*"
                name="file"
                className="file-input file-input-ghost w-full  bg-[#E5E9F2] rounded-full"
              />
              <label className="label">
                <span className="label-text-alt w-full text-sm text-gray-500 ">
                  Only JPG, JPEG, or PNG files with max size of 1 MB.
                </span>
                <span className="label-text-alt text-red-500 w-3/12"></span>
              </label>
            </div>
            <div className="form-control w-full ">
              <p className="text-red-500"></p>
              <label className="label">
                <span className="label-text text-lg">
                  Nama (maks. 20 karakter)
                </span>
              </label>
              <input
                type="text"
                maxLength={20}
                name="name"
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500"></span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <div className="form-control w-full ">
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
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-lg">Personal Goals</span>
              </label>
              <div className="dropdown dropdown-bottom ">
                <label tabIndex={0} className="btn m-1 bg-[#E5E9F2]">
                  "Pilih Keahlian"
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white  rounded-box block w-52 h-[250px] overflow-y-auto"
                >
                  {goalsTarget.map((option, index) => (
                    <li
                      className="block"
                      key={index}
                      onClick={() => onSelect(option)}
                    >
                      <a>{option}</a>
                    </li>
                  ))}
                </ul>
              </div>
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
              Continue
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
