import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import profileImg from "../assets/mayur1.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden px-6 lg:px-8 bg-background text-foreground"
    >
      {/* Premium Minimal Blur Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[220px] h-[220px] bg-primary/10 dark:bg-primary/5 rounded-full glow-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-[260px] h-[260px] bg-accent/10 dark:bg-accent/5 rounded-full glow-blob" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        {/* Left Col: Headings & Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-foreground text-xs font-semibold mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Software Engineer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 leading-[1.05] mb-4"
          >
            Mayur Pawar
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 tracking-tight"
          >
            Flutter & Full-Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            I build high-performance, responsive mobile applications and scalable web systems. Focused on clean architectures, intuitive interactions, and production-grade engineering at Kapil IT Solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3.5 items-center mb-8"
          >
            <button
              onClick={scrollToContact}
              id="hero-contact-btn"
              className="flex items-center gap-1.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-primary/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download
              id="hero-resume-btn"
              className="flex items-center gap-1.5 border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 border-t border-slate-200/60 dark:border-zinc-800/60 pt-6 max-w-xl"
          >
            <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
              Find me on
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:mayurpawar4908@gmail.com"
                aria-label="Email"
                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary-foreground hover:bg-slate-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Col: Minimal Profile Photo (Shrunken) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-4 flex justify-center items-center"
        >
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 shrink-0">
            {/* Glowing Ring */}
            <div className="absolute inset-[-3%] rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-md animate-spin-slow pointer-events-none" style={{ animationDuration: '24s' }} />

            {/* Premium Framed Image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-[2rem] border border-slate-200/50 dark:border-zinc-800/40 overflow-hidden shadow-xl bg-slate-100 dark:bg-zinc-900 relative"
            >
              <img
                src={profileImg}
                alt="Mayur Pawar"
                className="w-full h-full object-cover object-center scale-[1.01] hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
