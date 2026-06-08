import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Sneakology",
    date: "Jan 2025 – Present",
    desc: "Sneakology is a sneaker enthusiast's paradise—a dedicated platform for sneaker lovers to explore, analyze, and stay updated on the latest hype releases, rare kicks, and streetwear culture.",
    image: "https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/sneakologBg.jpg?raw=true",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    achievements: [
      "Optimized query performance by 40% using MongoDB compound index strategies.",
      "Designed a real-time sneaker price-tracking dashboard aggregating third-party APIs.",
      "Engineered automated caching layers to handle high-frequency sneaker drop tracking."
    ],
    tags: [
      { name: "Website", link: "https://your-site.com" },
      { name: "Github", link: "https://github.com/your-repo" }
    ],
    colSpan: "md:col-span-8"
  },
  {
    title: "GrowMate App",
    date: "Aug 2024 – Dec 2024",
    desc: "GrowMate is a mobile application designed to assist plant enthusiasts in managing and tracking plant health, watering schedules, and custom alerts.",
    image: "https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/growMateBg.png?raw=true",
    tech: ["Flutter", "Dart", "Firebase Auth", "Firestore", "SQLite"],
    achievements: [
      "Developed an offline-first data synchronization layer utilizing local SQLite caches.",
      "Created background alerts to push notifications for plant-care tasks.",
      "Integrated secure Firebase social OAuth authentication methods."
    ],
    tags: [
      { name: "Website", link: "https://your-site.com" },
      { name: "Github", link: "https://github.com/your-repo" }
    ],
    colSpan: "md:col-span-4"
  },
  {
    title: "BMI FitIndex Pro app",
    date: "Jun 2024",
    desc: "BMI FitIndex Pro is a sleek and powerful Flutter app designed to help users monitor their Body Mass Index (BMI) and track their fitness journey with ease.",
    image: "https://github.com/mayurpawar17/published-apps-resources/blob/main/Portfolio/bmi_bg.png?raw=true",
    tech: ["Flutter", "Dart", "Shared Preferences", "Canvas API"],
    achievements: [
      "Designed clean gauge and indicator charts utilizing Flutter CustomPainter APIs.",
      "Deployed directly to Google Play Store with 4.8+ user star rating.",
      "Implemented a system-adaptive dark mode layout with custom transitions."
    ],
    tags: [
      { name: "Play Store", link: "https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro&pcampaignid=web_share" },
      { name: "Github", link: "https://github.com/mayurpawar17/bmi-calculator-app.git" }
    ],
    colSpan: "md:col-span-4"
  },
  {
    title: "Video-Ocean",
    date: "Mar 2024",
    desc: "An advanced video generation platform supporting rendering of customized text overlays onto multi-layered video, image, and audio files.",
    image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React.js", "Next.js", "FastAPI", "FFmpeg", "Tailwind CSS"],
    achievements: [
      "Reduced rendering queue times by 35% using background Celery workers and Redis.",
      "Constructed a precise timeline-based web editor for real-time video composition.",
      "Engineered high-throughput REST APIs to support bulk image and video upload."
    ],
    tags: [
      { name: "Website", link: "https://your-site.com" },
      { name: "Github", link: "https://github.com/your-repo" }
    ],
    colSpan: "md:col-span-8"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden px-6 lg:px-8 bg-background text-foreground">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 dark:bg-accent/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-primary dark:text-accent font-semibold tracking-wider uppercase text-xs bg-primary/5 dark:bg-primary/10 px-3 py-1 rounded-full">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-zinc-50 mt-4">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Engineered systems structured into an adaptive Bento Grid showcase. Hover cards to explore code repositories and live implementations.
          </p>
        </div>

        {/* Bento Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              date={project.date}
              desc={project.desc}
              image={project.image}
              tags={project.tags}
              tech={project.tech}
              achievements={project.achievements}
              colSpan={project.colSpan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
