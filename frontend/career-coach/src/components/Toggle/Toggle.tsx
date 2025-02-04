import { useState } from "react";
import sunWhite from "../../assets/images/sunWhite.png";
import moonDark from "../../assets/images/moonDark.png";

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <img src={sunWhite} alt="white sun" className="w-10 h-10" />
      ) : (
        <img src={moonDark} alt="black crescent moon" className="w-10 h-10" />
      )}
    </button>
  );
};
