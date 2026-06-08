import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 1. Post-mount: Add theme-transition class after rendering to enable smooth switching transitions
    const transitionTimeout = setTimeout(() => {
      document.body.classList.add("theme-transition");
    }, 100);

    // 2. Scroll event listeners
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Determine visibility of scroll-to-top button
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(transitionTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Navigation Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Back to Top"
            className="fixed bottom-24 lg:bottom-8 right-6 z-50 p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-slate-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary-foreground hover:bg-slate-100 dark:hover:bg-zinc-800 shadow-lg cursor-pointer transition-colors duration-200 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
