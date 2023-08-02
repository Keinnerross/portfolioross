import React, { useState } from "react";
import { useEffect } from "react";

import { BsMoon, BsSun } from "react-icons/bs";

const LightMode = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const lightModeTheme = {
      text: "#0d1117",
      bg: "rgb(240, 231, 219)",
      secundary: "rgb(222 214 203)",
      // bg: "#f1faee",
      // secundary: "#dce2d9",
      green: "green",
    };

    const darkModeTheme = {
      text: "white",
      bg: "#0d1117",
      secundary: "#1C1E25",
      green: "greenyellow",
    };
    const nav = document.getElementById("nav");
    const rootElement = document.documentElement;
    document.body.style.transition = ".5s";
    if (lightMode) {
      nav.style.background = lightModeTheme.bg;

      rootElement.style.setProperty("--blackbg", lightModeTheme.bg);
      rootElement.style.setProperty("--textColor", lightModeTheme.text);
      rootElement.style.setProperty("--secundary", lightModeTheme.secundary);
      rootElement.style.setProperty("--green", lightModeTheme.green);

      nav.style.transition = "2s";
    } else {
      nav.style.background = "var(--blackbg) opacity(80%)";
      nav.style.transition = "0s";

      rootElement.style.setProperty("--blackbg", darkModeTheme.bg);
      rootElement.style.setProperty("--textColor", darkModeTheme.text);
      rootElement.style.setProperty("--secundary", darkModeTheme.secundary);
      rootElement.style.setProperty("--green", darkModeTheme.green);
    }
  }, [lightMode]);

  return (
    <div onClick={() => setLightMode(!lightMode)}>
      {lightMode ? <BsSun /> : <BsMoon />}

     
    </div>
  );
};

export default LightMode;
