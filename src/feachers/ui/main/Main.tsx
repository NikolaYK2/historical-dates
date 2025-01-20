import React from "react";
import * as s from "./Main.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { SpinnerNav } from "@/feachers/ui/main/spinnerNav";
import { DateDisplay } from "@/feachers/ui/main/dateDisplay";
import { Slider } from "@/feachers/ui/main/slider/Slider";
import { Pagination } from "@/feachers/ui/main/pagination/Pagination";
import { useHistoricalData } from "@/feachers/lib";

export const Main = () => {
  const { dateDisplay, dateData, intervals, currentIntervalIndex, setCurrentIntervalIndex, setDateDisplay } =
    useHistoricalData();

  return (
    <main className={s.main}>
      <section className={s.container}>
        <Typography className={s.h1} variant={"h1"}>
          Historical dates
        </Typography>
        <SpinnerNav spinnerInterval={currentIntervalIndex} item={intervals} setDateDisplay={setDateDisplay} />
        <DateDisplay date={dateDisplay} />

        <section>
          <Pagination intervals={currentIntervalIndex} setIndexIntervals={setCurrentIntervalIndex} />
          <Slider slides={dateData[dateDisplay]} />
        </section>
      </section>
    </main>
  );
};
