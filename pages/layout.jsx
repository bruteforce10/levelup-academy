import React from "react";
import NavbarPage from "./components/navbar";
import { usePathname } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import ModalLogin from "./components/organisms/ModalLogin";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const params = usePathname();
  return (
    <div className={`bg-[#F6F8FD]  ${jakarta.className} `}>
      {params !== "/auth/login" &&
        params !== "/auth/register" &&
        params !== "/auth/register/upload-profile" && (
          <NavbarPage params={params} />
        )}
      <ModalLogin />
      {children}
    </div>
  );
}
