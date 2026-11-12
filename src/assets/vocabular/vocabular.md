# Vocabular Project Report

## 1. Project Overview

**App:** Vocabular  
**Purpose:** A Flutter app for learning English vocabulary through word review, search, and multiple-choice practice.  
**Problem it addresses:** Gives learners a single place to discover definitions and examples, practise recall, and hear word pronunciations.  
**Target users:** English learners looking for self-guided vocabulary study.

## 2. Key Features

### Implemented

1. **Account access:** Email/password registration and sign-in with Firebase Authentication; signed-out users are directed to the login or registration screens.
2. **Vocabulary feed:** Presents Firestore words as cards. Users tap to reveal definitions and examples, and swipe or use buttons to mark words “known” or “to learn.”
3. **Word search:** Searches Firestore by word prefix, with debounced input and a results list.
4. **Practice quiz:** Builds up to 10 multiple-choice definition questions from available vocabulary, shows feedback, and displays a score at completion. The selected word set is cached for 24 hours.
5. **Pronunciation:** Reads words using installed English text-to-speech voices; users can select a voice.
6. **Word sharing:** Renders a word card as an image for sharing.
7. **Appearance settings:** Offers system, light, and dark themes, saving the choice locally.
8. **Android home-screen widget:** Displays a cached word, definition, and optional example; widget actions advance the word or hide/reveal its meaning.

### Partially implemented / limitations

- “Known,” “to learn,” and bookmark states are maintained in the feed UI, but are not persisted as user learning history. Bookmarks do not currently connect to the corresponding Firestore rules.
- Quiz scores are shown at the end of a session but are not saved as results.
- The widget’s Android implementation uses cached local data; iOS WidgetKit support is not present.
- Firebase options are configured for Android only. Other Flutter platform folders exist, but are not configured for Firebase by this project.

## 3. App Workflow

1. The app initializes Firebase, loads the saved theme, initializes the Android widget where supported, and observes authentication state.
2. Signed-out users can register or sign in with email and password.
3. After authentication, users enter the four-tab app: **Feed**, **Search**, **Practice**, and **Profile**.
4. In Feed, users review cards, reveal meanings, hear pronunciation, share cards, and mark words by swipe or button.
5. Search queries the shared Firestore vocabulary collection. Practice generates questions from the available vocabulary and reports the session score.
6. Profile provides theme and pronunciation settings, account details, sharing, review-store, contact, and sign-out actions.
7. On Android, the home-screen widget can update the displayed word without opening the app; tapping the widget opens the feed.

## 4. Tech Stack

- **Languages/frameworks:** Dart, Flutter; Kotlin for the native Android widget.
- **State and navigation:** `flutter_bloc`, `equatable`, `go_router`. Practice also uses widget-local state.
- **Backend:** Firebase Core, Firebase Authentication, Cloud Firestore, and Crashlytics.
- **Local persistence:** `shared_preferences` for theme, TTS voice selection, and practice-set IDs/expiry; `home_widget` for widget data.
- **Device integrations:** `flutter_tts`, `share_plus`, `url_launcher`.
- **Build and quality tools:** Flutter tooling, `flutter_test`, `flutter_lints`, launcher-icon tooling, Android Gradle Kotlin DSL, and JVM 17.
- **Data stores/APIs:** Firestore provides shared vocabulary; device preferences store selected settings and cached state. No REST API or general-purpose local database is evident in the implementation.

## 5. Architecture

The Dart app is organized by feature, with shared code under `core`:

- Feature modules separate **presentation** (pages and BLoCs), **domain** (entities, repository contracts, use cases), and **data** (data sources and repository implementations).
- Firebase Auth and Firestore are accessed through data sources and repositories; Firestore vocabulary documents are validated and mapped into domain entities.
- Dependencies are constructed manually at startup and passed into the router and feature pages.
- `GoRouter` handles navigation and redirects based on the authentication BLoC state.
- The Android widget is a native `AppWidgetProvider` using `RemoteViews`; Flutter and the native provider exchange JSON payloads through `home_widget`.

## 6. Portfolio Content

> Vocabular is a Flutter vocabulary-learning app that helps English learners build and review vocabulary through a swipe-based word feed, searchable Firestore dictionary, and daily multiple-choice practice. It supports word pronunciation with configurable device voices, shareable word cards, saved appearance preferences, and an Android home-screen widget for quick revision. The app combines Firebase authentication and cloud-hosted vocabulary with local preferences and a layered, feature-oriented architecture.

**Key features:** Vocabulary feed and search, multiple-choice practice, text-to-speech, shareable word cards, theme preferences, Android home-screen widget.

**Technologies:** Flutter, Dart, BLoC, GoRouter, Firebase Authentication, Cloud Firestore, Crashlytics, SharedPreferences, Kotlin, Android App Widgets.

## 7. Resume Content

**Project description:** Built Vocabular, a Flutter vocabulary-learning app with Firebase authentication, a Firestore-backed word feed and search, daily cached quiz sets, text-to-speech, and an Android home-screen widget.

- Implemented email/password authentication and authentication-aware navigation using Firebase Auth, BLoC, and GoRouter.
- Built Firestore vocabulary retrieval and prefix search with document validation, case handling, deduplication, and result limits.
- Developed interactive vocabulary review and multiple-choice practice flows with local caching of daily practice word IDs.
- Integrated configurable device text-to-speech, image-based word sharing, and locally persisted theme preferences.
- Connected Flutter vocabulary data to a native Kotlin Android widget supporting cached word display and reveal/advance actions.

## 8. Interview Preparation

1. **How is the app organized?**  
   It uses feature-oriented layers: presentation pages/BLoCs, domain entities/use cases/repository contracts, and data sources/repository implementations. Dependencies are wired manually during app startup.

2. **How does vocabulary search work?**  
   The UI debounces input, then the Firestore data source runs prefix queries for lowercase and title-case forms. Results are deduplicated by document ID, sorted, and limited to 30.

3. **How are daily practice questions selected?**  
   The app loads available words, reuses cached word IDs if the 24-hour expiry has not passed, otherwise selects a new set of up to 10 and saves the IDs and expiry in preferences. Quiz answers and scores remain session-local.

4. **How does the Android widget work without the Flutter UI open?**  
   Flutter writes a JSON payload and word list through `home_widget`. A native Kotlin `AppWidgetProvider` reads the cached data, renders it with `RemoteViews`, and handles next-word and reveal/hide actions.

5. **How is authentication tied to navigation?**  
   The authentication BLoC observes Firebase auth-state changes. A router refresh notifier causes `GoRouter` redirects so signed-out users reach login/register and authenticated users can access the main app.
