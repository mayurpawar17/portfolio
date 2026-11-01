import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject } from "@/lib/projects";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/work/$appId")({
  loader: ({ params }) => {
    const project = getProject(params.appId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "App"} — Mayur Pawar` },
      { name: "description", content: loaderData?.desc ?? "Mobile app case study." },
      { property: "og:title", content: `${loaderData?.title ?? "App"} — Mayur Pawar` },
      { property: "og:description", content: loaderData?.desc ?? "Mobile app case study." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppDetail,
});

function Chip({ children }: { children: string }) {
  return <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{children}</span>;
}

function AppDetail() {
  const p = Route.useLoaderData();
  const screenshots = p.screenshots ?? (p.shot ? [p.shot] : []);
  const frameCount = screenshots.length || 3;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-mono text-sm font-medium">
            Mayur Pawar
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/" hash="work" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
              ← All work
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-glow border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="font-mono text-sm text-primary">{p.tag}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {Array.from({ length: frameCount }, (_, index) => (
            <div
              key={`${p.slug}-screen-${index}`}
              className={`phone block transition-transform duration-300 ${
                index % 2 === 0 ? "lg:-translate-y-6" : "lg:translate-y-6"
              } ${screenshots.length ? "w-72" : "w-56"}`}
              style={screenshots.length ? { aspectRatio: "860 / 1920" } : undefined}
            >
              {screenshots.length ? (
                <img
                  src={screenshots[index % screenshots.length]}
                  alt={`${p.title} screen preview ${index + 1}${index > 0 ? " (mock)" : ""}`}
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
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-3 text-muted-foreground">{p.overview}</p>

            <h2 className="mt-10 text-2xl font-semibold">Key features</h2>
            <ul className="mt-3 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 md:mt-0">
            <div><dt className="font-mono text-xs text-muted-foreground">Role</dt><dd className="mt-1 font-medium">{p.role}</dd></div>
            <div><dt className="font-mono text-xs text-muted-foreground">Year</dt><dd className="mt-1 font-medium">{p.year}</dd></div>
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-2xl font-semibold">Want an app like this?</h2>
          <a href="mailto:mayurpawar4908@gmail.com" className="mt-6 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground">Get in touch</a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">© 2026 Mayur Pawar</footer>
    </div>
  );
}
