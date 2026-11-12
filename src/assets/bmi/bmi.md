# BMI FitIndex Pro — Project Report

## 1. Project Overview

**BMI FitIndex Pro** is a Flutter app that calculates Body Mass Index (BMI) from a user’s height and weight. It provides a quick BMI estimate, category, and brief guidance. It is intended for people who want a simple personal BMI check, not a clinical assessment.

## 2. Key Features

**Implemented**
- **Gender selection:** Male and female cards with illustrations; selection is required before calculation.
- **Height input:** A centimetre slider or feet-and-inches pickers.
- **Weight input:** Kilogram or pound pickers, with weight converted when switching units.
- **BMI calculation:** Calculates BMI and assigns a category.
- **Results display:** Shows the BMI, category, brief guidance, and a color-coded gauge.
- **Theme options:** Light, dark, and system theme modes; the selected mode is saved locally.
- **Interaction feedback:** Haptic feedback and animated theme and navigation transitions.

**Partially implemented / limitations**
- Gender affects selection and form validation only; it does not change the BMI formula.
- Centimetre and feet/inch values are stored separately. Switching height units does not convert an entered height.
- BMI history, accounts, and syncing are not implemented.
- The checked-in widget test is still the default counter smoke test, not an app-specific test.

## 3. App Workflow

The user selects a gender, enters height and weight, and can switch between metric and imperial controls. Tapping **Calculate BMI** computes the result and opens the results screen. Result text appears after a short delay alongside the gauge. **Edit Information** returns to the input screen.

## 4. Tech Stack

- **Language/framework:** Dart and Flutter (SDK constraint `^3.7.2`)
- **UI:** Flutter Material and Cupertino widgets, custom reusable widgets, and bundled Open Sans font
- **State management:** Provider and `ChangeNotifier`
- **Packages:** `provider`, `shared_preferences`, `fl_chart`, and `animations`
- **Persistence:** SharedPreferences stores the theme mode; BMI inputs and results are held in memory
- **APIs/database:** No remote API or application database is implemented
- **Platform/build:** Android configuration using Gradle Kotlin DSL and Kotlin

## 5. Architecture

The app initializes BMI and theme providers above `MaterialApp` in `main.dart`. BMI state, unit conversion, category selection, and calculation live in `bmi_provider.dart`.

The BMI feature separates screens and controls under `features/bmi/presentation`; shared widgets and utilities are under `core`. The theme feature separates its provider, theme definitions, and SharedPreferences service. Screens read state through Provider and navigate between calculator and result screens with Flutter’s `Navigator`. This is a feature-organized UI/provider structure, rather than a layered domain/repository architecture.

## 6. Portfolio Content

> Built BMI FitIndex Pro, a Flutter mobile app that lets users enter height and weight using metric or imperial controls and calculate BMI locally. The app presents a BMI category, color-coded gauge, and brief category-based guidance. Provider and ChangeNotifier manage input and theme state, while SharedPreferences persists the theme preference. The interface uses reusable Flutter widgets, animated navigation, and haptic feedback. No account, remote API, or BMI history is implemented.

## 7. Resume Content

**BMI FitIndex Pro — Flutter BMI Calculator**

- Built a Flutter BMI calculator with height and weight input controls for metric and imperial units.
- Implemented BMI calculation, category classification, and a color-coded gauge using `fl_chart`.
- Managed application and theme state with Provider and `ChangeNotifier`.
- Persisted theme preferences locally using SharedPreferences and added light, dark, and system theme support.

## 8. Interview Preparation

1. **How is BMI calculated in the app?**  
   The app converts height to metres and calculates `weightKg / (heightMetres * heightMetres)`. Imperial inputs are converted to metric units before calculation.

2. **How is state managed?**  
   `BmiProvider` and `ThemeProvider` use `ChangeNotifier`; screens subscribe through Provider consumers and rebuild when notified.

3. **How does unit switching work?**  
   Switching weight units converts between kilograms and pounds. Height values are maintained separately for centimetres and feet/inches, so switching height units does not convert the current entry.

4. **How is the BMI result visualized?**  
   A `fl_chart` pie chart draws colored BMI ranges. A rotated icon acts as a needle, and the BMI value is color-coded by category.

5. **How is the theme preference persisted?**  
   `ThemeService` stores the `ThemeMode` enum index in SharedPreferences. The provider starts in system mode, then loads the saved preference asynchronously.