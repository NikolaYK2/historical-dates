import React, { useEffect, useRef, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import * as s from "./Slider.module.scss";

import { Typography } from "@/common/componnents/typography/Typography";
import { clsx } from "clsx";
import { VectorSVG } from "@/common/componnents/images/svg";
import { DateDataItem } from "@/feachers/lib/useHistoricalData";

type Props = {
  slides: DateDataItem[];
};
export const Slider = ({ slides }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlides, setCurrentSlides] = useState(slides); // Управляем текущими данными

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const tl = gsap.timeline();

      // Этап затемнения
      tl.to(container, {
        opacity: 0,
        duration: 0.5, // Длительность затемнения
        ease: "power2.inOut",
        onComplete: () => {
          // Обновление данных после завершения затемнения
          setCurrentSlides(slides);
        },
      });

      // Этап появления
      tl.to(container, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [slides]);

  return (
    <div className={s.container} ref={containerRef}>
      <Swiper
        modules={[Navigation, Pagination]}
        watchSlidesProgress={true}
        slideVisibleClass="swiper-slide-visible"
        navigation={{
          prevEl: ".swiperPrev",
          nextEl: ".swiperNext",
          disabledClass: "swiperDisabled",
        }}
        pagination={{
          modifierClass: ".swiper-pagination",
          bulletClass: "bullet",
          bulletActiveClass: "bulletActive",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          910: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className={clsx(s.swiper)}
        scrollbar={{ draggable: true }}
      >
        {currentSlides.map((slide) => (
          <SwiperSlide className={s.swiperBlock} key={slide.id}>
            <Typography className={s.year} variant={"h3"}>
              {slide.year}
            </Typography>
            <Typography variant={"pReg"}>{slide.description}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={clsx("swiperPrev")}>
        <VectorSVG width={5} height={10} />
      </button>
      <button className={clsx("swiperNext")}>
        <VectorSVG className={s.nextBtn} width={5} height={10} />
      </button>
    </div>
  );
};
