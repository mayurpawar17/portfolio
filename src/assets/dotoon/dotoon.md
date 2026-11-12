# Dotoon — Project Report

*Based on the source and configuration in `lib/`, `pubspec.yaml`, and the Android app configuration. No application source files were modified.*

## 1. Project Overview

**Dotoon** is a Flutter task-management app for organizing everyday tasks. It lets individual users record tasks, track completion, assign priorities, and review tasks by date. The implementation is aimed at general personal productivity; it does not indicate a specialized audience or team workflow.

## 2. Key Features

### Implemented
- **Personalized onboarding:** Collects a name and saves it locally for the greeting and profile.
- **Task management:** Create, edit, and delete tasks with a required title, optional note, and Low/Medium/High priority.
- **Completion tracking:** Toggle tasks as complete; completed titles are shown with strikethrough styling.
- **Status filters:** View all, pending, or completed tasks.
- **Calendar browsing:** Select a date and view tasks associated with that date.
- **Delete undo:** A deletion displays an Undo action that restores the task.
- **Appearance setting:** Switch between light and dark themes; the chosen mode is persisted.
- **Support links:** Share an app recommendation through the system share sheet or open the developer’s Google Play listing.

### Partially implemented / scope limits
- **Calendar is for browsing, not scheduling:** New tasks receive the current date automatically; the UI does not let users assign or change a task’s date.
- **System theme selection is not exposed in settings:** The code supports a system theme mode, but the settings screen only offers a light/dark toggle.

## 3. App Workflow

On launch, the app loads saved onboarding and theme preferences. A first-time user enters a name before continuing. The Home screen lists tasks and offers status filters; the add button opens a form for a title, optional note, and priority. Users can mark tasks complete, edit them, or delete them and undo a deletion. The Calendar tab filters tasks by selected date. The Profile tab allows name and appearance changes and provides sharing and developer-app links.

## 4. Tech Stack

- **Language/framework:** Dart and Flutter; Android entry point uses Kotlin.
- **State management:** Provider with `ChangeNotifier` providers.
- **Task storage:** SQLite via `sqflite`; task IDs use `uuid`.
- **Preferences:** `shared_preferences` for onboarding and theme settings.
- **UI and utilities:** Syncfusion DateRangePicker, `intl`, `lottie`, `dotted_border`, Eva Icons, `animations`, and `auto_size_text`.
- **Platform integrations:** `share_plus` and `url_launcher`.
- **Build and checks:** Android Gradle Kotlin DSL, Flutter test, and `flutter_lints`.
- **Backend/API:** No application backend or network API is implemented. Share and app-listing actions use platform integrations and an external URL.

## 5. Architecture

The `lib/` directory is organized by feature: **todo**, **onboarding**, and **theme**, with shared utilities, colors, and widgets under **core**. The todo feature separates domain entities, repository contracts, and use cases from its SQLite data source and model; presentation screens and widgets use Provider state. Dependencies are wired manually in `main.dart` through `MultiProvider`. This is a feature-oriented, layered design with repository and use-case patterns.

## 6. Portfolio Content

> Dotoon is a Flutter task-management app for organizing everyday work on-device. Users can create tasks with notes and priority levels, mark them complete, filter by status, and browse tasks by date. The app persists tasks in SQLite and stores onboarding name and appearance preferences locally. Its feature-oriented architecture separates task domain, data, and presentation concerns, with Provider-based state and a focused onboarding, home, calendar, and profile experience.

**Key features:** Local task CRUD, priority levels, completion and status filters, date-based task browsing, persisted onboarding, light/dark themes.

**Technologies:** Flutter, Dart, Provider, SQLite (`sqflite`), `shared_preferences`, Syncfusion DateRangePicker.

## 7. Resume Content

**Project description:** Built Dotoon, a Flutter productivity app for creating, prioritizing, and tracking personal tasks with local persistence and date-based browsing.

- Implemented task creation, retrieval, update, and deletion using `sqflite`, with a repository abstraction and domain use cases.
- Structured the application by feature and separated task entities, data models, persistence, and presentation.
- Managed task, filter, priority, navigation, onboarding, and theme state with Provider and `ChangeNotifier`.
- Persisted tasks in SQLite and saved onboarding and appearance preferences with `shared_preferences`.

## 8. Interview Preparation

1. **How is task persistence implemented?**  
   Tasks are mapped between `Todo` and `TodoModel`; the local data source stores and queries records in an SQLite table through `sqflite`.

2. **Why use a repository and use cases?**  
   The domain depends on a repository contract rather than SQLite directly. The use cases expose task operations while the repository implementation delegates persistence to the local data source.

3. **How does the UI respond to task changes?**  
   Providers extend `ChangeNotifier`; after updating in-memory state, they call `notifyListeners()` so listening widgets rebuild.

4. **How are onboarding and theme choices remembered?**  
   Both use `shared_preferences`. Providers load saved values during initialization and write changes back through their respective service/repository layers.

5. **What does the Calendar screen support?**  
   It uses Syncfusion’s date picker to select a date and displays tasks whose stored date matches it. Tasks are dated when created; the UI does not provide a date-scheduling control.

The test suite includes task use-case CRUD tests using a fake repository in `test/features/todo/domain/usecases/todo_use_cases_test.dart`.
