import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-950/20 py-12 px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10">
        {/* Left Col: Brand and Intro */}
        <div className="flex flex-col gap-4 max-w-xs text-left">
          <h4 className="font-extrabold text-lg font-display tracking-tight text-slate-800 dark:text-zinc-100">
            Mayur Pawar
          </h4>
          <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-sans">
            Flutter and full-stack engineer dedicated to crafting fluid interfaces and high-performance cross-platform code.
          </p>
        </div>

        {/* Center/Right Columns */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 text-left">
          {/* Quick Nav */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150 cursor-pointer text-left"
                >
                  About & Edu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150 cursor-pointer text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150 cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Connect
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://github.com/mayurpawar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mayurpawar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:mayurpawar4908@gmail.com"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Resources
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150"
                >
                  <FileText className="w-4 h-4" />
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary-foreground transition-colors duration-150"
                >
                  <Globe className="w-4 h-4" />
                  Google Play Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto border-t border-slate-200/60 dark:border-zinc-800/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-zinc-500">
        <div>
          © {currentYear} Mayur Pawar. Designed & Built with excellence.
        </div>
        <div className="flex items-center gap-3">
          <span>React.js</span>
          <span>·</span>
          <span>Tailwind v4</span>
          <span>·</span>
          <span>Netlify</span>
        </div>
      </div>
    </footer>
  );
}
