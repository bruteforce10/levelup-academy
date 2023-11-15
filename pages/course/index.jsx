import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import SubHeading from "../components/atoms/SubHeading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  createReview,
  getManyReview,
  getPaymentUser,
  publishReview,
} from "@/lib/service";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Course() {
  const [data, setData] = useState({
    desc: "",
    rating: "",
  });
  const { data: session } = useSession();
  const { query } = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [isReview, setReview] = useState(false);
  const email = session?.user?.email;
  const MySwal = withReactContent(Swal);
  const [isBuy, setBuy] = useState(false);
  const [getData, setGetData] = useState({});

  useEffect(() => {
    getManyReview({ class: query?.class, email: email }).then((result) => {
      if (result?.reviews?.length > 0) {
        setReview(true);
      }
    });
  }, [email]);

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result) {
        const filterClass = result?.filter(
          (item) => item?.coursePayment[0]?.id === query?.class
        );
        if (filterClass[0]?.statusPayment === "paymentSuccess") {
          setBuy(true);
          setGetData(filterClass[0]?.coursePayment[0]);
        }
      }
    });
  }, [email, data, setData]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSelect = (value) => {
    setData({
      ...data,
      rating: value,
    });
    setIsSubmitting(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createReviewResult = await createReview({
      desc: data?.desc,
      rating: data?.rating,
      class: query?.class,
      email: email,
    });
    if (!createReviewResult?.id) {
      publishReview(createReviewResult?.createReview?.id);
      setData({
        ...data,
        desc: "",
        rating: "",
      });
      MySwal.fire({
        icon: "success",
        confirmButtonColor: "#22C58B",
        title: "Sukses!",
        text: "Terima kasih sudah memberikan komentar",
      });
    }
  };

  return (
    <div className=" flex gap-x-8 relative container max-lg:px-8 mx-auto ">
      <SideBarCourse />

      <section className="mt-[60px] w-full space-y-12">
        <div className="space-y-6">
          <SubHeading size="2xl">Kelas {getData?.judul}</SubHeading>
          <div className="bg-[#fff] py-4 px-6 rounded-3xl">
            {isBuy && (
              <>
                <p className="text-md font-medium mb-1">
                  Link Support dibawah ini 🔥
                </p>
                <Link
                  href={getData?.linkClass}
                  target="_blank"
                  className="text-blue-500 block underline underline-offset-2"
                >
                  {getData?.linkClass}
                </Link>
              </>
            )}
          </div>
        </div>
        {!isReview && (
          <div className="space-y-3">
            <div className="space-y-2">
              <SubHeading size="2xl">Review Kelas</SubHeading>
              <p className="max-md:text-center max-md:mx-auto leading-relaxed">
                Ceritakan pengalaman positif kamu mengikuti kelas ini
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-4/12  max-md:w-full">
                <label className="label">
                  <span className="label-text text-lg">Keterangan</span>
                </label>
                <textarea
                  type="text"
                  onChange={onChange}
                  value={data.desc}
                  maxLength={120}
                  name="desc"
                  className="textarea bg-[#E5E9F2]  rounded-box max-md:w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-red-500"></span>
                  <span className="label-text-alt text-white">.</span>
                </label>
              </div>
              <div className="form-control">
                <div className="dropdown dropdown-bottom ">
                  <label tabIndex={0} className="btn m-1 bg-[#E5E9F2]">
                    {data.rating ? (
                      <span>{data.rating} ⭐</span>
                    ) : (
                      <span>Pilih Rating ⭐</span>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-[1] menu p-2 shadow bg-white  rounded-3xl block w-52  overflow-y-auto"
                  >
                    {[...Array(5)].map((option, index) => (
                      <li
                        className="block"
                        key={index}
                        onClick={() => onSelect(index + 1)}
                      >
                        <a>{index + 1} ⭐</a>
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
                disabled={isSubmitting}
                className={
                  isSubmitting
                    ? " bg-prime/60 text-white  px-12 py-3 rounded-full text-md font-extrabold  border-4 border-white  transition-all"
                    : " bg-prime px-12 py-3  rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
                }
              >
                Continue
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
