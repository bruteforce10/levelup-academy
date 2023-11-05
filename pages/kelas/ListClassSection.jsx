import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SubHeading from "../components/atoms/SubHeading";
import CardClass from "../components/molecules/CardClass";
import ModalFilter from "../components/organisms/ModalFilter";
import { MyContext } from "@/lib/context/AppContext";

export default function ListClassSection() {
  const refObject = useRef(null);
  const { dataClass } = MyContext();
  const [isScroll, setIsScroll] = React.useState("");
  const [isDesignChecked, setIsDesignChecked] = React.useState(false);
  const [dataFilter, setDataFilter] = React.useState(dataClass);

  useEffect(() => {
    if (dataClass) {
      setDataFilter(dataClass);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
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
    <div className="mt-14 space-y-20 max-md:space-y-10  h-full">
      <SubHeading>
        Browse Kelas <br /> Sesuai Karir Kamu
      </SubHeading>
      <div className="flex gap-8 justify-center">
        <motion.div
          layout
          transition={{ duration: 1, delay: 0.2 }}
          className={clsx(
            "w-3/12 space-y-10 h-[450px] max-md:hidden overflow-y-scroll ",
            isScroll && "sticky top-20"
          )}
        >
          <div className="space-y-6">
            <h5 className="text-xl font-extrabold">Category</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  onChange={() => {
                    setDataFilter(dataClass);
                  }}
                  type="checkbox"
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
                          dataClass.filter((item) => item.category === "design")
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
                          dataClass.filter((item) => item.category === "coding")
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
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsDesignChecked(!isDesignChecked);
                    isDesignChecked
                      ? setDataFilter(dataClass)
                      : setDataFilter(
                          dataClass.filter(
                            (item) => item.category === "industrial"
                          )
                        );
                  }}
                  className="checkbox checkbox-warning"
                />
                <p>Industrial</p>
              </div>
              <div className="flex items-center gap-4">
                <input
                  onChange={() => {
                    setIsDesignChecked(!isDesignChecked);
                    isDesignChecked
                      ? setDataFilter(dataClass)
                      : setDataFilter(
                          dataClass.filter(
                            (item) => item.category === "selfImprovement"
                          )
                        );
                  }}
                  type="checkbox"
                  className="checkbox checkbox-warning"
                />
                <p>Self Improvement</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-xl font-extrabold">Level</h5>
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
                  onChange={() => {
                    setIsDesignChecked(!isDesignChecked);
                    isDesignChecked
                      ? setDataFilter(dataClass)
                      : setDataFilter(
                          dataClass.filter((item) => item.level === 2)
                        );
                  }}
                  type="checkbox"
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
        </motion.div>
        <div
          ref={refObject}
          className="grid w-9/12 max-md:w-full gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {dataFilter.length === 0 && (
            <div className="w-full col-span-2 text-center">
              <h5 className="text-xl ">Kelas Belum Tersedia</h5>
            </div>
          )}
          {dataFilter.map((item, index) => (
            <CardClass key={index} data={item} />
          ))}
        </div>
      </div>
      <ModalFilter refComponent={refObject} />
    </div>
  );
}
