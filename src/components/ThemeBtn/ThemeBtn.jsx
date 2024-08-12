import React, { useState } from "react";
import "./ThemeBtn.css";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useColorMode } from "../../style/ColorModeContext";
const ThemeBtn = () => {
  const [isDay, setIsDay] = useState(true);
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    setIsDay(!isDay);
    toggleColorMode(); // Call the function to toggle the theme
  };

  return (
    <div className="switch-container">
      <button
        className={`switch-btn ${isDay ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span className={`icon ${isDay ? "active" : ""}`}>
          <DarkModeOutlinedIcon />

        </span>
        <span className={`icon ${!isDay ? "active" : ""}`}>
        <WbSunnyOutlinedIcon />

        </span>
      </button>
    </div>
  );
};

export default ThemeBtn;
