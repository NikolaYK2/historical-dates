import React from "react";
import { Typography } from "@/common/componnents/typography/Typography";
import * as s from "./DateDisplay.module.scss";

const DATE = [2015, 2022];
export const DateDisplay = () => {
  return (
    <section className={s.dateDisplay}>
      {DATE.map((date) => (
        <Typography className={s.date} variant={"h2"}>
          {date}
        </Typography>
      ))}
    </section>
  );
};
