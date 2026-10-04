import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, History, Code, Folder, Award, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: History },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed bottom-5 lg:bottom-auto lg:top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <nav className="flex items-center gap-1.5 p-1.5 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/60 transition-all duration-300">
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                id={`nav-link-${item.id}`}
                className={`relative flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 cursor-pointer group ${
                  isActive
                    ? "text-primary dark:text-accent font-bold"
                    : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {/* Active Animated Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-xl bg-slate-100 dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/60 shadow-2xs"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}

                <Icon
                  className={`w-4 h-4 relative z-10 shrink-0 transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                />

                {/* Label displayed on desktop screens */}
                <span
                  className={`relative z-10 hidden lg:inline font-sans text-[12px] tracking-tight transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>

                {/* Tooltip for mobile & tablet (opens upward above bottom nav bar) */}
                <span className="lg:hidden absolute -top-9 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 origin-bottom px-2 py-1 text-[10px] font-medium whitespace-nowrap rounded-lg pointer-events-none shadow-md bg-slate-900 text-white dark:bg-zinc-700 dark:text-zinc-100">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-px h-5 bg-slate-200 dark:bg-zinc-800 mx-1 shrink-0" />

        <div className="pr-0.5 shrink-0">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
}
