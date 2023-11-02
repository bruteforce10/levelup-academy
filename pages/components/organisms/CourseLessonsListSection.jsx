import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useSectionView from "@/lib/hook";

export default function CourseLessonsListSection() {
  const [showLessons, setShowLessons] = useState(3);
  const { ref } = useSectionView("Lessons", 1);

  return (
    <div className="space-y-8 ">
      <div className="space-y-4 scroll-mt-[180px]" ref={ref} id="Lessons">
        {[...Array(7)].map((_, index) => {
          if (index < showLessons) {
            return (
              <motion.details
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                key={index}
                className="collapse bg-base-200"
              >
                <summary className="collapse-title">
                  <div className="flex items-center gap-x-4">
                    <div className="text-gray-800 text-xl w-10 h-10 font-bold bg-white rounded-[22px] flex-col justify-center items-center gap-2 inline-flex">
                      {index + 1}
                    </div>
                    <span className="text-xl font-medium">Design Handoff</span>
                  </div>
                </summary>
                <div className="collapse-content space-y-4 mt-2 ">
                  <div className="flex gap-3 ml-3">
                    <Image
                      src={"/icon/play.svg"}
                      alt="play"
                      width={20}
                      height={20}
                    />
                    <span>Memulai Kelas</span>
                  </div>
                  <div className="flex gap-3 ml-3">
                    <Image
                      src={"/icon/play.svg"}
                      alt="play"
                      width={20}
                      height={20}
                    />
                    <span>Memulai Kelas</span>
                  </div>
                </div>
              </motion.details>
            );
          }
        })}
      </div>
      <div className=" w-full text-center mx-auto ">
        <button
          onClick={() => {
            setShowLessons(20);
            if (showLessons === 20) {
              setShowLessons(3);
            }
          }}
          className="px-6 bg-[#E5E9F2] rounded-full  text-deep font-bold py-3 "
        >
          Load More Lessons
        </button>
      </div>
    </div>
  );
}
