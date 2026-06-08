import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import kapilItSolutions from "../assets/kapil_it_solutions.png";

const experienceData = [
  {
    company: "Kapil IT Solutions",
    logo: kapilItSolutions,
    location: "Hyderabad, India (Hybrid)",
    totalDuration: "11 mos",
    experiences: [
      {
        role: "Software Engineer",
        type: "Full-time",
        period: "Dec 2025 – Present · 5 mos",
        bullets: [
          "Architecting and shipping high-performance mobile applications using Flutter & Dart.",
          "Refactoring application structures to use Clean Architecture and state management patterns (BLoC, Riverpod).",
          "Optimizing rendering pipelines, reducing memory usage, and improving frame rate performance (targeting 60/120 FPS).",
          "Writing robust network interceptors, model serializations, and localized caching layers using Hive and SQLite."
        ]
      },
      {
        role: "Flutter Developer Intern",
        type: "Internship",
        period: "Jun 2025 – Nov 2025 · 6 mos",
        bullets: [
          "Developed responsive user interfaces, custom animated charts, and reusable form components.",
          "Integrated RESTful APIs and set up automated OAuth authentication flows.",
          "Collaborated in identifying and correcting system-level memory leaks and frame drops in legacy code."
        ]
      }
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50/50 dark:bg-zinc-950/20 relative overflow-hidden px-6 lg:px-8">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 dark:bg-primary/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-primary-foreground font-semibold tracking-wider uppercase text-sm bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-full">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Professional Timeline
          </h2>
        </div>

        {/* Experience Blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 max-w-4xl mx-auto"
        >
          {experienceData.map((company, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/50 dark:border-zinc-800/50 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl border border-slate-100 dark:border-zinc-800/80 bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                    <img
                      src={company.logo}
                      alt={company.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-800 dark:text-zinc-100">
                      {company.company}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {company.location}
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-xs font-bold text-slate-600 dark:text-zinc-300 w-fit">
                  Total Duration: {company.totalDuration}
                </div>
              </div>

              {/* Roles Timeline inside the company */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-zinc-800 flex flex-col gap-10 ml-6 sm:ml-7">
                {company.experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Glowing timeline node */}
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </span>

                    {/* Role Header */}
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-zinc-100 flex items-center gap-2">
                          {exp.role}
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-primary/20 bg-primary/5 text-primary dark:text-accent">
                            {exp.type}
                          </span>
                        </h4>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Role Bullets */}
                    <ul className="flex flex-col gap-2.5 pl-4 list-disc text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="marker:text-primary">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
