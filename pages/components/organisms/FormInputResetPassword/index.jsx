import { getUser, updatePassword } from "@/lib/service";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function FormInputResetPassword() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const { email, slug } = router.query;
  const [error, setError] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [data, setData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    getUser({ email: session?.user?.email }).then((result) => {
      if (result) {
        signIn("credentials", {
          email: result?.email,
          redirect: false,
          password: result?.password,
        });
        router.push(`/`);
      }
    });
  }, []);

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

  const validate = () => {
    const newError = { ...error };
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
    if (data.newPassword !== data.confirmPassword) {
      newError.confirmPassword = "Confirm Password Tidak Sama";
    }

    return newError;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const findErrors = validate();
    if (Object.values(findErrors).some((err) => err !== "")) {
      setError(findErrors);
      return;
    }
    const getUserResult = await getUser({
      email: email,
    });

    if (!getUserResult || getUserResult?.id !== slug) {
      setError({
        ...error,
        confirmPassword: "Link Reset Password tidak valid, silahkan coba lagi",
      });
      return;
    }

    const updatePasswordResult = await updatePassword({
      email: email,
      password: data.newPassword,
    });

    if (updatePasswordResult?.updateAccount?.id) {
      setLoading(false);
      router.push("/auth/login");
    }
  };

  return (
    <form className="h-full" onSubmit={handleResetPassword}>
      <div className="space-y-4 mb-12 max-lg:text-center">
        <h4 className="font-extrabold text-2xl ">Reset Password</h4>
        <p className="lg:max-w-[300px] md:w-[400px] max-lg:mx-auto">
          Amankan akun Anda dengan kombinasi password yang baik
        </p>
      </div>
      <div className="bg-[#fff] p-6  rounded-3xl">
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text text-lg">New Password</span>
          </label>
          <input
            type="password"
            name="newPassword"
            onChange={onChange}
            value={data.newPassword}
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {error.newPassword}{" "}
            </span>
            <span className="label-text-alt text-white">.</span>
          </label>
        </div>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text text-lg">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={onChange}
            value={data.confirmPassword}
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {error.confirmPassword}{" "}
            </span>
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
            Reset Password
          </button>
        )}
      </div>
    </form>
  );
}
