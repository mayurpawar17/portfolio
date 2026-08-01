import { motion } from "framer-motion";
import { Smartphone, Code, Server, Database, Cloud, Cpu } from "lucide-react";

const skillsData = [
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    status: "Primary Core",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "Android Studio", icon: "devicon-android-plain colored" }
    ]
  },
  {
    category: "Frontend",
    icon: Code,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    status: "Highly Active",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    status: "System Architecture",
    skills: [
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Spring Data JPA", icon: "devicon-spring-original colored" },
      { name: "Spring Security", icon: "devicon-spring-original colored" },
      { name: "Microservices", icon: null },
      { name: "RESTful APIs", icon: null }
    ]
  },
  {
    category: "Database",
    icon: Database,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    status: "Query & Model",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Supabase DB", icon: "devicon-supabase-plain colored" },
      { name: "Firebase Firestore", icon: "devicon-firebase-plain colored" },
      { name: "Prisma ORM", icon: "devicon-prisma-original colored" }
    ]
  },
  {
    category: "Cloud",
    icon: Cloud,
    color: "from-sky-500/10 to-cyan-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    status: "Deployments",
    skills: [
      { name: "Netlify", icon: "devicon-netlify-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original colored" },
      { name: "Firebase Hosting", icon: "devicon-firebase-plain colored" },
      { name: "AWS basics", icon: "devicon-amazonwebservices-original colored" }
    ]
  },
  {
    category: "Tools",
    icon: Cpu,
    color: "from-slate-500/10 to-zinc-500/10 text-slate-600 dark:text-zinc-400 border-slate-500/20",
    status: "Version & Env",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Git & GitHub", icon: "devicon-git-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-original colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "CLI Shell", icon: "devicon-bash-plain colored" }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 dark:bg-primary/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-accent font-semibold tracking-wider uppercase text-xs bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Technical Stack
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Categorized skills designed like clean dashboard widgets. No percentage indicators, just direct execution skills.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((item, index) => {
            const CategoryIcon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Glowing dashboard accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold font-display text-slate-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200">
                        {item.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                      {item.status}
                    </span>
                  </div>

                  {/* Skills Grid Badge layout */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-sans transition-all duration-200 hover:scale-[1.02] cursor-default flex items-center gap-2"
                      >
                        {skill.icon ? (
                          <i className={`${skill.icon} text-[15px] shrink-0`} />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary/60 group-hover:bg-primary transition-colors duration-200 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
