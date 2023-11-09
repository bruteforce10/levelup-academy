import React, { useState } from "react";
import SideBarCourse from "../../components/organisms/SideBarCourse";
import SubHeading from "@/pages/components/atoms/SubHeading";

export default function Password() {
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newError = { ...error };
    if (!data.oldPassword) {
      newError.email = "Email harus diisi";
    } else if (
      data.oldPassword.length <= 6 ||
      data.oldPassword.length <= 6 ||
      data.confirmPassword.length <= 6
    ) {
      newError.password = "Password minimal 6 karakter";
    }

    return newError;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const findErrors = validate();
    if (Object.values(findErrors).some((err) => err !== "")) {
      setError(findErrors);
    } else {
      console.log(data);
    }
  };

  return (
    <div className="h-[10000px] flex gap-x-8 relative container mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px] max-sm:px-8">
        <div className="space-y-3">
          <SubHeading size="3xl">Edit Password</SubHeading>
          <p className="max-md:text-center max-w-[18rem] leading-relaxed">
            Amankan akun Anda dengan kombinasi password yang baik
          </p>
        </div>
        <div className=" mt-8 p-6 rounded-3xl w-[400px] bg-[#fff]   ">
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full -mt-2">
              <label className="label">
                <span className="label-text text-lg">Old Password</span>
              </label>
              <input
                type="password"
                maxLength={12}
                name="oldPassword"
                onChange={onChange}
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.oldPassword}
                </span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <div className="form-control w-full -mt-2">
              <label className="label">
                <span className="label-text text-lg">
                  New Password{" "}
                  <span className="text-sm">(maks. 12 karakter)</span>
                </span>
              </label>
              <input
                type="password"
                maxLength={12}
                name="newPassword"
                onChange={onChange}
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.newPassword}
                </span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <div className="form-control w-full -mt-2">
              <label className="label">
                <span className="label-text text-lg">
                  Confirm New Password{" "}
                  <span className="text-sm">(maks. 12 karakter)</span>
                </span>
              </label>
              <input
                type="password"
                maxLength={12}
                name="confirmPassword"
                onChange={onChange}
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.confirmPassword}
                </span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-prime w-full p-3 rounded-full text-md  font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
            >
              Update Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
