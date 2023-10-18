import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import FormLogin from "./FormLogin";

export default function ModalLogin() {
  return (
    <dialog id="my_modal_1" className="modal ">
      <div className="bg-white absolute flex gap-8  w-[60%] max-sm:w-[95%]  rounded-[30px] overflow-clip">
        <div className="md:w-5/12 hidden md:block">
          <img
            src="/cover-login.png"
            alt="logo"
            className="h-full object-cover"
          />
        </div>
        <div className="md:w-7/12 w-full py-8 pr-8 max-md:pl-8 max-md:ml-8 ">
          <FormLogin />
        </div>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost bg-[#E5E9F2] absolute right-[20px] text-lg top-[20px]">
            <AiOutlineClose />
          </button>
        </form>
      </div>
    </dialog>
  );
}
