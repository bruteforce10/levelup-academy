import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import useSectionView from "@/lib/hook";

export default function ImageSliderSection({ courosel }) {
  const [showImage, setShowImage] = useState(20);
  const { ref } = useSectionView("Gallery", 1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowImage(2);
      } else {
        setShowImage(20);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div id="Gallery" className="scroll-mt-[180px]" ref={ref}>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {courosel?.map((item, index) => {
          if (index < showImage) {
            return (
              <a
                href={item.url}
                key={index}
                className="lg:w-3/12  md:w-5/12 h-full border-[3.2px] border-white transition-all hover:border-prime rounded-2xl overflow-hidden"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="  object-cover "
                  src={item.url}
                  alt={item.fileName}
                />
              </a>
            );
          }
        })}
      </LightGallery>
      <button
        onClick={() => {
          setShowImage(20);
          if (showImage === 20) {
            setShowImage(2);
          }
        }}
        className="px-6 max-md:flex gap-x-2 items-center mx-auto mt-4 hidden bg-second rounded-full text-deep font-bold py-3"
      >
        Lainnya
        {showImage < 20 ? (
          <BsArrowDownCircle size={20} />
        ) : (
          <BsArrowUpCircle size={20} />
        )}
      </button>
    </div>
  );
}
