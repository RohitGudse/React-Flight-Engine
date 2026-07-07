import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Store current theme
  const [theme, setTheme] = useState("light");

  // Apply theme whenever it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [theme]);

  // Change Theme
  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-96 rounded-xl shadow-xl p-8 text-center ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">
          React Theme Toggle
        </h1>

        <p className="mb-6 text-lg">
          Current Theme:
          <span
            className={`ml-2 font-semibold ${
              theme === "dark"
                ? "text-yellow-400"
                : "text-blue-600"
            }`}
          >
            {theme.toUpperCase()}
          </span>
        </p>

        <button
          onClick={toggleTheme}
          className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
            theme === "dark"
              ? "bg-yellow-500 hover:bg-yellow-400 text-black"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {theme === "dark"
            ? "☀️ Switch to Light Mode"
            : "🌙 Switch to Dark Mode"}
        </button>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Features
          </h2>

          <ul className="text-left list-disc list-inside space-y-2">
            <li>Uses React useState Hook</li>
            <li>Uses useEffect Hook</li>
            <li>Dynamic Tailwind CSS classes</li>
            <li>Smooth transition effects</li>
            <li>Responsive layout</li>
            <li>Dark and Light theme support</li>
            <li>Easy to extend for future themes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;