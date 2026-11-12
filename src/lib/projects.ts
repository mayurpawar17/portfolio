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
  platform: string;
  storage: string;
};

export const mobileProjects: MobileProject[] = [
  {
    slug: "vocabular",
    title: "Vocabular",
    tag: "Android · Flutter",
    desc: "An English vocabulary learning app with word review, search, quizzes, and pronunciation.",
    stack: ["Flutter", "Dart", "BLoC", "GoRouter", "Firebase", "Kotlin"],
    hue: "from-primary/70 to-accent",
    shot: vocabularSplashPage,
    screenshots: [vocabularHomePage, vocabularSearchPage, vocabularPracticePage],
    overview:
      "Vocabular is a Flutter vocabulary-learning app for English learners, combining a swipe-based word feed, searchable Firestore dictionary, and multiple-choice practice. It supports word pronunciation with configurable device voices, shareable word cards, saved appearance preferences, and an Android home-screen widget. Firebase provides authentication and cloud-hosted vocabulary; review status and quiz scores are not saved as learning history.",
    features: [
      "Review vocabulary cards with definitions and examples",
      "Search a Firestore-backed word collection",
      "Practice with multiple-choice quizzes and session scores",
      "Hear word pronunciations with selectable text-to-speech voices",
      "Use an Android home-screen widget to review cached words",
    ],
    platform: "Android",
    storage: "Cloud Firestore, SharedPreferences",
  },
  {
    slug: "memory-ticket",
    title: "Memory Ticket",
    tag: "Android · Flutter",
    desc: "A memory journal that turns photos and stories into customizable digital ticket keepsakes.",
    stack: ["Flutter", "Dart", "BLoC", "SQLite", "Supabase", "Google Sign-In"],
    hue: "from-primary/70 to-accent",
    shot: memorySplashPage,
    screenshots: [memoryHomePage, memoryTimelinePage, memoryCreatePage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.memoryticket",
    overview:
      "Memory Ticket is a Flutter app for turning personal photos and stories into customizable digital ticket-style keepsakes. Users record a title, date, location, description, category, and ticket style, then browse memories in a timeline or favorites collection. SQLite supports guest use; signing in enables Supabase sync and photo uploads. Ticket artwork can also be shared as a PNG image.",
    features: [
      "Create, edit, and delete photo-based memory tickets",
      "Choose from ten ticket styles and organize by category",
      "Browse memories by month or in a favorites collection",
      "Save memories locally and sync with Supabase after sign-in",
      "Share ticket artwork as a PNG image",
    ],
    platform: "Android",
    storage: "SQLite, Supabase",
  },
  {
    slug: "dotoon",
    title: "Dotoon",
    tag: "Android · Flutter",
    desc: "A personal task manager for creating, prioritizing, and reviewing tasks on-device.",
    stack: ["Flutter", "Dart", "Provider", "SQLite", "SharedPreferences"],
    hue: "from-chart-2/70 to-secondary",
    shot: dotoonSplashPage,
    screenshots: [dotoonHomePage, dotoonEditPage, dotoonCalenderPage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.dotoon",
    overview:
      "Dotoon is a Flutter task-management app for organizing everyday tasks on-device. Users can add notes and priorities, track completion, filter by status, and browse tasks by date. Tasks are stored in SQLite, with onboarding and appearance preferences saved locally. Its feature-oriented structure uses Provider and ChangeNotifier; calendar browsing is available, but users cannot schedule or change a task's date.",
    features: [
      "Create, edit, and delete tasks with optional notes",
      "Low, medium, and high task priorities",
      "Completion tracking with all, pending, and completed filters",
      "Date-based calendar browsing for tasks",
      "Persisted onboarding and light/dark theme preferences",
    ],
    platform: "Android",
    storage: "SQLite, SharedPreferences",
  },
  {
    slug: "bmi-fitindex-pro",
    title: "BMI FitIndex Pro",
    tag: "Android · Flutter",
    desc: "A personal BMI calculator with metric and imperial inputs, visual results, and saved theme preferences.",
    stack: ["Flutter", "Dart", "Provider", "SharedPreferences", "fl_chart"],
    hue: "from-primary/70 to-accent",
    shot: bmiSplashPage,
    screenshots: [bmiHomePage, bmiResultPage],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devmayur.bmi_fitindex_pro",
    overview:
      "BMI FitIndex Pro is a Flutter app for calculating a personal BMI estimate from height and weight. It supports metric and imperial input, then presents a category, brief guidance, and a color-coded gauge. Provider manages calculator and theme state, while SharedPreferences saves the theme choice. The app does not include BMI history, accounts, or cloud sync.",
    features: [
      "Height and weight entry with metric and imperial controls",
      "BMI calculation with category-based guidance",
      "Color-coded BMI range gauge",
      "Light, dark, and system themes with saved preference",
      "Animated navigation and haptic feedback",
    ],
    platform: "Android",
    storage: "SharedPreferences (theme only)",
  },
];

export function getProject(slug: string) {
  return mobileProjects.find((p) => p.slug === slug);
}
