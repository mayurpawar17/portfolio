import { createFileRoute, Link } from "@tanstack/react-router";
import { mobileProjects } from "@/lib/projects";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayur Pawar — Software Engineer" },
      { name: "description", content: "Portfolio of Mayur Pawar, a software engineer building mobile apps and web applications." },
      { property: "og:title", content: "Mayur Pawar — Software Engineer" },
      { property: "og:description", content: "Web platforms, APIs and mobile apps crafted end to end." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend: ["Python", "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy"],
  Mobile: ["Flutter", "Dart", "BLoC", "Provider", "Clean Architecture"],
  "Data & Cloud": ["PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Git", "GitHub Actions"],
};

const experience = [
  { role: "Software Engineer", co: "Kapil IT Solutions", time: "Dec 2025 — Present" },
  { role: "Flutter Developer Intern", co: "Kapil IT Solutions", time: "Jun 2025 — Nov 2025" },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Engineering",
    school: "P.S.G.V.P. Mandal’s D.N. Patel College of Engineering, Shahada",
    time: "2021 — 2024",
    grade: "CGPA: 8.16 / 10",
  },
];

function Chip({ children }: { children: string }) {
  return <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{children}</span>;
}

function Index() {
  return (
    <div className="page-enter min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-mono text-sm font-medium">Mayur Pawar</a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#education" className="hover:text-foreground">Education</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Hire me</a>
          </div>
        </nav>
      </header>

      <section id="top" className="bg-glow">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <p className="font-mono text-sm text-primary">● Available for new projects</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Full stack engineer crafting <span className="text-primary">fast, thoughtful</span> software.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I design and ship web platforms, APIs and mobile apps — from database schema to pixel-perfect UI.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">View work</a>
            <a href="#contact" className="rounded-full border border-border px-6 py-3 font-medium hover:bg-accent">Get in touch</a>
          </div>
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6">
            {[["1.5+", "Years"], ["4", "Projects"], ["3", "Apps shipped"]].map(([n, l]) => (
              <div key={l}><dt className="text-3xl font-semibold">{n}</dt><dd className="font-mono text-xs text-muted-foreground">{l}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-sm text-primary">01 — Work</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Selected mobile apps</h2>
          <div className="mt-12 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {mobileProjects.map((p) => (
              <article key={p.title} className="flex flex-col items-center text-center">
                <Link
                  to="/work/$appId"
                  params={{ appId: p.slug }}
                  className="phone block w-56 transition hover:-translate-y-2"
                  style={p.shot ? { aspectRatio: "860 / 1920" } : undefined}
                >
                  {p.shot ? (
                    <img
                      src={p.shot}
                      alt={`${p.title} app screen`}
                      width={860}
                      height={1920}
                      className="h-full w-full rounded-[inherit] object-cover object-top"
                    />
                  ) : (
                  <div className={`flex h-full flex-col bg-gradient-to-b ${p.hue} px-4 pt-8`}>
                    <p className="text-left text-xs text-foreground/70">{p.title}</p>
                    <p className="text-left text-xl font-semibold">{p.screen?.[0]}</p>
                    <div className="mt-4 rounded-xl bg-background/70 p-4 text-left">
                      <p className="text-2xl font-semibold">{p.screen?.[1]}</p>
                    </div>
                    {(p.screen ?? []).slice(2).map((r) => (
                      <div key={r} className="mt-2 rounded-xl bg-background/50 px-4 py-3 text-left text-sm">{r}</div>
                    ))}
                    <div className="mt-auto mb-3 flex justify-around rounded-2xl bg-background/70 py-3">
                      <span className="size-2 rounded-full bg-primary" /><span className="size-2 rounded-full bg-muted-foreground/50" /><span className="size-2 rounded-full bg-muted-foreground/50" />
                    </div>
                  </div>
                  )}
                </Link>
                <p className="mt-8 font-mono text-xs text-muted-foreground">{p.tag}</p>
                <h3 className="mt-1 text-xl font-semibold">
                  <Link to="/work/$appId" params={{ appId: p.slug }} className="hover:text-primary">{p.title}</Link>
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                {p.playStoreUrl && (
                  <a
                    href={p.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    View on Play Store
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-sm text-primary">02 — Stack</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}><h3 className="mb-3 text-sm font-medium">{k}</h3><div className="flex flex-wrap gap-2">{v.map((s) => <Chip key={s}>{s}</Chip>)}</div></div>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-sm text-primary">03 — Path</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Experience</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li key={e.role} className="flex flex-col justify-between gap-1 py-5 sm:flex-row sm:items-center">
                <div><p className="font-medium">{e.role}</p><p className="text-sm text-muted-foreground">{e.co}</p></div>
                <span className="font-mono text-xs text-muted-foreground">{e.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="education" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-sm text-primary">04 — Education</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Education</h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {education.map((e) => (
              <li key={e.degree} className="flex flex-col justify-between gap-1 py-5 sm:flex-row sm:items-center">
                <div><p className="font-medium">{e.degree}</p><p className="text-sm text-muted-foreground">{e.school}</p><p className="mt-1 text-xs text-muted-foreground">{e.grade}</p></div>
                <span className="font-mono text-xs text-muted-foreground">{e.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-glow border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="text-4xl font-semibold md:text-6xl">Let's build something <span className="text-primary">great</span>.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Open to full-time roles and freelance collaborations.</p>
          <a href="mailto:mayurpawar4908@gmail.com" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground">mayurpawar4908@gmail.com</a>
          <div className="mt-8 flex justify-center gap-6 font-mono text-sm text-muted-foreground">
            <a href="https://github.com/mayurpawar17" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/mayurpawar17" className="hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">© 2026 Mayur Pawar</footer>
    </div>
  );
}
