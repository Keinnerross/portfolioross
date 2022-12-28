import React, { useState } from "react";
import { useEffect } from "react";

import { BsSun } from "react-icons/bs";

const LightMode = () => {
  const [lighMode, setLightMode] = useState(false);

  const lightModeTheme = {
    text: "#0d1117",
    bg: "#f1faee",
    secundary: "#dce2d9",
  };

  const darkModeTheme = {
    text: "white",
    bg: "#0d1117",
    secundary: "#1c2833",
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    document.body.style.transition = ".7s";
    if (lighMode) {
      rootElement.style.setProperty("--blackbg", lightModeTheme.bg);
      rootElement.style.setProperty("--textColor", lightModeTheme.text);
      rootElement.style.setProperty("--secundary", lightModeTheme.secundary);
    } else {
      rootElement.style.setProperty("--blackbg", darkModeTheme.bg);
      rootElement.style.setProperty("--textColor", darkModeTheme.text);
      rootElement.style.setProperty("--secundary", darkModeTheme.secundary);
    }
  }, [lighMode]);

  return (
    <div onClick={() => setLightMode(!lighMode)}>
      <BsSun></BsSun>
    </div>
  );
};

export default LightMode;
