/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import { FiArrowRight } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { getPaymentUser } from "@/lib/service";
import { Discount } from "@/lib/Discount";
import moment from "moment";
import SubHeading from "../components/atoms/SubHeading";
import Head from "next/head";

export default function Transactions() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    getPaymentUser(email).then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  const handleFollowUp = (title, price) => {
    window.open(
      `https://api.whatsapp.com/send?phone=628816101512&text=hi%20mimin%20saya%20dengan%20email:%20${email}%20ingin%20follow%20up%20pembayaran%20produk%20${title}%20ini%20dengan%20harga%20${price}`,
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
                  <td>{Discount(item?.coursePayment[0]?.price)}</td>
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
                  <td>
                    {item?.statusPayment === "paymentPending" && (
                      <button
                        onClick={() =>
                          handleFollowUp(
                            item?.coursePayment[0]?.judul,
                            Discount(item?.coursePayment[0]?.price)
                          )
                        }
                        className="px-6 whitespace-nowrap bg-prime rounded-full text-[#fff] w-full hover:scale-90 transition-all  font-bold py-3"
                      >
                        Bantuan Admin
                      </button>
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
