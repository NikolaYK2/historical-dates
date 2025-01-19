import React, { useState } from "react";
import * as s from "./SpinnerNav.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { clsx } from "clsx";

type Button = {
  id: number;
  name: string;
};
const BUTTON: Button[] = [
  { id: 1, name: "BUTTON" },
  { id: 2, name: "BUTTON" },
  { id: 3, name: "BUTTON" },
  { id: 4, name: "BUTTON" },
  { id: 5, name: "BUTTON" },
  { id: 6, name: "BUTTON" },
];
export const SpinnerNav = () => {
  const [activeBtn, setActiveBtn] = useState<number>(6); // Активная кнопка по умолчанию (например, index === 5)

  const handleClickActive = (index: number) => {
    setActiveBtn(index);
  };
  return (
    <section
      className={s.circularNav}
      style={{
        transform: `translate(-50%, -50%) rotate(${-(activeBtn * 60 + 60)}deg)`, // Вращаем секцию так, чтобы активная кнопка оказалась сверху
      }}
    >
      {BUTTON.map((btn) => (
        <button
          className={clsx(s.circul, btn.id === activeBtn && s.circulOpen)}
          key={btn.id}
          style={{
            transform: `translate(-50%, -50%) rotate(${btn.id * 60}deg) translateX(265px)`,
          }}
          onClick={() => handleClickActive(btn.id)}
        >
          <Typography
            className={s.circulItem}
            variant={"pReg"}
            style={{
              transform: `rotate(${-(btn.id * 60 - activeBtn * 60 - 60)}deg)`, // Индивидуальная компенсация
            }}
          >
            {btn.id}
          </Typography>
        </button>
      ))}
    </section>
  );
};
