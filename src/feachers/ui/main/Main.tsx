import React from "react";
import * as s from "./Main.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { SpinnerNav } from "@/feachers/ui/main/spinnerNav";
import { DateDisplay } from "@/feachers/ui/main/dateDisplay";

export const Main = () => {
  return (
    <main className={s.main}>
      <section className={s.container}>
        <Typography className={s.h1} variant={"h1"}>
          Исторические даты
        </Typography>
        <SpinnerNav />
        <DateDisplay />
      </section>
    </main>
  );
};
