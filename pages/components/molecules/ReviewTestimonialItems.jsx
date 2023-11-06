import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRating from "../atoms/StarRating";
import { motion } from "framer-motion";

export default function ReviewTestimonialItems({ data }) {
  const [isReview, setReview] = useState(3);
  return (
    <div className="space-y-6">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-4  mt-8">
        {data?.length === 0 && <p className=" text-deep">Belum ada review</p>}
        {data?.map((item, index) => {
          if (index < isReview) {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                key={index}
                className="bg-[#fff] p-6 rounded-2xl space-y-8"
              >
                <div className="flex gap-4 items-center">
                  {item.accounts[0].gambar ? (
                    <Image
                      src={item.accounts[0].gambar.url}
                      alt="avatar"
                      className="rounded-full"
                      width={55}
                      height={55}
                    />
                  ) : (
                    <Image
                      src="/icon/profile.svg"
                      alt="avatar"
                      width={55}
                      height={55}
                    />
                  )}

                  <div className="flex flex-col space-y-1">
                    <p className="text-lg font-extrabold">
                      {item.accounts[0].name}
                    </p>
                    <span className="text-sm text-light opacity-60">
                      {item.accounts[0].goals
                        ? item.accounts[0].goals
                        : "Lifetime Learner"}
                    </span>
                  </div>
                </div>
                <p>{item.ulasan}</p>
                <StarRating review={5} />
              </motion.div>
            );
          }
        })}
      </div>
      <div className=" w-full text-center mx-auto ">
        <button
          onClick={() => {
            setReview(20);
            if (isReview === 20) {
              setReview(3);
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
