import React, { useEffect, useRef } from "react";
import { Typography } from "@/common/componnents/typography/Typography";
import * as s from "./DateDisplay.module.scss";
import { gsap } from "gsap";

type Props = {
  date: string;
};
export const DateDisplay = ({ date }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousDateRef = useRef<string>("");

  useEffect(() => {
    const previousDate = previousDateRef.current;
    const currentDate = date;

    // Если дата изменилась, запускаем анимацию
    if (previousDate && previousDate !== currentDate) {
      animateChangedParts(previousDate, currentDate);
    }

    // Сохраняем текущую дату как предыдущую
    previousDateRef.current = currentDate;
  }, [date]);

  /**
   * Анимация изменения только тех частей, которые отличаются.
   * @param previousDate Предыдущая дата
   * @param currentDate Текущая дата
   */
  const animateChangedParts = (previousDate: string, currentDate: string) => {
    const prevParts = previousDate.split("-");
    const currParts = currentDate.split("-");

    currParts.forEach((part, index) => {
      const element = containerRef.current?.querySelectorAll(`.${s.datePart}`)[index];

      if (element && part !== prevParts[index]) {
        gsap.fromTo(
          element,
          { textContent: prevParts[index] || 0 }, // Начинаем с предыдущей части
          {
            textContent: part,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 }, // Округляем числа
          },
        );
      }
    });
  };

  return (
    <section className={s.dateDisplay} ref={containerRef}>
      {date.split("-").map((datePart, i) => (
        <Typography className={s.datePart} variant={"h2"} key={`${datePart}-${i}`} data-target={datePart}>
          {datePart}
        </Typography>
      ))}
    </section>
  );
};
