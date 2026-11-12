# Memory Ticket — Project Analysis

## 1. Project Overview

**App:** Memory Ticket  
**Purpose:** A Flutter app for recording personal moments as customizable, ticket-style keepsakes. It helps users organize photos and stories with dates, locations, and categories instead of leaving them as unstructured gallery items. The intended audience appears to be people preserving travel, event, and everyday memories.

## 2. Key Features

### Implemented

1. **Memory tickets:** Create, edit, and delete entries with a photo, title, story, date, location, and category.
2. **Photo capture and editing:** Select an image from the camera or gallery and edit it before saving.
3. **Ticket styles:** Choose among ten visual ticket styles.
4. **Category browsing:** Filter the home list using category chips.
5. **Favorites:** Mark memories as favorites and view them in a dedicated collection.
6. **Timeline:** Browse memories chronologically, grouped by month and year.
7. **Local storage and cloud backup:** Save memories locally and sync with Supabase after signing in.
8. **Account and sharing flows:** Register or sign in with email/password or Google; share a ticket as a PNG image.

### Partially implemented / not available

- The search field is present, but does not filter memories.
- The Memory Map screen is a “Coming soon” placeholder.
- Forgot-password UI and backend handling are commented out.
- `camera`, `permission_handler`, and `pdf` are declared dependencies, but I found no direct Dart-source usage for them.

## 3. App Workflow

On first launch, users move through a three-page onboarding flow; completing it stores a preference and opens Home. On later launches, the app opens its four-tab navigation: Home, Timeline, Favorites, and Profile. Users can create or edit a ticket, open its details, toggle its favorite status, delete it, or share it. The app supports guest use with local storage; signing in enables cloud sync and backup.

## 4. Tech Stack

- **Language/framework:** Dart and Flutter Material; Android platform configuration uses Kotlin/Gradle.
- **State management:** `flutter_bloc` (`AuthBloc`, `MemoryBloc`, and `NavigationCubit`); `equatable` for value equality.
- **Dependency injection / structure:** `get_it`.
- **Local persistence:** SQLite through `sqflite`; `shared_preferences` stores onboarding completion.
- **Backend services:** Supabase Auth, database tables (`profiles`, `memories`), and Storage (`memory_images`). Google Sign-In supplies credentials to Supabase.
- **Monitoring:** Firebase Core and Crashlytics.
- **Other active packages:** `image_picker`, `pro_image_editor`, `path_provider`, `share_plus`, `uuid`, `intl`, `cached_network_image`, `google_fonts`, and `flutter_svg`.
- **Build and delivery:** Flutter tooling, Android Gradle Kotlin DSL, and a manually triggered GitHub Actions workflow for Google Play’s alpha track. The checked-in platform scaffold is Android; no iOS or web directories were found.

## 5. Architecture

The app uses a feature-first, Clean Architecture-style structure. Auth and memory features separate **data**, **domain**, and **presentation** layers: repositories implement domain contracts, data sources access Supabase or SQLite, and use cases are invoked by BLoCs. Shared concerns such as navigation, theme, utilities, and dependency registration live under `core` and the injection container.

The memory repository saves locally first. Cloud sync compares local and remote IDs, transfers missing records, and migrates guest records after sign-in; it does not implement a general conflict-resolution strategy.

Key implementation files:

- [`lib/main.dart`](lib/main.dart)
- [`lib/injection_container.dart`](lib/injection_container.dart)
- [`lib/features/memory/data/repo/memory_repository_impl.dart`](lib/features/memory/data/repo/memory_repository_impl.dart)
- [`lib/features/auth/data/datasources/auth_remote_data_source.dart`](lib/features/auth/data/datasources/auth_remote_data_source.dart)

## 6. Portfolio Content

**Professional description (70 words):**

> Memory Ticket is a Flutter mobile app for turning personal photos and stories into customizable digital ticket-style keepsakes. Users can record a title, date, location, description, category, and visual ticket style, then browse memories in a chronological timeline or favorites collection. Records are stored locally in SQLite for guest use and can be synchronized to Supabase after sign-in, including photo uploads. Ticket artwork can be shared as a PNG image.

**Key features:** Ticket creation and editing; photo selection and editing; category and style selection; favorites; chronological timeline; local persistence and cloud sync; PNG sharing.

**Technologies:** Flutter, Dart, BLoC, SQLite, Supabase, Firebase Crashlytics, Google Sign-In.

## 7. Resume Content

**Project description:** Built a Flutter memory-journaling app that stores personal moments as customizable digital tickets, with local persistence, optional cloud backup, and image sharing.

- Implemented memory-ticket CRUD flows with image selection/editing, categories, dates, locations, and ticket styles.
- Used BLoC and a layered repository/use-case structure to manage authentication and memory state.
- Added SQLite persistence for guest use and Supabase Auth, database, and Storage integration for signed-in users.
- Built a chronological timeline, category filters, favorites collection, and PNG ticket-sharing flow.

## 8. Interview Preparation

### 1. How is the project organized?

Auth and memory use data, domain, and presentation layers. Repositories abstract data sources; use cases connect domain operations to presentation BLoCs.

### 2. How does a memory get saved?

The UI dispatches a memory event to `MemoryBloc`, which invokes a use case and repository. The repository writes to SQLite and, for an authenticated user, attempts to sync the record to Supabase.

### 3. How does cloud synchronization work?

The repository migrates guest records, fetches remote and local memories, and transfers records missing on either side. It compares IDs; it is not a full conflict-resolution or merge system.

### 4. How are photos handled?

`image_picker` selects from camera or gallery, `pro_image_editor` produces an edited image saved in app documents, and Supabase Storage uploads local images during sync. Ticket sharing captures the rendered widget as a PNG.

### 5. How is app navigation state managed?

`NavigationCubit` tracks the selected tab. `AppNavigation` keeps each tab in an `IndexedStack` with a separate nested navigator, preserving tab navigation state.

---

*This report is based on the project source and configuration; it does not claim that unimplemented or placeholder screens are complete.*
