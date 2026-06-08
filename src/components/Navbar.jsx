import { useEffect, useState } from "react";
import { Home, User, Code, Folder, History, Award, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "experience", label: "Experience", icon: History },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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
    <>
      {/* ── LIGHT MODE NAVBAR: frosted white pill ── */}
      <nav className="
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 px-3 py-1.5
        rounded-2xl
        bg-white/80 border border-slate-200/70 shadow-sm shadow-slate-200/60
        backdrop-blur-md
        top-auto bottom-6 lg:bottom-auto lg:top-6
        max-w-[95vw] lg:max-w-max
        transition-all duration-300
        dark:hidden
      ">
        <NavItems
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          theme="light"
        />
        <div className="w-px h-5 bg-slate-200 mx-1.5" />
        <ThemeToggle />
      </nav>

      {/* ── DARK MODE NAVBAR: rich dark zinc with violet accent ── */}
      <nav className="
        fixed left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1 px-3 py-1.5
        rounded-2xl
        bg-zinc-900/95 border border-zinc-700/50 shadow-lg shadow-black/40
        backdrop-blur-md
        top-auto bottom-6 lg:bottom-auto lg:top-6
        max-w-[95vw] lg:max-w-max
        transition-all duration-300
        hidden dark:flex
        ring-1 ring-inset ring-white/[0.04]
      ">
        <NavItems
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          theme="dark"
        />
        <div className="w-px h-5 bg-zinc-700 mx-1.5" />
        <ThemeToggle />
      </nav>
    </>
  );
}

function NavItems({ activeSection, scrollToSection, theme }) {
  return (
    <div className="flex items-center gap-0.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        const lightActive = "bg-slate-100 text-slate-900";
        const lightInactive = "text-slate-500 hover:text-slate-800 hover:bg-slate-50";

        const darkActive = "bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/30";
        const darkInactive = "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/70";

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            title={item.label}
            id={`nav-link-${item.id}`}
            className={`
              relative flex items-center justify-center
              w-9 h-9 rounded-xl
              transition-all duration-200 cursor-pointer group
              ${theme === "dark"
                ? isActive ? darkActive : darkInactive
                : isActive ? lightActive : lightInactive
              }
            `}
          >
            <Icon className="w-[18px] h-[18px]" />

            {/* Active indicator dot */}
            {isActive && (
              <span className={`
                absolute -bottom-0.5 left-1/2 -translate-x-1/2
                w-1 h-1 rounded-full
                ${theme === "dark" ? "bg-violet-400" : "bg-slate-700"}
              `} />
            )}

            {/* Tooltip */}
            <span className="
              hidden lg:block
              absolute -top-9 left-1/2 -translate-x-1/2
              scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
              transition-all duration-150 origin-bottom
              px-2 py-1 text-[11px] font-medium whitespace-nowrap rounded-lg
              pointer-events-none shadow-md
              bg-slate-900 text-white dark:bg-zinc-700 dark:text-zinc-100
            ">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
