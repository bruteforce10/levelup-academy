/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserName, updateGoal, updateUser } from "@/lib/service";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { goalsTarget } from "@/lib/data";
import { IoIosArrowBack } from "react-icons/io";

export default function UploadProfile() {
  const [getData, setGetData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [loadingImage, setLoadingImage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState({
    id: "",
    image: "",
  });
  const [error, setError] = useState({
    file: "",
    select: "",
  });
  const router = useRouter();

  useEffect(() => {
    getUserName(router?.query?.data).then((nameResult) => {
      setData({
        ...data,
        id: nameResult?.account?.id,
        image: nameResult?.account?.image?.url,
      });
      setGetData({
        ...getData,
        name: nameResult?.account?.name,
        email: nameResult?.account?.email,
        password: nameResult?.account?.password,
      });
    });
  }, [router, setData, setGetData, getData, data]);

  const handleUploadFile = async (e) => {
    setError({
      ...error,
      file: "",
    });
    const file = e.target.files[0];

    if (
      ![
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
        "image/gif",
      ].includes(file?.type)
    ) {
      setError({
        ...error,
        file: "File Berupa Gambar",
      });
    } else if (file.size >= 1000000) {
      setError({
        ...error,
        file: `File harus kurang dari 1MB`,
      });
    } else {
      setLoadingImage(true);
      setIsSubmitting(true);
      const url =
        "https://api-ap-southeast-2.hygraph.com/v2/clnrgq1m6llmt01uo7zk9hnhc/master/upload";
      const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTgwMTg3MDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbG5yZ3ExbTZsbG10MDF1bzd6azlobmhjL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI5ODk4YmVjZC04NGQ5LTQ1ODAtYTE1ZS1iOTg5NDZjY2NhMzYiLCJqdGkiOiJjbG8yNGhxcmVlbWZuMDF1a2F2eXcxcWtlIn0.xQBudreGtSdTG3ien8M2ulu-oa9Q5KXx8NPDU22YwNCHa_qIMpWgmGCfURyH1WAt0due_hoZfhRaUMtB0t74HmfdEGikXZVa1FQoQxNnhxrEU4y_dcJE2LDk5Q64XX2cA81-FZyHRbflqsCalewXK0l3Ds68ZRLbKKXBQLPT6ZsLryi0iyc9LPYFZMtxI5DhUo7YppNeTNi62HA9qfZOiOA75D5CvXmTFcKWsZ6zp90hMgERLK0nvSQ3OmevtYKmDmM6XgiLbyY3hgdnZfpp0YG1KE0F-glbk8KNNJhhm340HY0t1RcBesLBaivy22-O9KrqjBi0yQWKkujUG_N5ZmU73zi19DSBxZxfZY5oEdBVQK-d7UZUZNshmgPIr2GFjZ61O_lhQ1T1h1R5fvln1sweLniX6Uqsg2Sp9E8FSXSLObTDgAf0xNlQ1rXntdqtH4r9kwIlDwvBvbHmWvFKu7OYsIDdpxQXDNy1mAObjlZYj5f6GvHY89DO-sWjKYldiiXUKTtf4q3Dnuah5eix0uuz5pX7FfmrIz-SNyKNGrw_lhHoJiENFTCRmvmEyOn-jCvfaphYwoRLLiMHFDHPusnpLFNhC73gA8y3gtUtfyGxSK_5aMA5LNoYLIMw4LJnXzrIpXfeqiJYMw-X8mJvhFvUJom2GhHiG-DZLGMFiaQ";

      const form = new FormData();
      form.append("fileUpload", file);
      const response = await fetch(url, {
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();

      if (result.id) {
        updateUser({
          id: result.id,
          name: data.id,
        }).then(async (result) => {
          setData({
            ...data,
            image: result?.updateAccount.image?.url,
          });
          setLoadingImage(false);
          setIsSubmitting(false);
        });
      }
    }
  };

  const onSelect = (value) => {
    setSelectedOption(value);

    setError({
      ...error,
      select: "",
    });
    setIsSubmitting(false);
  };

  const validate = () => {
    const newError = { ...error };

    if (!selectedOption) {
      newError.select = "Keahlian harus diisi";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const findErrors = validate();

    if (Object.values(findErrors).some((err) => err !== "")) {
      setError(findErrors);
    } else {
      setLoading(true);
      const result = await updateGoal({
        id: data.id,
        goals: selectedOption,
      });
      if (result) {
        const res = await signIn("credentials", {
          redirect: false,
          email: result.updateAccount.email,
          password: result.updateAccount.password,
          callbackUrl: router?.query?.callbackUrl,
        });
        if (res.ok) {
          router.push(router?.query?.callbackUrl);
        }
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Lengkapi Profile Belajar Level-Up</title>
      </Head>
      <div className="bg-[#F6F8FD] h-[800px]">
        <button
          className="flex absolute top-8 left-[1.2rem] text-semibold bg-[#fff] px-3 py-2 rounded-full"
          onClick={() => router.back()}
        >
          <IoIosArrowBack size={24} />
          Back
        </button>
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
            <div className="space-y-6 mb-10 text-center">
              {getData.image || data.image ? (
                <img
                  src={getData.image || data.image}
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
                <h4 className="font-extrabold text-xl">{getData.name}</h4>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-lg">Upload Avatar</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  onChange={handleUploadFile}
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
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text text-lg">Personal Goals</span>
                </label>
                <div className="dropdown dropdown-bottom ">
                  <label tabIndex={0} className="btn m-1 bg-[#E5E9F2]">
                    {selectedOption || "Pilih Keahlian"}
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
              <div className="space-y-4">
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

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(router?.query?.callbackUrl);
                  }}
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
