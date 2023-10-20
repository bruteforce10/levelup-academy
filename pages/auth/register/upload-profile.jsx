import Image from "next/image";
import React from "react";

export default function uploadProfile() {
  return (
    <div>
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
            <div className="space-y-4 mb-10 text-center">
              <Image
                src={"/icon/upload.svg"}
                alt="upload-file"
                width={84}
                height={84}
                className=" mx-auto"
              />
              <div>
                <h4 className="font-extrabold text-xl">User Name</h4>
                <p className="text-lg text-gray-500">@username</p>
              </div>
            </div>
            <form>
              <div className="form-control w-full mb-2">
                <label className="label">
                  <span className="label-text text-lg">Upload Avatar</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-ghost w-full  bg-[#E5E9F2] rounded-full"
                />
                <label className="label">
                  <span className="label-text-alt w-full text-sm text-gray-500 ">
                    Only JPG, JPEG, or PNG files with max size of 1 MB.
                  </span>
                </label>
              </div>
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text text-lg">Personal Goals</span>
                </label>
                <select className="select select-ghost  bg-[#E5E9F2] rounded-full">
                  <option disabled selected>
                    Pick the best JS framework
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <div className="space-y-4">
                <button
                  className="bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white
              hover:border-[#a1b7e7] transition-all  "
                >
                  Continue
                </button>
                <button
                  type="submit"
                  className="bg-[#E5E9F2] w-full p-3 rounded-full text-md font-extrabold hover:shadow-md transition-all"
                >
                  Skip for now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
