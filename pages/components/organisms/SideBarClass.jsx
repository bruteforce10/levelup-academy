import { MyContext } from "@/lib/context/AppContext";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SideBarClass() {
  const { activeSection } = MyContext();
  const [isScroll, setIsScroll] = React.useState("");
  const navList = [
    "About",
    "Gallery",
    "Main Topic",
    "Tools",
    "Lessons",
    "Reviews",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTimeout(() => {
          setIsScroll(true);
        }, 300);
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll, setIsScroll]);

  return (
    <motion.div
      layout
      transition={{ duration: 1, delay: 0.5 }}
      className={clsx(
        "min-w-[200px] max-md:hidden  h-fit max-w-[500px] py-[38px] px-[32px] bg-[#fff] rounded-2xl flex-col justify-start items-start gap-[34px] inline-flex",
        isScroll && "sticky top-32"
      )}
    >
      {navList.map((item, index) => (
        <Link
          href={`#${item}`}
          key={index}
          className={clsx(
            "text-black text-opacity-100 text-md font-semibold ",
            activeSection === item ? "text-opacity-100" : "text-opacity-40"
          )}
        >
          {item}
        </Link>
      ))}
      <Link
        href={"#buy"}
        className="px-[12px] w-full cursor-pointer py-[9px] bg-blue-700 rounded-[26px] justify-center items-start inline-flex"
      >
        <div className="text-white text-md font-bold  ">Beli Kelas</div>
      </Link>
    </motion.div>
  );
}
