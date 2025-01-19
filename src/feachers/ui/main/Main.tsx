import React, { useState } from "react";
import * as s from "./Main.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { SpinnerNav } from "@/feachers/ui/main/spinnerNav";
import { DateDisplay } from "@/feachers/ui/main/dateDisplay";

export const Main = () => {
  const [intervals, setIntervals] = useState([
    { id: 1, range: "1690-1696", category: "Science" },
    { id: 2, range: "1792-1798", category: "Art" },
    { id: 3, range: "1884-1990", category: "History" },
    { id: 4, range: "2003-2008", category: "Technology" },
    { id: 5, range: "2009-2014", category: "Culture" },
    { id: 6, range: "2015-2020", category: "Politics" },
  ]);
  const [dateDisplay, setDateDisplay] = useState(intervals[5].range);

  const [dateData, setDateData] = useState({
    "1690-1696": [
      { id: 1, value: 1690 },
      { id: 2, value: 1691 },
      { id: 3, value: 1692 },
      { id: 4, value: 1693 },
      { id: 5, value: 1694 },
      { id: 6, value: 1695 },
    ],
    "1792-1798": [
      { id: 1, value: 1792 },
      { id: 2, value: 1793 },
      { id: 3, value: 1794 },
      { id: 4, value: 1795 },
      { id: 5, value: 1796 },
      { id: 6, value: 1797 },
    ],
    "1884-1990": [
      { id: 1, value: 1884 },
      { id: 2, value: 1885 },
      { id: 3, value: 1886 },
      { id: 4, value: 1887 },
      { id: 5, value: 1888 },
      { id: 6, value: 1889 },
    ],
    "2003-2008": [
      { id: 1, value: 2003 },
      { id: 2, value: 2004 },
      { id: 3, value: 2005 },
      { id: 4, value: 2006 },
      { id: 5, value: 2007 },
      { id: 6, value: 2008 },
    ],
    "2009-2014": [
      { id: 1, value: 2009 },
      { id: 2, value: 2010 },
      { id: 3, value: 2011 },
      { id: 4, value: 2012 },
      { id: 5, value: 2013 },
      { id: 6, value: 2014 },
    ],
    "2015-2020": [
      { id: 1, value: 2015 },
      { id: 2, value: 2016 },
      { id: 3, value: 2017 },
      { id: 4, value: 2018 },
      { id: 5, value: 2019 },
      { id: 6, value: 2020 },
    ],
  });

  return (
    <main className={s.main}>
      <section className={s.container}>
        <Typography className={s.h1} variant={"h1"}>
          Исторические даты
        </Typography>
        <SpinnerNav item={intervals} setDateDisplay={setDateDisplay} />
        <DateDisplay date={dateDisplay} />
      </section>
    </main>
  );
};
