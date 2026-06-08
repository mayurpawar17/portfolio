import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  // Lazily read current theme from DOM so remounts (e.g. navbar swap) are instant
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label="Toggle Theme"
      className="relative p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors duration-200 cursor-pointer overflow-hidden flex items-center justify-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ y: 15, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 15, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
