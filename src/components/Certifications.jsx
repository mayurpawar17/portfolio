import { motion } from "framer-motion";
import { Award, Calendar, ShieldCheck, ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Google Play Store App Deployment",
    issuer: "Google Play Console",
    date: "Jun 2024",
    credentialId: "BMI FitIndex Pro Live",
    link: "https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro",
    badge: "App Deployment"
  },
  {
    title: "Flutter Mobile Development Boot Camp",
    issuer: "Udemy",
    date: "Dec 2023",
    credentialId: "UC-Flutter-Dart-Bootcamp",
    link: "https://www.udemy.com",
    badge: "Flutter & Dart"
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "Mar 2023",
    credentialId: "fcc-responsive-web-design",
    link: "https://www.freecodecamp.org",
    badge: "Frontend Web"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 dark:bg-accent/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-accent font-semibold tracking-wider uppercase text-xs bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Licenses & Credentials
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Professional milestones validating mobile development and web programming proficiencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 text-primary dark:text-accent">
                    {cert.badge}
                  </span>
                  <Award className="w-5 h-5 text-primary dark:text-accent group-hover:scale-110 transition-transform duration-200" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-slate-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200 mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-4">
                  {cert.issuer}
                </p>

                {/* Metadata details */}
                <div className="flex flex-col gap-2.5 border-t border-slate-200/50 dark:border-zinc-800/50 pt-4 mt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-sans">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-success shrink-0" />
                    <span className="truncate">ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* View credential button */}
              {cert.link && (
                <div className="mt-6 border-t border-slate-200/50 dark:border-zinc-800/50 pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-accent hover:underline group/link"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
