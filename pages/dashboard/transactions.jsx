/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import { FiArrowRight } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { getPaymentUser, paymentRequest } from "@/lib/service";
import { Discount } from "@/lib/Discount";
import moment from "moment";
import SubHeading from "../components/atoms/SubHeading";
import Head from "next/head";
import { Currency } from "@/lib/Currency";
import Link from "next/link";

export default function Transactions() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result) {
        setData(result);
        console.log(result);
        // paymentRequest({
        //   id: payment,
        //   email: email,
        //   link: requestData?.redirect,
        //   time: new Date().toISOString(),
        // }).then((res) => {
        //   console.log(res);
        // });
      }
    });

    // fetch("/api/payment", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // body: JSON.stringify("id"),
    // }).then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // });
  }, []);

  const handleFollowUp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=6285691572452&text=hi%20mimin%20saya%20Saya%20membutuhkan%20bantuan...`,
      "_blank"
    );
  };

  return (
    <div className=" flex gap-x-8  container mx-auto ">
      <Head>
        <title>Transactions | Level-Up Academy</title>
      </Head>
      <SideBarCourse />
      <section className="mt-[60px] w-full">
        <div className="space-y-3">
          <SubHeading size="3xl">Transactions</SubHeading>
          <p className="max-md:text-center  leading-relaxed">
            Daftar pembelian kelas dan ebook premium anda
          </p>
        </div>
        <div className="overflow-x-scroll mt-8  ">
          <table className="table  ">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item?.coursePayment[0]?.gambar?.url}
                      className="rounded-xl min-w-[90px] w-[100px]"
                      alt="cover"
                    />
                  </td>
                  <td>{item?.coursePayment[0]?.judul}</td>
                  <td>{Currency(Discount(item?.coursePayment[0]?.price))}</td>
                  <td>{moment(item?.time).format(" MMMM DD YYYY HH:mm")}</td>
                  <td>
                    {item?.statusPayment === "paymentPending" ? (
                      <div className="badge badge-warning whitespace-nowrap">
                        Payment Pending
                      </div>
                    ) : item?.statusPayment === "paymentSuccess" ? (
                      <div className="badge badge-success whitespace-nowrap">
                        Payment Success
                      </div>
                    ) : (
                      <div className="badge badge-error whitespace-nowrap">
                        Payment Abort
                      </div>
                    )}
                  </td>
                  <td className="flex gap-4 items-center ">
                    {item?.statusPayment === "paymentPending" && (
                      <>
                        {item?.linkPayment && (
                          <button
                            onClick={() => {
                              window.open(item?.linkPayment, "_blank");
                            }}
                            className="px-6 whitespace-nowrap bg-prime text-[#fff] rounded-full w-full hover:scale-90 transition-all  font-bold py-3"
                          >
                            Proses Lanjut
                          </button>
                        )}

                        <button
                          onClick={() =>
                            handleFollowUp(
                              item?.coursePayment[0]?.judul,
                              Discount(item?.coursePayment[0]?.price)
                            )
                          }
                          className="px-6 whitespace-nowrap bg-tersier text-black rounded-full w-fit hover:scale-90 transition-all  font-bold py-3"
                        >
                          Bantuan Admin
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#e5e9f2] rounded-3xl scale-75  p-2 max-sm:flex gap-x-2 justify-center hidden w-6/12">
          <p>Swipe to see more</p>
          <FiArrowRight size={22} />
        </div>
      </section>
    </div>
  );
}
