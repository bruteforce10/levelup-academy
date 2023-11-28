/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="mt-18  md:px-[7rem] px-8 py-20">
      <div className="border-[.2px] mb-[3rem]  border-[#E5E9F2] w-full"></div>
      <footer className="footer   text-deep-content ">
        <aside className="space-y-8">
          <img src="/img/logo-only.png" alt="logo" width={80} height={80} />
          <p className="leading-relaxed text-md max-w-[450px]">
            <strong>Level Up</strong> adalah sebuah platform edukasi online
            khusus di bidang desain dan startup yang didirikan pada Januari
            2020.
          </p>
        </aside>
        <nav className="space-y-8">
          <header className="text-deep text-md font-semibold">
            Social Media :
          </header>
          <div className="grid grid-flow-col gap-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 font-medium hover:text-second transition-all"
                >
                  <AiOutlineInstagram size={24} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={"https://api.whatsapp.com/send?phone=6285888139106"}
                  className="flex items-center gap-3 font-medium hover:text-second transition-all"
                >
                  <AiOutlineWhatsApp size={24} /> Whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
      <div className="border-[.2px] my-[3rem]   border-[#E5E9F2] w-full"></div>
      <p className="text-sm text-center font-semibold opacity-50">
        © 2023 Level-Up Academy. All rights reserved.
      </p>
    </div>
  );
}
