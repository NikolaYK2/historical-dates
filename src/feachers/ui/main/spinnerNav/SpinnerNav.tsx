import React, { useState } from "react";
import * as s from "./SpinnerNav.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { clsx } from "clsx";

export type Button = {
  id: number;
  range: string;
  category: string;
};
type Props = {
  item: Button[];
  setDateDisplay: (value: string) => void;
};
export const SpinnerNav = ({ item, setDateDisplay }: Props) => {
  const [activeBtn, setActiveBtn] = useState<number>(6); // Активная кнопка по умолчанию (например, index === 5)

  const handleClickActive = (id: number, range: string) => {
    setActiveBtn(id);
    setDateDisplay(range);
  };
  return (
    <section
      className={s.circularNav}
      style={{
        transform: `translate(-50%, -50%) rotate(${-(activeBtn * 60 + 60)}deg)`, // Вращаем секцию так, чтобы активная кнопка оказалась сверху
      }}
    >
      {item.map((btn) => (
        <button
          className={clsx(s.circul, btn.id === activeBtn && s.circulOpen)}
          key={btn.id}
          style={{
            transform: `translate(-50%, -50%) rotate(${btn.id * 60}deg) translateX(265px)`,
          }}
          onClick={() => handleClickActive(btn.id, btn.range)}
        >
          <Typography
            className={s.circulItem}
            variant={"pReg"}
            style={{
              transform: `rotate(${-(btn.id * 60 - activeBtn * 60 - 60)}deg)`, // Индивидуальная компенсация
            }}
          >
            <span className={s.item}>{btn.id}</span>
            {btn.id === activeBtn && <span className={s.category}>{btn.category}</span>}
          </Typography>
        </button>
      ))}
    </section>
  );
};
