import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MyContext } from "@/lib/context/AppContext";

export default function ModalFilter({ refComponent }) {
  const isInView = useInView(refComponent);
  const [isDesignChecked, setIsDesignChecked] = React.useState(false);
  const { dataClass, dataFilter, setDataFilter } = MyContext();
  useEffect(() => {
    if (dataClass) {
      setDataFilter(dataClass);
    }
  }, [dataClass]);

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
                    onChange={() => {
                      setDataFilter(dataClass);
                    }}
                    className="checkbox checkbox-warning"
                  />
                  <p>All</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter(
                              (item) => item.category === "design"
                            )
                          );
                    }}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Design</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter(
                              (item) => item.category === "coding"
                            )
                          );
                    }}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Coding</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter(
                              (item) => item.category === "videoEditor"
                            )
                          );
                    }}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Video Editor</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="text-xl font-extrabold">Sort</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter(
                              (item) => item.level === 0 || item.level === 1
                            )
                          );
                    }}
                    className="checkbox checkbox-warning"
                  />
                  <p>Beginner Friendly</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter((item) => item.level === 2)
                          );
                    }}
                    className="checkbox checkbox-warning"
                  />
                  <p>Intermediate</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    onChange={() => {
                      setIsDesignChecked(!isDesignChecked);
                      isDesignChecked
                        ? setDataFilter(dataClass)
                        : setDataFilter(
                            dataClass.filter((item) => item.level === 3)
                          );
                    }}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <p>Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
