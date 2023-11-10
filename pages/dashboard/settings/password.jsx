import React, { useState } from "react";
import SideBarCourse from "../../components/organisms/SideBarCourse";
import SubHeading from "@/pages/components/atoms/SubHeading";
import { getUser, updatePassword } from "@/lib/service";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const { data: session } = useSession();

  const router = useRouter();

  const validate = () => {
    const newError = { ...error };
    if (!data.oldPassword) {
      newError.oldPassword = "Old Password, harus diisi";
    } else if (data.oldPassword.length <= 6) {
      newError.oldPassword = "Old Password minimal 6 karakter";
    }
    if (!data.newPassword) {
      newError.newPassword = "New Password, harus diisi";
    } else if (data.newPassword.length <= 6) {
      newError.newPassword = "New Password minimal 6 karakter";
    }
    if (!data.confirmPassword) {
      newError.confirmPassword = "Confirm New Password, harus diisi";
    } else if (data.confirmPassword.length <= 6) {
      newError.confirmPassword = "Confirm Password minimal 6 karakter";
    }
    if (data.oldPassword === data.newPassword) {
      newError.newPassword =
        "New Password Tidak Boleh Sama dengan Old Password";
    }
    if (data.newPassword !== data.confirmPassword) {
      newError.confirmPassword = "Confirm Password Tidak Sama";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findErrors = validate();
    if (Object.values(findErrors).some((err) => err !== "")) {
      setError(findErrors);
    } else {
      const getUserResult = await getUser({
        email: session?.user?.email,
      });

      if (
        getUserResult?.password === data.oldPassword ||
        getUserResult?.password === undefined
      ) {
        const updatePasswordResult = await updatePassword({
          email: session?.user?.email,
          password: data.newPassword,
        });
        if (updatePasswordResult?.updateAccount?.id) {
          setData({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
          router.push("/dashboard/settings/update");
        }
      } else {
        setError({
          ...error,
          oldPassword:
            "Maaf, Old Password yang anda masukkan tidak cocok. Silahkan coba kembali",
        });
      }
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
                value={data.oldPassword}
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
                value={data.newPassword}
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
                value={data.confirmPassword}
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
              className="bg-prime w-full mt-4 p-3 rounded-full text-md  font-extrabold text-white border-4 border-white
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
