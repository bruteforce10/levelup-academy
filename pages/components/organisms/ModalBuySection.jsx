import { Currency } from "@/lib/Currency";
import { Discount } from "@/lib/Discount";
import { MyContext } from "@/lib/context/AppContext";
import { getPromo } from "@/lib/service";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbDiscount } from "react-icons/tb";

export default function ModalBuySection({
  handleBuy,
  price,
  loading,
  uniqeRandom,
}) {
  const [kodePromo, setKodePromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [statusPromo, setStatusPromo] = useState({
    error: false,
    message: "",
    isAvalaibe: false,
  });
  const { setPriceCheckout } = MyContext();

  const handlePromo = async () => {
    setDiscount(0);
    setStatusPromo({
      error: false,
      message: "",
      isAvalaibe: false,
    });
    if (kodePromo === "") {
      setStatusPromo({
        error: true,
        message: "Kode promo tidak diisi",
      });
      return;
    }

    const getResultPromo = await getPromo(kodePromo);

    if (getResultPromo.length == 0) {
      setStatusPromo({
        error: true,
        message: "Kode promo tidak ditemukan",
      });
      return;
    }
    setStatusPromo({
      error: false,
      message: `Kode promo tersedia, tersisa ${getResultPromo[0]?.quantity} kupon`,
      isAvalaibe: true,
    });
    setDiscount(getResultPromo[0]?.discount);
    setPriceCheckout({
      discount: getResultPromo[0]?.discount,
      quantity: getResultPromo[0]?.quantity,
      promo: getResultPromo[0]?.id,
    });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box space-y-6 max-md:pb-12">
        <div className="space-y-2">
          <h4 className="font-extrabold text-xl">Metode Pembayaran</h4>
          <p className="text-sm font-light">
            pembayaran bisa melalui Virtual Bank Account, Gopay, Dana atau QRIS{" "}
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-extrabold text-md ">Kode Promo</h5>

          <div className="form-control w-full relative">
            <div className="text-2xl absolute top-3 left-3 text-[#A0A7B3]">
              <TbDiscount />
            </div>
            <input
              type="text"
              onChange={(e) => setKodePromo(e.target.value.toUpperCase())}
              value={kodePromo}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handlePromo();
                }
              }}
              className="input bg-[#E5E9F2] w-full rounded-full pl-10"
              placeholder="Masukkan kode promo agar lebih hemat"
            />
          </div>
          <div className="w-full flex justify-between">
            {statusPromo.error && (
              <p className="text-red-500 text-sm italic">
                {statusPromo.message}
              </p>
            )}
            {statusPromo.isAvalaibe && (
              <p className="text-green-500 text-xs italic">
                {statusPromo.message}
              </p>
            )}
            <button
              onClick={handlePromo}
              className="bg-[#E5E9F2] ml-auto px-4 py-2 rounded-full text-md font-bold text-deep"
            >
              Gunakan Kode Promo
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="font-extrabold text-md ">Payment details</h5>
          <div className="flex justify-between">
            <p>Harga Normal</p>
            <p className="font-bold text-red-500 line-through animate-pulse">
              {Currency(price)}
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Harga Kelas{" "}
              <div className="badge badge-neutral bg-prime border-prime text-white">
                Discount
              </div>
            </p>
            <p className="font-medium ">{Currency(Discount(price))}</p>
          </div>
          <div className="flex justify-between">
            <p>Kode Unik</p>
            <p className="text-green-400">
              <span>-</span>Rp {uniqeRandom}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p>Service fee per student </p>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Biaya untuk fee payment gateway dan platform 
              services lainnya"
              >
                <button className="font-bold w-6 text-green-600 rounded-full bg-green-100">
                  ?
                </button>
              </div>
            </div>
            <p className="text-green-400">
              <span>+</span>Rp 2.500
            </p>
          </div>
          {statusPromo.isAvalaibe && (
            <div className="flex justify-between">
              <p className="font-bold">Potongan Promo %</p>
              <p className="text-green-400">
                -{Currency(Discount(price) * (discount / 100))}
              </p>
            </div>
          )}
          <div className="flex justify-between">
            <p>Total transfer</p>
            <p className="font-extrabold">
              {Currency(
                Discount(price) +
                  2500 -
                  uniqeRandom -
                  Discount(price) * (discount / 100)
              )}
            </p>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog" className="flex justify-center w-full">
            <button className="absolute top-3 right-3">
              <IoClose size={28} />
            </button>
          </form>
        </div>
        {loading ? (
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
            className="bg-prime p-3 w-full rounded-full text-md font-extrabold text-white border-4 border-white hover:border-[#a1b7e7] transition-all"
          >
            Bayar & Gabung Kelas
          </button>
        )}
      </div>
    </dialog>
  );
}
