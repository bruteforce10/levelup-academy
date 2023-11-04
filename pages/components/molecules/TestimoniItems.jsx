import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

export default function TestimoniItems({ isReverse, data }) {
  return (
    <motion.div
      animate={{
        transform: isReverse ? "translateY(-375px)" : "translateY(700px)",
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1,
      }}
      className={clsx(isReverse ? "mt-[0] " : "mt-[-700px] ")}
    >
      <div className="w-full space-y-4  ">
        {data?.map((item, index) => {
          if (index < 5 && isReverse === false) {
            return (
              <div
                key={index}
                className="w-full bg-[#fff] rounded-2xl  space-y-6 p-4"
              >
                <h4 className="text-lg font-extrabold">{item?.title}</h4>
                <p className="text-md">{item?.description}</p>
                <div className="flex gap-2 items-center">
                  {!item?.account?.gambar ? (
                    <Image
                      src="/icon/profile.svg"
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src={item?.account?.gambar?.url}
                      alt="avatar"
                      width={40}
                      className="rounded-full w-10 h-10 object-cover"
                      height={40}
                    />
                  )}
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs font-extrabold">
                      {item?.account?.name}
                    </p>
                    <span className="text-xs text-light opacity-60">
                      {item?.account?.goals || "Lifetime Learner"}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else if (index > 5 && index < 10 && isReverse === true) {
            return (
              <div
                key={index}
                className="w-full bg-[#fff] rounded-2xl  space-y-6 p-4"
              >
                <h4 className="text-lg font-extrabold">{item?.title}</h4>
                <p className="text-md">{item?.description}</p>
                <div className="flex gap-2 items-center">
                  {!item?.account?.gambar ? (
                    <Image
                      src="/icon/profile.svg"
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src={item?.account?.gambar?.url}
                      alt="avatar"
                      width={40}
                      className="rounded-full w-10 h-10 object-cover"
                      height={40}
                    />
                  )}
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs font-extrabold">
                      {item?.account?.name}
                    </p>
                    <span className="text-xs text-light opacity-60">
                      {item?.account?.goals || "Lifetime Learner"}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </motion.div>
  );
}
