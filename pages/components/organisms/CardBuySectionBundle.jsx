import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";
import useSectionView from "@/lib/hook";
import {
  getPaymentUser,
  paymentRequest,
  paymentRequestBundle,
} from "@/lib/service";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function CardBuySectionBundle({ price, payment, email, title }) {
  const { ref } = useSectionView("buy", 1);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { data: session } = useSession();
  const [link, setLink] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result !== undefined) {
        const filterClass = result?.filter(
          (item) => item?.bundelPayment.length > 0
        );

        fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: filterClass[0]?.idPayment,
          }),
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            if (data?.transaction_status === "pending") {
              console.log(data);
              setIsPending(true);
              setLink(filterClass[0]?.linkPayment);
            }
          });
        });
        if (filterClass[0]?.statusPayment === "paymentSuccess") {
          setSuccess(true);
        }
      }
    });
  }, [setIsPending, title, email]);

  const handleBuy = async () => {
    if (session === null) {
      router.push(`/auth/login?callbackUrl=/bundle/${payment}`);
    } else {
      setIsLoading(true);
      const data = {
        id: payment + Math.random() * 100 + 1,
        productName: title.slice(0, 35),
        price: parseFloat(Discount(price)),
        quantity: 1,
      };
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const requestData = await response?.json();
      const payResult = await paymentRequestBundle({
        id: payment,
        email: email,
        idPayment: requestData?.id,
        link: requestData?.redirect,
        time: new Date().toISOString(),
      });
      if (payResult) {
        setIsLoading(false);
        console.log(payResult);
        setIsPending(true);
        setLink(requestData?.redirect);
        window.open(requestData?.redirect, "_blank");
      }
    }
  };

  return (
    <div
      id="buy"
      className="space-y-6 bg-[#fff] rounded-2xl scroll-mt-[200px] px-[38px] py-8 w-[400px] max-sm:w-full mx-auto"
    >
      <Image src={"/img/icon-disc.svg"} alt="discount" width={70} height={70} />
      <div className="space-y-2">
        <div className="text-gray-800 text-lg font-normal ">Selamanya</div>
        <div className="text-red-500 text-xl font-bold  line-through animate-pulse ">
          {Currency(price)}
        </div>
        <div id="hookBuy" className="text-black text-3xl font-extrabold">
          {Currency(Discount(price))}
        </div>
      </div>
      <div
        ref={ref}
        className="  text-black text-lg font-normal leading-relaxed"
      >
        Miliki kelas Premium secara permanen dan bangun sebuah projek nyata
      </div>
      <hr />
      <ul className="space-y-4">
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Akses selamanya
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Video Tutorial, Source Code, dan Materi (pdf)
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Premium rewards
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Sertifikat kelulusan
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Free update materi selama 4 bulan
        </li>
        <li className="flex items-center gap-x-3 w-full">
          <Image
            src="/icon/checklist-green.svg"
            width={28}
            height={28}
            alt="check"
          />
          Free akses kelas Freemium
        </li>
      </ul>
      {isPending ? (
        <Link
          href={link}
          target="_blank"
          className="px-6 flex bg-[#facb5e] justify-center gap-x-2 group text-center rounded-full text-[#fff] w-full transition-all  font-bold py-3"
        >
          Click Pembayaran
          <FiArrowRight
            className="group-hover:translate-x-4 transition"
            size={28}
          />
        </Link>
      ) : isLoading ? (
        <button
          disabled="disabled"
          className="btn  text-white  w-full  rounded-full text-md font-extrabold  border-4 border-white  transition-all"
        >
          <span className="loading loading-spinner"></span>
          loading
        </button>
      ) : (
        <button
          onClick={handleBuy}
          disabled={isSuccess}
          className={
            isSuccess
              ? " bg-prime/60 text-white w-full p-3 rounded-full text-md font-extrabold  border-4 border-white  transition-all"
              : " bg-prime w-full p-3 rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
          }
        >
          {isSuccess ? "Sudah Apply Promo" : "Dapatkan Promonya"}
        </button>
      )}
    </div>
  );
}
