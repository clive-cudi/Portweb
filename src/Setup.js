import React from "react";
import Routing from "./components/Routing";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { useContext } from "react";

function Setup() {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div
      className="Content"
      style={{
        background: darkTheme ? "rgb(19, 19, 19)" : "white",
        backgroundImage: darkTheme
          ? 'url("chrome://global/skin/media/imagedoc-darknoise.png")'
          : "none",
      }}
    >
      <Routing />
    </div>
  );
}

export default Setup;
