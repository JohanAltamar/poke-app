import React from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const ThemeSelector = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="px-4 mr-2 text-xl"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={handleThemeChange}
    >
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};
