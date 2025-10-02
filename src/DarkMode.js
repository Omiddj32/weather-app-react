import { useEffect, useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark-mode");
    },
    [isDarkMode]
  );

  return (
    <button
      className="btn-dark-mode"
      onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkMode;
