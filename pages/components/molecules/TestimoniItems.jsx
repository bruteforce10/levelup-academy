import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

export default function TestimoniItems({ isReverse }) {
  return (
    <motion.div
      animate={{
        transform: isReverse ? "translateY(-550px)" : "translateY(550px)",
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1,
      }}
      className={clsx(isReverse ? "mt-[0] " : "mt-[-550px] ")}
    >
      <div className="w-full space-y-4  ">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#fff] rounded-2xl  space-y-6 p-4"
          >
            <h4 className="text-lg font-extrabold">Always to Update</h4>
            <p className="text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
              nesciunt!
            </p>
            <div className="flex gap-2 items-center">
              <Image
                src="/icon/profile.svg"
                alt="avatar"
                width={40}
                height={40}
              />
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-extrabold">Firdi Audi</p>
                <span className="text-xs text-light opacity-60">
                  Fullstack Developer
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
