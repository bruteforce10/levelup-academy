import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import SubHeading from "../components/atoms/SubHeading";

export default function ListClassSection() {
  const [isScroll, setIsScroll] = React.useState("");
  const [valueScroll, setValueScroll] = React.useState(0);

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
    <motion.div
      layout
      transition={{ duration: 2 }}
      className={clsx("mt-14 space-y-20 ", isScroll && "sticky top-0")}
    >
      <SubHeading>
        Browse Kelas <br /> Sesuai Karir Kamu
      </SubHeading>
      <div className="flex ">
        <div className="w-3/12 space-y-10 h-[450px]  overflow-y-scroll ">
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
        </div>
      </div>
    </motion.div>
  );
}
