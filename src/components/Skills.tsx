import { motion, type Variants } from "framer-motion";
import { Smartphone, Code, Server, Database, Cloud, Cpu } from "lucide-react";

const skillsData = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "from-blue-500/15 to-indigo-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Android Studio", icon: "devicon-android-plain colored" },
      { name: "Xcode", icon: "devicon-xcode-plain colored" },
      { name: "Google Play Store", icon: "devicon-google-plain colored" },
      { name: "Apple App Store", icon: "devicon-apple-original colored" }
    ]
  },
  {
    category: "Frontend Web",
    icon: Code,
    color: "from-purple-500/15 to-pink-500/15 text-purple-600 dark:text-purple-400 border-purple-500/20",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" }
    ]
  },
  {
    category: "Backend Architecture",
    icon: Server,
    color: "from-amber-500/15 to-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Pydantic", icon: null },
      { name: "Microservices", icon: null },
      { name: "RESTful APIs", icon: null }
    ]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "from-emerald-500/15 to-teal-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Supabase DB", icon: "devicon-supabase-plain colored" },
      { name: "Firebase Firestore", icon: "devicon-firebase-plain colored" },
      { name: "SQLModel", icon: null }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    color: "from-sky-500/15 to-cyan-500/15 text-sky-600 dark:text-sky-400 border-sky-500/20",
    skills: [
      { name: "Netlify", icon: "devicon-netlify-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original colored" },
      { name: "AWS (EC2)", icon: "devicon-amazonwebservices-plain colored" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: Cpu,
    color: "from-slate-500/15 to-zinc-500/15 text-slate-600 dark:text-zinc-400 border-slate-500/20",
    skills: [
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Git & GitHub", icon: "devicon-git-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-original colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" }
    ]
  }
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50">
            Technologies & Tools
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Languages, frameworks, databases, and tools I use to build scalable mobile and web software.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((item, index) => {
            const CategoryIcon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-xs`}>
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold font-display text-slate-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200">
                        {item.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid Badge layout */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="text-xs px-3 py-2 rounded-xl border border-slate-200/70 dark:border-zinc-800/80 bg-slate-50/70 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-800 hover:border-primary/40 dark:hover:border-primary/40 text-slate-700 dark:text-zinc-200 font-sans transition-all duration-200 hover:scale-[1.02] shadow-xs cursor-default flex items-center gap-2.5"
                      >
                        {skill.icon ? (
                          <div className="w-5.5 h-5.5 rounded-md bg-white dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-700/80 flex items-center justify-center shrink-0 p-0.5 shadow-2xs">
                            <i className={`${skill.icon} text-[15px] shrink-0`} />
                          </div>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent shrink-0" />
                        )}
                        <span className="font-medium text-slate-800 dark:text-zinc-100 text-[12px]">{skill.name}</span>
                      </div>
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
