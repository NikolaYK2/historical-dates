import React from "react";
import * as s from "./Main.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";

export const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.container}>
        <Typography className={s.h1} variant={"h1"}>
          Исторические даты
        </Typography>
      </section>
    </main>
  );
};
