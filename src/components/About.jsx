import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import shahadClg from "../assets/shahada_clg.png";

const educationData = [
  {
    logo: shahadClg,
    institute: "P.S.G.V.P. Mandal’s D.N.Patel College of Engineering, Shahada",
    degree: "Bachelor's Degree in Computer Engineering",
    grade: "CGPA: 8.16 / 10",
    period: "2021 – 2024",
  },
];

const stats = [
  { label: "Years of Experience", value: "1+", desc: "Professional development" },
  { label: "Completed Projects", value: "10+", desc: "Mobile & Web applications" },
  { label: "Academic Standout", value: "8.16", desc: "Computer Engineering CGPA" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/50 dark:bg-zinc-950/20 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent/5 dark:bg-accent/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-primary dark:text-primary-foreground font-semibold tracking-wider uppercase text-xs bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            My Professional Story
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Column Left: Summary and Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div variants={itemVariants} className="text-slate-600 dark:text-zinc-400 leading-relaxed font-sans text-base sm:text-lg flex flex-col gap-4">
              <p>
                I am a dedicated software engineer specializing in mobile app engineering and full-stack web development. I thrive on translating intricate design patterns into seamless, performant cross-platform software.
              </p>
              <p>
                My technical philosophy centers on robust application architecture, state management, and optimized asset delivery. With a focus on the Flutter & Dart ecosystems, I have designed and deployed clean code applications and integrated scalable backend architectures to ensure fluid user experiences.
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="text-3xl font-extrabold text-primary dark:text-accent font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-zinc-500 mt-2">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column Right: Education Timeline */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full flex flex-col gap-6">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-zinc-50 flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-primary dark:text-accent" />
              Education Timeline
            </h3>

            <div className="flex flex-col gap-6">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden shadow-sm hover:border-primary/45 transition-colors duration-300 flex flex-col sm:flex-row gap-5 items-start"
                >
                  {/* Glowing card outline effect */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary dark:bg-accent" />

                  {/* Institution Logo */}
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 dark:border-zinc-800 flex items-center justify-center p-2 shadow-sm shrink-0">
                    <img 
                      src={edu.logo} 
                      alt={edu.institute} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Education details */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
                      <h4 className="font-bold text-sm sm:text-base text-slate-800 dark:text-zinc-200">
                        {edu.institute}
                      </h4>
                    </div>
                    <p className="text-sm text-primary dark:text-accent font-semibold mb-2">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-zinc-300">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
