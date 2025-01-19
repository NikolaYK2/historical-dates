import React, { useState } from "react";
import * as s from "./Main.module.scss";
import { Typography } from "@/common/componnents/typography/Typography";
import { SpinnerNav } from "@/feachers/ui/main/spinnerNav";
import { DateDisplay } from "@/feachers/ui/main/dateDisplay";
import { Slider } from "@/feachers/ui/main/slider/Slider";

export type DateDataItem = {
  id: number;
  year: number;
  description: string;
};
type DateData = Record<string, DateDataItem[]>;

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

  const [dateData, setDateData] = useState<DateData>({
    "1690-1696": [
      {
        id: 1,
        year: 1690,
        description:
          "The chemist Robert Boyle publishes groundbreaking work in the study of gases, laying the foundation for modern chemistry.",
      },
      {
        id: 2,
        year: 1691,
        description:
          "The first prototype of a navigational tool using magnetism is introduced, revolutionizing maritime travel.",
      },
      {
        id: 3,
        year: 1692,
        description:
          "The Salem witch trials take place in colonial Massachusetts, becoming one of history's most infamous examples of mass hysteria.",
      },
      {
        id: 4,
        year: 1693,
        description:
          "The foundation of the College of William & Mary, the second-oldest higher education institution in the United States.",
      },
      {
        id: 5,
        year: 1694,
        description: "The Bank of England is established to support the British government financially during wartime.",
      },
      {
        id: 6,
        year: 1695,
        description: "First public library in the Americas opens in Charleston, enabling broader access to knowledge.",
      },
    ],
    "1792-1798": [
      {
        id: 1,
        year: 1792,
        description:
          "The French Revolution reaches a peak as the monarchy is abolished, and France declares itself a republic.",
      },
      {
        id: 2,
        year: 1793,
        description:
          "King Louis XVI is executed during the Reign of Terror, marking a turning point in the revolution.",
      },
      {
        id: 3,
        year: 1794,
        description: "Antoine Lavoisier, the 'Father of Modern Chemistry,' refines the concept of chemical elements.",
      },
      {
        id: 4,
        year: 1795,
        description: "The Directory is established in France as a new government system after the Reign of Terror.",
      },
      {
        id: 5,
        year: 1796,
        description: "Edward Jenner pioneers the smallpox vaccine, saving millions of lives over subsequent centuries.",
      },
      {
        id: 6,
        year: 1797,
        description:
          "The first submarine, the Nautilus, is successfully tested, ushering in a new era of naval warfare.",
      },
    ],
    "1884-1990": [
      {
        id: 1,
        year: 1884,
        description:
          "The Berlin Conference begins, dividing Africa among European powers and reshaping global politics.",
      },
      {
        id: 2,
        year: 1885,
        description: "Karl Benz patents the first gasoline-powered automobile, revolutionizing transportation.",
      },
      { id: 3, year: 1886, description: "Wilhelm Röntgen discovers X-rays, a breakthrough in medical diagnostics." },
      {
        id: 4,
        year: 1887,
        description:
          "Thomas Edison unveils the phonograph, enabling the recording and playback of sound for the first time.",
      },
      {
        id: 5,
        year: 1888,
        description: "Construction of the Eiffel Tower begins in Paris as part of the 1889 World's Fair preparations.",
      },
      {
        id: 6,
        year: 1889,
        description:
          "The opening of the Eiffel Tower marks it as a symbol of technological advancement and artistic achievement.",
      },
    ],
    "2003-2008": [
      {
        id: 1,
        year: 2003,
        description: "The launch of Facebook revolutionizes how people connect and communicate globally.",
      },
      {
        id: 2,
        year: 2004,
        description:
          "The Human Genome Project is completed, mapping all human genes and transforming biomedical research.",
      },
      {
        id: 3,
        year: 2005,
        description: "Hurricane Katrina devastates New Orleans, highlighting vulnerabilities in disaster management.",
      },
      {
        id: 4,
        year: 2006,
        description: "Apple introduces the first iPhone, redefining personal technology and communication.",
      },
      {
        id: 5,
        year: 2007,
        description:
          "NASA discovers the first potentially habitable exoplanet, sparking new interest in space exploration.",
      },
      {
        id: 6,
        year: 2008,
        description: "The global financial crisis begins, leading to widespread economic upheaval.",
      },
    ],
    "2009-2014": [
      {
        id: 1,
        year: 2009,
        description:
          "Barack Obama is inaugurated as the first African-American President of the United States, a milestone in history.",
      },
      {
        id: 2,
        year: 2010,
        description:
          "Breakthroughs in artificial intelligence enable new applications in healthcare, finance, and everyday technology.",
      },
      {
        id: 3,
        year: 2011,
        description: "The Arab Spring ignites across the Middle East, demanding democracy and reshaping geopolitics.",
      },
      {
        id: 4,
        year: 2012,
        description:
          "CERN confirms the discovery of the Higgs boson particle, completing the Standard Model of particle physics.",
      },
      {
        id: 5,
        year: 2013,
        description:
          "The release of 'Frozen' by Disney sets a new standard for animated films and becomes a cultural phenomenon.",
      },
      {
        id: 6,
        year: 2014,
        description: "Solar energy sees record growth as global investment in renewable energy surges.",
      },
    ],
    "2015-2020": [
      {
        id: 1,
        year: 2015,
        description: "The Paris Agreement is adopted, uniting nations in the fight against climate change.",
      },
      {
        id: 2,
        year: 2016,
        description: "Scientists confirm the detection of gravitational waves, a century after Einstein's prediction.",
      },
      {
        id: 3,
        year: 2017,
        description:
          "The Cassini spacecraft concludes its mission with a dive into Saturn, sending invaluable data back to Earth.",
      },
      {
        id: 4,
        year: 2018,
        description: "Breakthroughs in CRISPR gene-editing technology open doors for curing genetic diseases.",
      },
      { id: 5, year: 2019, description: "The Event Horizon Telescope captures the first-ever image of a black hole." },
      {
        id: 6,
        year: 2020,
        description:
          "The rapid development of COVID-19 vaccines showcases global collaboration in science and medicine.",
      },
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

        <section>
          <Slider slides={dateData[dateDisplay]} />
        </section>
      </section>
    </main>
  );
};
