import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function TestimoniItems({ isReverse }) {
  return (
    <motion.div
      animate={{
        transform: isReverse ? "translateY(-300px)" : "translateY(300px)",
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1,
      }}
      className={clsx(isReverse ? "mt-[0]" : "mt-[-300px] ")}
    >
      <div className="w-full space-y-4  ">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="w-full bg-[#fff] rounded-2xl h-[150px]">
            <h4 className="text-xl font-bold">Always to Update</h4>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
