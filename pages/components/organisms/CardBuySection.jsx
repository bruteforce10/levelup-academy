import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";
import useSectionView from "@/lib/hook";
import { getPaymentUser, paymentRequest } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function CardBuySection({ price, payment, email, title }) {
  const { ref } = useSectionView("buy", 1);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      const filterClass = result?.filter(
        (item) => item.coursePayment[0].judul === title
      );
      if (filterClass[0]?.statusPayment === "paymentPending") {
        setIsPending(true);
      } else {
        setIsPending(false);
      }
    });
  }, [email, setIsPending, isPending]);

  const handleBuy = async () => {
    const payResult = await paymentRequest({
      id: payment,
      email: email,
      time: new Date().toISOString(),
    });

    if (payResult) {
      setIsPending(true);
      window.open(
        `https://api.whatsapp.com/send?phone=628816101512&text=hi%20mimin%20saya%20dengan%20email:%20${email}%20ingin%20membeli%20produk%20${title}%20ini%20dengan%20harga%20${Discount(
          price
        )}`,
        "_blank"
      );
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
        <div className="text-black text-3xl font-extrabold">
          {Discount(price)}
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
          href={"/dashboard/transactions"}
          className="px-6 flex bg-[#facb5e] justify-center gap-x-2 group text-center rounded-full text-[#fff] w-full transition-all  font-bold py-3"
        >
          Menunggu Pembayaran
          <FiArrowRight
            className="group-hover:translate-x-4 transition"
            size={28}
          />
        </Link>
      ) : (
        <button
          onClick={handleBuy}
          className="px-6 bg-prime rounded-full text-[#fff] w-full hover:scale-105 transition-all  font-bold py-3"
        >
          Beli Kelas
        </button>
      )}
    </div>
  );
}
