import React from "react";
import { Typography } from "@/common/componnents/typography/Typography";
import * as s from "./DateDisplay.module.scss";

type Props = {
  date: string;
};
export const DateDisplay = ({ date }: Props) => {
  return (
    <section className={s.dateDisplay}>
      {date.split("-").map((date) => (
        <Typography className={s.date} variant={"h2"} key={date}>
          {date}
        </Typography>
      ))}
    </section>
  );
};
