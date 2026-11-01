import bmiShot from "@/assets/bmi1.png";

export type MobileProject = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  hue: string;
  screen?: string[];
  shot?: string;
  screenshots?: string[];
  playStoreUrl?: string;
  overview: string;
  features: string[];
  role: string;
  year: string;
};

export const mobileProjects: MobileProject[] = [
  {
    slug: "bmi-fitindex-pro",
    title: "BMI FitIndex Pro",
    tag: "Android · Flutter",
    desc: "BMI calculator with male/female profiles, metric & imperial units and a clean dark UI.",
    stack: ["Flutter", "Dart"],
    hue: "from-primary/70 to-accent",
    shot: bmiShot,
    screenshots: [bmiShot, bmiShot, bmiShot],
    playStoreUrl: "https://play.google.com/store/search?q=BMI%20FitIndex%20Pro&c=apps",
    overview:
      "BMI FitIndex Pro is a fast, privacy-first body mass index calculator for Android. It supports male and female profiles, both metric and imperial units, and presents results with a clean, dark, glanceable interface.",
    features: [
      "Male & female profile support",
      "Metric and imperial unit systems",
      "Instant BMI calculation with category breakdown",
      "Clean dark UI built with Flutter",
      "Fully offline — no account, no data leaves the device",
    ],
    role: "Design & development",
    year: "2025",
  },
  {
    slug: "pulse-fit",
    title: "Pulse Fit",
    tag: "iOS · Android",
    desc: "Workout tracker with offline sync and wearable integration.",
    stack: ["React Native", "Firebase"],
    hue: "from-primary/70 to-accent",
    screen: ["Today", "4,820 kcal", "Run · 5.2 km", "Strength · 45m"],
    overview:
      "Pulse Fit is a cross-platform workout tracker that keeps logging even without a connection. Sessions sync automatically when you're back online, and wearable data flows in from popular fitness devices.",
    features: [
      "Offline-first workout logging with background sync",
      "Wearable integration for heart rate and activity",
      "Daily calorie and activity dashboard",
      "Run, strength and cardio session types",
    ],
    role: "Lead mobile engineer",
    year: "2024",
  },
  {
    slug: "basket",
    title: "Basket",
    tag: "Grocery delivery",
    desc: "Ordering app with live courier tracking and one-tap reorder.",
    stack: ["Flutter", "Node", "Maps API"],
    hue: "from-chart-2/70 to-secondary",
    screen: ["Your cart", "Avocados ×3", "Oat milk ×2", "Checkout ₹640"],
    overview:
      "Basket is a grocery delivery app focused on speed: one-tap reorders, a smart cart and live courier tracking on the map from store to doorstep.",
    features: [
      "Live courier tracking on an interactive map",
      "One-tap reorder of past baskets",
      "Smart cart with substitution preferences",
      "Real-time order status notifications",
    ],
    role: "Full stack engineer",
    year: "2023",
  },
  {
    slug: "notely",
    title: "Notely",
    tag: "Productivity",
    desc: "Markdown notes with end-to-end encrypted sync across devices.",
    stack: ["Swift", "Kotlin", "Rust"],
    hue: "from-chart-4/60 to-muted",
    screen: ["Notes", "Sprint planning", "Reading list", "Ideas ✦"],
    overview:
      "Notely is a markdown-first notes app with end-to-end encrypted sync. Notes are encrypted on device before they ever touch the network, so only you can read them.",
    features: [
      "End-to-end encrypted sync across devices",
      "Native iOS and Android apps with a shared Rust core",
      "Full markdown support with live preview",
      "Instant full-text search",
    ],
    role: "Founding engineer",
    year: "2022",
  },
];

export function getProject(slug: string) {
  return mobileProjects.find((p) => p.slug === slug);
}
