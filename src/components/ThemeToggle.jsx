import { useEffect, useState } from "react";
import { Sun, Moon } from "phosphor-react";


const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? <Moon size={22}/> : <Sun size={22} weight="bold" />}
    </button>
  );
};

export default ThemeToggle;
