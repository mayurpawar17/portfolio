import bmiHomePage from "@/assets/bmi/bmiHomePage.jpeg";
import bmiResultPage from "@/assets/bmi/bmiResultPage.jpeg";
import bmiSplashPage from "@/assets/bmi/bmiSplashPage.jpeg";
import vocabularHomePage from "@/assets/vocabular/vocabularHomePage.jpeg";
import vocabularPracticePage from "@/assets/vocabular/vocabularPracticePage.jpeg";
import vocabularSearchPage from "@/assets/vocabular/vocabularSearchPage.jpeg";
import vocabularSplashPage from "@/assets/vocabular/vocabularSplashPage.jpeg";
import dotoonSplashPage from "@/assets/dotoon/dotoonSplashPage.jpeg";
import dotoonHomePage from "@/assets/dotoon/dotoonHomePage.jpeg";
import dotoonEditPage from "@/assets/dotoon/dotoonEditPage.jpeg";
import dotoonCalenderPage from "@/assets/dotoon/dotoonCalenderPage.jpeg";
import memoryCreatePage from "@/assets/memory/memoryCreatePage.jpeg";
import memoryHomePage from "@/assets/memory/memoryHomePage.jpeg";
import memorySplashPage from "@/assets/memory/memorySplashPage.jpeg";
import memoryTimelinePage from "@/assets/memory/memoryTimelinePage.jpeg";

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
    shot: memorySplashPage,
    screenshots: [memoryHomePage, memoryTimelinePage, memoryCreatePage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.memoryticket",
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
    shot: vocabularSplashPage,
    screenshots: [vocabularHomePage, vocabularSearchPage, vocabularPracticePage],
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
    shot: dotoonSplashPage,
    screenshots: [dotoonHomePage, dotoonEditPage, dotoonCalenderPage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.dotoon",
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
    slug: "bmi-fitindex-pro-details",
    title: "BMI FitIndex Pro",
    tag: "Android · Flutter",
    desc: "BMI calculator with male/female profiles, metric & imperial units and a clean dark UI.",
    stack: ["Flutter", "Dart"],
    hue: "from-primary/70 to-accent",
    shot: bmiSplashPage,
    screenshots: [bmiHomePage, bmiResultPage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro",
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
];

export function getProject(slug: string) {
  return mobileProjects.find((p) => p.slug === slug);
}
