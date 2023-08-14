import React, { useState } from "react";
import { useEffect } from "react";

import { BsMoon, BsSun } from "react-icons/bs";

const LightMode = ({ lightValue, darkValue, handleLightMode, lightMode }) => {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const rootElement = document.documentElement;
    document.body.style.transition = ".5s";
    if (lightMode) {
      nav.style.background = lightValue.bg;

      rootElement.style.setProperty("--blackbg", lightValue.bg);
      rootElement.style.setProperty("--textColor", lightValue.text);
      rootElement.style.setProperty("--secundary", lightValue.secundary);
      rootElement.style.setProperty("--green", lightValue.green);

      nav.style.transition = "2s";
    } else {
      nav.style.background = "var(--blackbg) opacity(80%)";
      nav.style.transition = "0s";

      rootElement.style.setProperty("--blackbg", darkValue.bg);
      rootElement.style.setProperty("--textColor", darkValue.text);
      rootElement.style.setProperty("--secundary", darkValue.secundary);
      rootElement.style.setProperty("--green", darkValue.green);
    }
  }, [lightMode]);

  return (
    <div onClick={() => handleLightMode()}>
      {lightMode ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default LightMode;
