/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SideBarCourse from "../components/organisms/SideBarCourse";
import { FiArrowRight } from "react-icons/fi";
import { useSession } from "next-auth/react";
import {
  getPaymentUser,
  getStatusClass,
  updateCoursePayment,
} from "@/lib/service";
import { Discount } from "@/lib/Discount";
import moment from "moment";
import SubHeading from "../components/atoms/SubHeading";
import Head from "next/head";
import { Currency } from "@/lib/Currency";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Transactions() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  useEffect(() => {
    getStatusClass(email).then((result) => {
      const sort = result?.sort((a, b) => {
        return new Date(b?.updatedAt) - new Date(a?.updatedAt);
      });
      setData(sort?.reverse());

      console.log(result);

      result?.forEach((item) => {
        fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: item?.idPayment,
          }),
        }).then((res) => {
          res.json().then((res) => {
            if (
              res?.transaction_status === "expire" ||
              res?.transaction_status === "cancel"
            ) {
              updateCoursePayment({
                id: item?.id,
                email: email,
                payment: "PaymentFailed",
              });
            }
          });
        });
      });
    });
  }, [email, setData]);

  const handleDelete = async (idPayment) => {
    const onDelete = await fetch("/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idPayment,
      }),
    });
    const resDelete = await onDelete.json();
    console.log(resDelete);
    if (resDelete?.status_code == "200") {
      MySwal.fire({
        icon: "success",
        confirmButtonColor: "#1759D7",
        title: "Sukses!",
        text: "Berhasil Ubah Bank",
      }).then(() => {
        getPaymentUser(email).then((result) => {
          const filter = result?.filter(
            (item) => item?.idPayment === idPayment
          );
          updateCoursePayment({
            id: filter[0]?.id,
            email: email,
            payment: "PaymentFailed",
          }).then((res) => {
            if (filter[0]?.bundelPayment[0]?.slug) {
              window.open(
                `/bundle/${filter[0]?.bundelPayment[0]?.slug}`,
                "_self"
              );
            } else {
              window.open(`/kelas/${filter[0]?.coursePayment[0]?.id}`, "_self");
            }
          });
        });
      });
    } else {
      MySwal.fire({
        icon: "error",
        confirmButtonColor: "#1759D7",
        title: "Gagal Mengubah Bank!",
        text: "Anda Belum Klik Bank di Proses Lanjut",
      });
    }
  };

  const handleFollowUp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=6289509046152&text=hi%20mimin%20saya%20Saya%20membutuhkan%20bantuan...`,
      "_blank"
    );
  };

  return (
    <div className=" flex gap-x-8  container mx-auto ">
      <Head>
        <title>Transactions | Level-Up Academy</title>
      </Head>
      <SideBarCourse />
      <section className="mt-[60px] w-full overflow-hidden ">
        <div className="space-y-3">
          <SubHeading size="3xl">Transactions</SubHeading>
          <p className="max-md:text-center  leading-relaxed">
            Daftar pembelian kelas dan ebook premium anda
          </p>
        </div>
        <div className=" overflow-x-scroll ">
          <table className="table mt-8 ">
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
                      src={
                        item?.coursePayment[0]?.gambar?.url ||
                        item?.bundelPayment[0]?.coverGambar?.url
                      }
                      className="rounded-xl min-w-[90px] w-[100px]"
                      alt="cover"
                    />
                  </td>
                  <td>
                    {item?.coursePayment[0]?.judul ||
                      item?.bundelPayment[0]?.judul}
                  </td>
                  <td>
                    {Currency(
                      Discount(
                        item?.coursePayment[0]?.price ||
                          item?.bundelPayment[0]?.harga
                      )
                    )}
                  </td>
                  <td>{moment(item?.time).format(" MMMM DD YYYY HH:mm")}</td>
                  <td>
                    {item?.statusPayment === "paymentPending" ? (
                      <div className="flex scale-90 items-center gap-x-2 text-[#FFC947] font-medium animate-pulse whitespace-nowrap">
                        <Image
                          src="/icon/pending.svg"
                          width={24}
                          height={24}
                          alt="check"
                        />
                        Menunggu Pembayaran
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
                  <td className="flex gap-2 items-center max-sm:flex-wrap">
                    {item?.statusPayment === "paymentPending" && (
                      <>
                        {item?.linkPayment && (
                          <button
                            onClick={() => {
                              window.open(item?.linkPayment, "_blank");
                            }}
                            className="px-6 whitespace-nowrap bg-prime text-[#fff] rounded-full w-fit hover:scale-90 transition-all  font-bold py-3"
                          >
                            Proses Lanjut
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(item?.idPayment)}
                          className="px-6 whitespace-nowrap bg-[#DC3545] text-[#fff] rounded-full w-fit hover:scale-90 transition-all  font-bold py-3"
                        >
                          Ubah Bank
                        </button>

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
