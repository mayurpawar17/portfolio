import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mayurpawar4908@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-accent font-semibold tracking-wider uppercase text-sm bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-full">
            Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Get In Touch
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to talk about developer opportunities? Drop a line!
          </p>
        </div>

        {/* Central Info Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-zinc-100">
              Let's discuss something great
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 leading-relaxed font-sans text-sm sm:text-base max-w-lg mx-auto">
              I am responsive to emails and professional platforms. Feel free to ask questions, discuss contract/freelance projects, or inquire about open engineering roles.
            </p>
          </div>

          {/* Direct Email CTA Card */}
          <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
            <div className="flex items-center gap-3.5 overflow-hidden w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden text-center sm:text-left w-full">
                <div className="text-xs text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                  Email address
                </div>
                <a
                  href="mailto:mayurpawar4908@gmail.com"
                  className="text-sm sm:text-base font-bold text-slate-700 dark:text-zinc-300 hover:text-primary transition-colors block truncate mt-0.5"
                >
                  mayurpawar4908@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center p-2.5 px-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 cursor-pointer transition-colors relative shrink-0 gap-1.5 text-xs font-bold"
              title="Copy email to clipboard"
              id="copy-email-btn"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    className="flex items-center gap-1.5 text-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Check className="w-4 h-4" />
                    Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    className="flex items-center gap-1.5"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Social Grid */}
          <div className="flex flex-col gap-4 border-t border-slate-200/60 dark:border-zinc-800/60 pt-8 items-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Professional networks
            </div>
            <div className="flex gap-3 w-full max-w-sm justify-center">
              <a
                href="https://github.com/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold text-sm transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold text-sm transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
