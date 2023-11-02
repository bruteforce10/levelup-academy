import React, { useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SubHeading from "../components/atoms/SubHeading";
import CardClass from "../components/molecules/CardClass";
import ModalFilter from "../components/organisms/ModalFilter";

export default function ListClassSection() {
  const refObject = useRef(null);
  const [isScroll, setIsScroll] = React.useState("");

  React.useEffect(() => {
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
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>All</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Design</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Coding</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-xl font-extrabold">Sort</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Baru Rilis</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Terpopuler</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Sedang Promo</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-xl font-extrabold">Level</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Beginner Friendly</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>Intermediate</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="checkbox checkbox-warning" />
                <p>All Levels</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          ref={refObject}
          className="grid w-9/12 max-md:w-full gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <CardClass key={index} />
          ))}
        </div>
      </div>
      <ModalFilter refComponent={refObject} />
    </div>
  );
}