import React from "react";
import Heading from "../components/heading";
import SubHeading from "../components/atoms/SubHeading";
import Image from "next/image";
import { categoryClass } from "@/lib/data";
import CardClass from "../components/molecules/CardClass";
import Filter from "../components/organisms/Filter";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function KelasOnline() {
  const [isScroll, setIsScroll] = React.useState(false);
  const [valueScroll, setValueScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setTimeout(() => {
          setIsScroll(true);
          setValueScroll(window.scrollY);
        }, 3000);
        if (window.scrollY > valueScroll) {
          setIsScroll(false);
          setValueScroll(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 container mt-[60px] mx-auto h-[3000px] ">
      <div>
        <Heading
          tag={"#LevelUpYourCareer"}
          judul={<span>Katalog Kelas</span>}
          align={"sm:text-start"}
        />
        <p className="text-lg font-medium -mt-6 leading-relaxed">
          Level-Up Academy menyediakan Kelas yang sesuai <br /> bidang kamu
          minati dan dengan kelas ramah untuk pemula
        </p>
      </div>
      <div className="mt-14 space-y-6 ">
        <SubHeading>Popular Category</SubHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  max-sm:gap-y-4 md:gap-4 ">
          {categoryClass.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff] shadow-sm rounded-3xl flex cursor-pointer  items-center justify-start gap-x-6  px-6 py-5 "
            >
              <Image src={item.icon} alt="icon" className="w-[75px]" />
              <h4 className="font-extrabold text-xl">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 space-y-6">
        <SubHeading>Terbaru Rilis</SubHeading>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <CardClass />
          <CardClass />
          <CardClass />
          <CardClass />
        </div>
      </div>
      <motion.div
        layout
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 3 },
        }}
        className={clsx(
          "mt-14 space-y-20  block sticky transition-all   ",
          isScroll && "top-20 "
        )}
      >
        <SubHeading>
          Browse Kelas <br /> Sesuai Karir Kamu
        </SubHeading>
        <div className="flex ">
          <div className="w-3/12 space-y-10 h-[450px] overflow-y-scroll ">
            <div className="space-y-6">
              <h5 className="text-xl font-extrabold">Category</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>All</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Design</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Coding</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="text-xl font-extrabold">Sort</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Baru Rilis</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Terpopuler</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Sedang Promo</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="text-xl font-extrabold">Level</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Beginner Friendly</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Intermediate</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>All Levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
