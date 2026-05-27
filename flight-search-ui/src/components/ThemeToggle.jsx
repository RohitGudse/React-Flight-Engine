import React, { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;