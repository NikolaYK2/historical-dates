import React, { useEffect, useState } from "react";
import { Main } from "@/feachers/ui/main/Main";

const App = () => {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Promise.all([document.fonts.load("bold 1rem PT Sans"), document.fonts.load("bold 1rem PT Sans")]);
        setIsFontsLoaded(true);
      } catch (error) {
        console.error("Ошибка загрузки шрифтов:", error);
        setIsFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  return <>{isFontsLoaded ? <Main /> : <div>Loading...</div>}</>;
};

export default App;
