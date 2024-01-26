import React, { useEffect } from "react";
import NavbarPage from "./components/navbar";
import { usePathname } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import ModalLogin from "./components/organisms/ModalLogin";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const params = usePathname();
  const { query } = useRouter();
  const [isShow, setShow] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bg-[#F6F8FD]  ${jakarta.className} `}>
      {params !== "/auth/login" &&
        params !== "/auth/register" &&
        params !== "/auth/password/reset" &&
        params !== `/auth/password/reset/${query.slug}` &&
        params !== "/auth/register/upload-profile" && (
          <NavbarPage params={params} />
        )}
      <ModalLogin />
      {children}
      {params !== "/auth/login" &&
        params !== "/auth/register" &&
        params !== "/auth/password/reset" &&
        params !== `/auth/password/reset/${query.slug}` &&
        params !== "/auth/register/upload-profile" && <Footer />}

      {(params == `/kelas/${query.slug}` || params == "/kelas") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isShow ? 1 : 0 }}
          onClick={() => {
            {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
                duration: 500,
              });
            }
          }}
          className="fixed bottom-28 right-16 max-sm:right-8 cursor-pointer  bg-[#fff] p-4 rounded-full shadow-md"
        >
          <FaArrowUp size={24} className="text-gray-700" />
        </motion.div>
      )}
    </div>
  );
}
