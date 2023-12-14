import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  getStatusClass,
  updateBundleClass,
  updateCoursePayment,
} from "@/lib/service";
import { useRouter } from "next/router";

export default function ConfirmationMidtrans() {
  const { data: session } = useSession();
  const { query } = useRouter();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getStatusClass(session?.user?.email).then((result) => {
      if (result) {
        const filter = result?.filter((item) => {
          return item?.idPayment === query?.order_id;
        });
        setData(filter);
        if (
          query.transaction_status === "settlement" ||
          query.transaction_status === "capture"
        ) {
          if (filter[0]?.bundelPayment[0]?.courses?.length > 0) {
            const course = filter[0]?.bundelPayment[0]?.courses;
            course.forEach((item, index) => {
              if (index <= 2) {
                updateBundleClass({
                  id: item.id,
                  email: session?.user?.email,
                  payment: "paymentSuccess",
                }).then((res) => {
                  setStatus(true);
                });
              }
            });
            updateCoursePayment({
              id: filter[0]?.id,
              email: session?.user?.email,
              payment: "paymentSuccess",
            }).then((res) => {
              setStatus(true);
            });
          } else {
            updateCoursePayment({
              id: filter[0]?.id,
              email: session?.user?.email,
              payment: "paymentSuccess",
            }).then((res) => {
              setStatus(true);
              console.log(res);
            });
          }
        }
      }
    });
  }, [session]);

  const handleFollowUp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=6289509046152&text=Halo%20MiminUp%2C%20Email%20saya%20audifirdi%40gmail.com%20telah%20membayar%20kelas%20${
        data[0]?.coursePayment[0]?.judul
      }%20tapi%20statusnya%20masih%20${
        status ? "Payment Success" : "Payment Pending"
      }.%20Mohon%20bantuannya.%20Terima%20kasih.`,
      "_blank"
    );
  };

  return (
    <section className="container lg:px-8 px-4  mx-auto">
      <div className="space-y-8 mx-auto mt-4 max-sm:mt-4 ">
        <Image
          src={
            query.transaction_status === "settlement" ||
            query.transaction_status === "capture"
              ? "/img/payment-success.png"
              : "/img/payment-pending.png"
          }
          alt="class null"
          className="mx-auto -mb-8"
          width={400}
          height={400}
        />
        <h4 className={`text-4xl font-bold text-center`}>
          {query.transaction_status === "settlement" ||
          query.transaction_status === "capture"
            ? "Payment Success"
            : "Payment Pending"}
        </h4>
        <p className="md:text-lg text-opacity-80 max-sm:w-[270px] mx-auto sm:w-[500px]  text-center leading-relaxed text-deep">
          Silakan menunggu proses pembayaran max. 15 menit apabila belum
          berhasil silakan hubungi admin kami.
        </p>
        <div className="flex flex-col text-center gap-2 items-center w-full">
          <button
            onClick={handleFollowUp}
            className="bg-prime block w-[300px]   py-3 px-6 rounded-full text-md font-extrabold text-white border-4 border-white
      hover:border-[#a1b7e7] transition-all  "
          >
            Whatsapp Admin
          </button>
          <Link
            href={"/dashboard/myclass"}
            className="bg-tersier block w-[300px]   py-3 px-6 rounded-full text-md font-extrabold text-black border-4 border-white
       transition-all  "
          >
            My Course
          </Link>
        </div>
      </div>
    </section>
  );
}
