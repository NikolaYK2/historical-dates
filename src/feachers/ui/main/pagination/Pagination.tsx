import React from "react";
import { VectorSVG } from "@/common/componnents/images/svg";
import { Typography } from "@/common/componnents/typography/Typography";
import * as s from "./Pagination.module.scss";

type Props = {
  intervals: number;
  setIndexIntervals: (intervals: number) => void;
};
export const Pagination = ({ intervals, setIndexIntervals }: Props) => {
  const handlePrev = () => {
    // Уменьшаем индекс, если он больше 1
    if (intervals > 1) {
      setIndexIntervals(intervals - 1);
    }
  };

  const handleNext = () => {
    // Увеличиваем индекс, если он меньше 6 (количество интервалов)
    if (intervals < 6) {
      setIndexIntervals(intervals + 1);
    }
  };

  return (
    <section className={s.container}>
      <Typography className={s.num}>{String(intervals).padStart(2, "0")}/06</Typography>
      <section className={s.blockBtn}>
        <button className={s.btn} onClick={handlePrev} disabled={intervals === 1}>
          <VectorSVG width={7} height={13} />
        </button>
        <button className={s.btn} onClick={handleNext} disabled={intervals === 6}>
          <VectorSVG width={7} height={13} />
        </button>
      </section>
    </section>
  );
};
