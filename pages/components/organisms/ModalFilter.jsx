import React from "react";
import { motion, useInView } from "framer-motion";

export default function ModalFilter({ refComponent }) {
  const isInView = useInView(refComponent);
  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        onClick={() => document.getElementById("my_modal_3").showModal()}
        animate={{
          opacity: isInView ? 1 : 0,
          transition: { duration: 0.3 },
        }}
        className="px-4 fixed bottom-12 inset-x-0 w-[150px] md:hidden mx-auto text-lg bg-second rounded-full text-deep font-bold py-2"
      >
        Filter
      </motion.button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="space-y-8">
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
      </dialog>
    </>
  );
}
