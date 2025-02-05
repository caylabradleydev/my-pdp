import { useState, useEffect } from "react";
import sunWhite from "../../assets/images/sunWhite.png";
import moonDark from "../../assets/images/moonDark.png";

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={darkModeHandler}>
      {isDarkMode ? (
        <img src={sunWhite} alt="white sun" className="w-10 h-10" />
      ) : (
        <img src={moonDark} alt="black crescent moon" className="w-10 h-10" />
      )}
    </button>
  );
};
