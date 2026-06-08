import { motion } from "framer-motion";
import { Github, ExternalLink, Play, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, date, desc, image, tags, tech, achievements, colSpan }) {
  const isWide = colSpan && colSpan.includes("col-span-8");

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group rounded-2xl border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden ${colSpan || ""}`}
    >
      {isWide ? (
        /* ── Wide Card: side-by-side image + content ── */
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="relative w-full lg:w-[45%] h-52 lg:h-auto overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 p-6 border-t lg:border-t-0 lg:border-l border-slate-200/60 dark:border-zinc-800/60">
            <div>
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="text-lg font-bold font-display text-slate-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
                  {title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-400" />
                </h3>
                {date && (
                  <span className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium shrink-0 pt-0.5">
                    {date}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-4">
                {desc}
              </p>

              {tech && tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {achievements && achievements.length > 0 && (
                <div className="border-t border-slate-100 dark:border-zinc-800/60 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">
                    Project Impact
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-primary dark:bg-accent shrink-0 mt-1.5" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-2.5 border-t border-slate-100 dark:border-zinc-800/60 pt-4 mt-4">
              {tags.map((tag, i) => {
                if (!tag.link) return null;
                const isGithub = tag.name.toLowerCase() === "github";
                const isPlayStore = tag.name.toLowerCase() === "play store";
                const Icon = isGithub ? Github : isPlayStore ? Play : ExternalLink;
                return (
                  <a
                    key={i}
                    href={tag.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      isGithub
                        ? "border border-slate-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {tag.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* ── Narrow Card: stacked image + content ── */
        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative w-full h-44 overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 p-5 border-t border-slate-200/60 dark:border-zinc-800/60">
            <div>
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="text-base font-bold font-display text-slate-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
                  {title}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-400" />
                </h3>
                {date && (
                  <span className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium shrink-0 pt-0.5">
                    {date}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed mb-3">
                {desc}
              </p>

              {tech && tech.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {tech.slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2 border-t border-slate-100 dark:border-zinc-800/60 pt-3 mt-3">
              {tags.map((tag, i) => {
                if (!tag.link) return null;
                const isGithub = tag.name.toLowerCase() === "github";
                const isPlayStore = tag.name.toLowerCase() === "play store";
                const Icon = isGithub ? Github : isPlayStore ? Play : ExternalLink;
                return (
                  <a
                    key={i}
                    href={tag.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl text-[10px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      isGithub
                        ? "border border-slate-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {tag.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
