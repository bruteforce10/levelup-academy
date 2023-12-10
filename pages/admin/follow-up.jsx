import { Discount } from "@/lib/Discount";
import {
  getPaymentAll,
  getStatusClass,
  updateCoursePayment,
} from "@/lib/service";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function FollowUp() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    email: "",
    orderId: "",
  });
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [status, setStatus] = useState("paymentPending");

  useEffect(() => {
    getPaymentAll("pending").then((result) => {
      result?.forEach((item) => {
        item?.payment?.forEach((payment) => {
          fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: payment?.idPayment,
            }),
          }).then((res) => {
            res.json().then((res) => {
              if (
                res?.transaction_status === "expire" ||
                res?.transaction_status === "cancel"
              ) {
                console.log("bisa");
                updateCoursePayment({
                  id: payment?.id,
                  email: item?.email,
                  payment: "PaymentFailed",
                }).then((res) => {
                  getPaymentAll("pending").then((result) => {
                    setData(result);
                    console.log(result);
                  });
                });
              }
            });
          });
        });
      });
    });
  }, [email]);

  const onOrderId = (id) => {
    for (let item of data) {
      const filter = item?.payment?.filter((item) => item?.idPayment === id);
      if (filter?.length > 0) {
        setData([
          {
            email: item?.email,
            statusFollowup: item?.statusFollowup,
            payment: [filter[0]],
          },
        ]);
      }
    }
    setInputValue({
      ...inputValue,
      orderId: "",
    });
  };

  console.log(data);

  return (
    <div className="container px-8 mx-auto space-y-8">
      <div className="flex gap-4 max-sm:gap-4 items-center max-sm:flex-wrap">
        <div className="form-control w-4/12 max-sm:w-full">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            value={inputValue.email}
            placeholder="email"
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                email: e.target.value,
              });
              const filter = data?.filter((item) =>
                item?.email
                  ?.toLowerCase()
                  .includes(inputValue.email.toLowerCase())
              );
              setData(filter);
            }}
            onBlur={() => {
              getPaymentAll("pending").then((result) => {
                setData(result);
                setInputValue({
                  ...inputValue,
                  email: "",
                });
              });
            }}
            name="email"
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
        </div>
        <div className="form-control w-6/12  max-sm:w-full">
          <label className="label">
            <span className="label-text text-lg">Order-Id</span>
          </label>
          <input
            type="text"
            placeholder="Nomor Order-Id"
            value={inputValue.orderId}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                orderId: e.target.value,
              });
            }}
            name="orderId"
            className="input bg-[#E5E9F2] w-full rounded-full"
          />
        </div>
        <button
          onClick={() => onOrderId(inputValue.orderId)}
          className="btn w-2/12 bg-prime text-[#fff] rounded-full self-end"
        >
          Search Order Id
        </button>
      </div>
      <section>
        <div className="overflow-x-auto min-h-[400px] mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>
                  {" "}
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-4">
                      Follow Up
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                    >
                      <li>
                        <a
                          onClick={() => {
                            getPaymentAll("pending").then((result) => {
                              setData(result);
                            });
                          }}
                        >
                          False
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          setData(
                            data?.filter(
                              (item) => item?.statusFollowup === true
                            )
                          );
                        }}
                      >
                        <a>True</a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-4">
                      Payment
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                    >
                      <li>
                        <a
                          onClick={() => {
                            getPaymentAll("pending").then((result) => {
                              setData(result);
                              setStatus("paymentPending");
                            });
                          }}
                        >
                          Payment Pending
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          getPaymentAll("failed").then((result) => {
                            setData(result);
                            setStatus("PaymentFailed");
                          });
                        }}
                      >
                        <a>Payment Abort</a>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>Action</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <>
                  {item?.payment?.map((payment, index) => {
                    if (payment?.statusPayment === status) {
                      return (
                        <tr key={index}>
                          <td>{item?.email}</td>
                          <td>{String(item?.statusFollowup)}</td>
                          <td>{payment?.statusPayment}</td>
                          <td>
                            {status === "paymentPending" ? (
                              <button
                                disabled={
                                  item?.statusFollowup === true
                                    ? "disabled"
                                    : ""
                                }
                                onClick={() => {
                                  window.open(
                                    `https://wa.me/${
                                      item?.nomorWhatsapp
                                    }?text=Halo%20${
                                      item?.name
                                    }%2C%0A%0ALevel-Up%20Academy%20-%20Pemesanan%20mu%20kami%20terima%21%20%0A%0ATerima%20kasih%20sudah%20memesan%20kelas%20online%20di%20kami%2C%20berikut%20rincian%20pembeliannya%20%3A%0A%0AID%2FEmail%20akunmu%20%3A%20${
                                      item?.email
                                    }%0AKelas%20yang%20kamu%20pilih%20%3A%20${
                                      payment?.bundelPayment.length > 0
                                        ? payment?.bundelPayment[0]?.judul
                                        : payment?.coursePayment[0]?.judul
                                    }%0A%20%0ATotal%20pembayaran%20yang%20harus%20kamu%20bayar%20%3A%20Rp.${
                                      payment?.bundelPayment.length > 0
                                        ? Discount(
                                            payment?.bundelPayment[0]?.harga
                                          )
                                        : Discount(
                                            payment?.coursePayment[0]?.price
                                          )
                                    }%0A%0ASilahkan%20lakukan%20transfer%20melalui%20link%20ini%20%3A%0A%0A${
                                      payment?.linkPayment
                                    }%20%0A%0AKamu%20bisa%20melakukan%20transfer%20melalui%20ATM%2FMbanking%2FiBanking%2FGopay%2FOVO%2FDANA%2FLink%20ke%20nomor%20rekening%20di%20atas%0A%0Acatatan%0A%0A-%20Lakukan%20transfer%20maksimal%201x24%20Jam%20setelah%20menerima%20pesan%20ini.%0A-%20Pesanan%20akan%20terkonfirmasi%20Maksimal%20hingga%204%20Menit.%0A-%20Jika%20dalam%2030%20menit%20pesanan%20belum%20terkonfirmasi%2C%20silahkan%20mengirimkan%20bukti%20transfernya%20ke%20nomor%20WA%20ini%0A-%20Apabila%20transaksi%20kadaluarsa%2C%20bisa%20transaksi%20ulang%20kelasnya%20%0A%0ATerima%20kasih%2C%0A%0Akami%20tunggu%20kamu%20di%20kelas%20untuk%20%23LevelUpYourCareer%20bersama%20kami%20ya%0A%0ALevel-Up%20Academy%20Team`,
                                    "_blank"
                                  );
                                }}
                                className="btn px-6 whitespace-nowrap bg-prime text-[#fff] rounded-full hover:scale-90 transition-all  font-bold "
                              >
                                Follow Up
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  window.open(
                                    `https://wa.me/${
                                      item?.nomorWhatsapp
                                    }?text=Halo%20${
                                      item?.name
                                    }%2C%0A%0ASaya%20ingin%20memberitahukan%20bahwa%20pembayaran%20untuk%20kelas%20${
                                      payment?.bundelPayment.length > 0
                                        ? payment?.bundelPayment[0]?.judul
                                        : payment?.coursePayment[0]?.judul
                                    }%20Anda%20sudah%20kadaluarsa.%20Mohon%20untuk%20melakukan%20proses%20checkout%20kembali%20melalui%20link%20di%20bawah%20ini%3A%0A%0A${
                                      payment?.bundelPayment.length > 0
                                        ? `www.levelupclass.online/bundle/${payment?.bundelPayment[0]?.slug}`
                                        : `www.levelupclass.online/kelas/${payment?.coursePayment[0]?.id}`
                                    }%0A%0AJika%20Anda%20mengalami%20kendala%20atau%20memiliki%20pertanyaan%2C%20jangan%20ragu%20untuk%20menghubungi%20kami.%20Terima%20kasih%20atas%20perhatiannya.
                                  `
                                  );
                                }}
                                className="btn px-6 whitespace-nowrap bg-prime text-[#fff] rounded-full hover:scale-90 transition-all  font-bold "
                              >
                                Follow Up Kembali
                              </button>
                            )}
                          </td>
                          <td className="flex gap-4">
                            <Image
                              src={
                                payment?.bundelPayment.length > 0
                                  ? payment?.bundelPayment[0]?.coverGambar?.url
                                  : payment?.coursePayment[0]?.gambar?.url
                              }
                              alt="cover"
                              className="object-cover rounded-xl min-w-[90px] w-[100px]"
                              width={100}
                              height={100}
                            />
                            <h4 className="w-[300px]">
                              {" "}
                              {payment?.bundelPayment.length > 0
                                ? payment?.bundelPayment[0]?.judul
                                : payment?.coursePayment[0]?.judul}
                            </h4>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
