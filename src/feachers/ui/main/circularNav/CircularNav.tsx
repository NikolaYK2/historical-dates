import React from "react";
import * as s from "./CircularNav.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";

type Button = {
  id: number;
  name: string;
};
const BUTTON: Button[] = [
  {
    id: 1,
    name: "BUTTON",
  },
  {
    id: 2,
    name: "BUTTON",
  },
  {
    id: 3,
    name: "BUTTON",
  },
  {
    id: 4,
    name: "BUTTON",
  },
  {
    id: 5,
    name: "BUTTON",
  },
  {
    id: 6,
    name: "BUTTON",
  },
];
export const CircularNav = () => {
  return (
    <section className={s.circularNav}>
      {BUTTON.map((btn, index) => (
        <button
          className={s.circul}
          key={btn.id}
          style={{
            transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(265px)`,
          }}
        >
          <Typography
            className={s.circulItem}
            variant={"pReg"}
            style={{
              transform: `rotate(-${index * 60}deg)`,
            }}
          >
            {btn.id}
          </Typography>
        </button>
      ))}
    </section>
  );
};
