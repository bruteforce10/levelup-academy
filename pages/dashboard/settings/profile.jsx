/* eslint-disable @next/next/no-img-element */
import { goalsTarget } from "@/lib/data";
import {
  getUser,
  updateUserWithImage,
  updateUserWithNoImage,
} from "@/lib/service";
import SubHeading from "@/pages/components/atoms/SubHeading";
import SideBarCourse from "@/pages/components/organisms/SideBarCourse";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as EmailValidator from "email-validator";

export default function Profile() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const [isLoading, setLoading] = useState(false);
  const email = session?.user?.email;
  const [error, setError] = useState({
    file: "",
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [loadingImage, setLoadingImage] = useState(false);
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    getUser({ email: email }).then((result) => {
      setData(result);
    });
  }, [email]);

  const validate = () => {
    const newError = { ...error };
    if (!data.email) {
      newError.email = "Email harus diisi";
    } else if (!EmailValidator.validate(data.email)) {
      newError.email = "Email tidak valid";
    }

    if (!data.name) {
      newError.name = "Nama harus diisi";
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
    setIsSubmitting(false);
  };

  const handleUploadFile = async (e) => {
    setError({
      ...error,
      file: "",
    });
    const file = e.target.files[0];
    setLoadingImage(true);

    if (
      ![
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
        "image/gif",
      ].includes(file?.type)
    ) {
      setLoadingImage(false);
      setError({
        ...error,
        file: "File Berupa Gambar",
      });
    } else if (file.size >= 1000000) {
      setLoadingImage(false);
      setError({
        ...error,
        file: `File harus kurang dari 1MB`,
      });
    } else {
      setData({
        ...data,
        gambar: { url: URL.createObjectURL(file) },
      });
      setImage(file);
      setIsSubmitting(false);
      setLoadingImage(false);
    }
  };

  const onSelect = (value) => {
    setData({
      ...data,
      goals: value,
    });

    setIsSubmitting(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const findErrors = validate();

    if (Object.values(findErrors).some((err) => err !== "")) {
      setData({
        ...data,
        name: "",
        email: "",
      });
      setError(findErrors);
    } else {
      const url =
        "https://api-ap-southeast-2.hygraph.com/v2/clnrgq1m6llmt01uo7zk9hnhc/master/upload";
      const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTgwMTg3MDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbG5yZ3ExbTZsbG10MDF1bzd6azlobmhjL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI5ODk4YmVjZC04NGQ5LTQ1ODAtYTE1ZS1iOTg5NDZjY2NhMzYiLCJqdGkiOiJjbG8yNGhxcmVlbWZuMDF1a2F2eXcxcWtlIn0.xQBudreGtSdTG3ien8M2ulu-oa9Q5KXx8NPDU22YwNCHa_qIMpWgmGCfURyH1WAt0due_hoZfhRaUMtB0t74HmfdEGikXZVa1FQoQxNnhxrEU4y_dcJE2LDk5Q64XX2cA81-FZyHRbflqsCalewXK0l3Ds68ZRLbKKXBQLPT6ZsLryi0iyc9LPYFZMtxI5DhUo7YppNeTNi62HA9qfZOiOA75D5CvXmTFcKWsZ6zp90hMgERLK0nvSQ3OmevtYKmDmM6XgiLbyY3hgdnZfpp0YG1KE0F-glbk8KNNJhhm340HY0t1RcBesLBaivy22-O9KrqjBi0yQWKkujUG_N5ZmU73zi19DSBxZxfZY5oEdBVQK-d7UZUZNshmgPIr2GFjZ61O_lhQ1T1h1R5fvln1sweLniX6Uqsg2Sp9E8FSXSLObTDgAf0xNlQ1rXntdqtH4r9kwIlDwvBvbHmWvFKu7OYsIDdpxQXDNy1mAObjlZYj5f6GvHY89DO-sWjKYldiiXUKTtf4q3Dnuah5eix0uuz5pX7FfmrIz-SNyKNGrw_lhHoJiENFTCRmvmEyOn-jCvfaphYwoRLLiMHFDHPusnpLFNhC73gA8y3gtUtfyGxSK_5aMA5LNoYLIMw4LJnXzrIpXfeqiJYMw-X8mJvhFvUJom2GhHiG-DZLGMFiaQ";

      const form = new FormData();

      if (image === "") {
        updateUserWithNoImage({
          userId: data.id,
          name: data.name,
          email: data.email,
          goals: data.goals,
        }).then((result) => {
          router.push("/dashboard/settings/update");
        });
      } else {
        form.append("fileUpload", image);
        const response = await fetch(url, {
          method: "POST",
          body: form,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result?.id) {
          updateUserWithImage({
            id: result?.id,
            userId: data.id,
            name: data.name,
            email: data.email,
            goals: data.goals,
          }).then((result) => {
            router.push("/dashboard/settings/update");
          });
        }
      }
    }
  };

  return (
    <div className="flex gap-x-8 relative container max-lg:px-8 mx-auto ">
      <SideBarCourse />
      <section className="mt-[60px]">
        <div className="space-y-3">
          <SubHeading size="3xl">Edit Profile</SubHeading>
          <p className="max-md:text-center max-md:mx-auto max-w-xs leading-relaxed">
            Masukkan informasi yang valid agar proses belajar lebih mudah
          </p>
        </div>
        <div className=" mt-8 p-6 rounded-3xl w-[400px] max-sm:w-full bg-[#fff]">
          <form onSubmit={handleUpdate} className="space-y-2">
            <div className="space-y-6 mb-10 text-center">
              {data?.gambar?.url ? (
                <img
                  src={data?.gambar?.url}
                  alt="avatar"
                  width={84}
                  height={84}
                  className={clsx(
                    " mx-auto w-[84px] h-[84px] object-cover rounded-full",
                    loadingImage && "animate-bounce"
                  )}
                />
              ) : (
                <img
                  src={"/icon/upload.svg"}
                  alt="upload-file"
                  width={84}
                  height={84}
                  className={clsx("mx-auto", loadingImage && "animate-bounce")}
                />
              )}

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
                onChange={handleUploadFile}
                accept="image/*"
                name="file"
                className="file-input file-input-ghost w-full  bg-[#E5E9F2] rounded-full"
              />
              <label className="label">
                <span className="label-text-alt w-full text-sm text-gray-500 ">
                  Only JPG, JPEG, or PNG files with max size of 1 MB.
                </span>
                <span className="label-text-alt text-red-500 w-3/12">
                  {error.file}
                </span>
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
                onChange={onChange}
                maxLength={20}
                value={data?.name}
                name="name"
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.name}
                </span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">Email address</span>
              </label>
              <input
                type="email"
                onChange={onChange}
                value={data?.email}
                name="email"
                className="input bg-[#E5E9F2] w-full rounded-full"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.email}
                </span>
                <span className="label-text-alt text-white">.</span>
              </label>
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-lg">Personal Goals</span>
              </label>
              <div className="dropdown dropdown-bottom ">
                <label tabIndex={0} className="btn m-1 bg-[#E5E9F2]">
                  {data?.goals || "Pilih Keahlian"}
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
                <span className="label-text-alt text-red-500">
                  {error.select}
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
                disabled={isSubmitting}
                className={
                  isSubmitting
                    ? " bg-prime/60 text-white w-full p-3 rounded-full text-md font-extrabold  border-4 border-white  transition-all"
                    : " bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
                }
              >
                Continue
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
