import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import GridTestimonials from "../atoms/GridTestimonials";
import { getComments } from "@/lib/service";

export default function TestimonialSection() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };
    handleResize();

    getComments().then((res) => {
      setData(res);
    });

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      grid={{
        rows: 2,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
    >
      {data &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <GridTestimonials data={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
