# 📱 Chef Christoffel’s Menu App (React Native + Expo)

---

## 1. Project Overview

**Chef Christoffel’s Menu App** is a **mobile application** built using **React Native**, **TypeScript**, and **Expo**.  
The app allows users to manage a restaurant menu through basic **CRUD operations** — adding items, viewing items, filtering by course, deleting items, and calculating summary values (totals & averages).  

This app is designed for **learning and assessment purposes**, supporting **functionality demonstrations**, **code evidence**, and **academic integrity**.

### What the App Does

- **Create:** Add new menu items
- **Read:** List menu items with pricing and course category
- **Delete:** Remove menu items
- **Filter:** Filter items by course (`Starters / Mains / Desserts`)
- **Calculate:**
  - Total items
  - Total combined value
  - Average price per course (Starters, Mains, Desserts)

### How to Run the App (Expo Go)

1. Install **Expo Go** from **Google Play** or the **Apple App Store**.
2. Clone this project:
```bash
git clone <repo-url>
cd <project-folder>
```
3. Install project dependencies:
```bash
npm install
```
4. Start the Expo development server:
```bash
npx expo start
```
5. Scan the QR code in your terminal or browser using Expo Go.

---

## 2. Features

### Core CRUD Features

| **Feature** | **Description** | **Code Reference** |
|------------|----------------|-----------------|
| **Create** | Add new menu items with validation | `app/addRecipe.tsx` (`handleSave`) |
| **Read** | View menu items using `FlatList` | `app/(tabs)/index.tsx` |
| **Update** | Not required for this project | — |
| **Delete** | Remove menu items by name | `removeMenuItem()` |

### Supporting Features

#### 🍽 Filtering
- Categories: **All / Starters / Mains / Desserts**
- Implemented with **`useMemo`** for high-performance recalculation

#### ✅ Validation
- **Required fields:** dish name and price

#### 💰 Price Calculations
- **Total price**
- **Averages by course** using `getAveragePriceByCourse()`

#### 🧭 Navigation
- Implemented with **Expo Router** using `useRouter()`

---

## 3. Technical Stack
### 🖥️ Languages & Frameworks
- **React Native**
- **TypeScript**
- **Expo** (SDK 50+)

### 📚 Core Libraries
| **Purpose**           | **Library**                                      |
|-----------------------|-------------------------------------------------|
| Navigation            | `expo-router`                                   |
| UI Icons              | `@expo/vector-icons` (Ionicons, MaterialIcons) |
| Picker Component      | `@react-native-picker/picker`                   |
| Safe Layout Handling  | `react-native-safe-area-context`               |

### ⚙️ State & Data Handling
- **React Hooks**: `useState`, `useEffect`, `useMemo`
- **In-memory data management**: `menuData.tsx`
- **Structure ready for AsyncStorage expansion** for persistent storage

---
## 4. Setup & Installation

### Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js v16+**
- **npm** or **yarn**
- **Expo CLI**  
```bash
Install **Expo CLI** globally:
```
### Install Dependencies
```bash
npm install
```

### Run the App
```bash
npx expo start
```

### Open on Device
- **Scan the QR code using Expo Go**
- **Or run on emulator:**
-- **Press a → Android Emulator**
-- **Press i → iOS Simulator**

---

## 5. Code Sources, Adaptations, and Rationale

This project uses **original code**, structured intentionally to demonstrate the following:
- **CRUD logic**
- **Reusable modules**
- **Filtering mechanics**
- **Validation**
- **Navigation best practices**

### Adaptations Made
#### 1. Separate Data Module (`menuData.tsx`)

**Why:**  
To ensure a **clean modular architecture** and isolate **CRUD logic** from **UI layers**.

**Changes Applied:**

- Created full **CRUD helpers**:
  - `addMenuItem()`
  - `removeMenuItem()`
- Implemented **advanced average-price logic** using:
  - `for...in`
  - `for...of`
  - `Array.reduce()`

#### 2. Custom Add Item Screen (`addRecipe.tsx`)

**Why:**  
To demonstrate **validation**, **controlled form inputs**, and **navigation flow**.

**Changes Applied:**

- Added **form validation** with **alerts**
- Implemented **SafeAreaView** with **custom styling**
- Added **navigation** using `router.push()` after saving

#### 3. Home Screen Enhancements (`index.tsx`)

**Why:**  
To visually demonstrate **real-time data summarization**.

**Changes Applied:**

- Added **summary metrics** (**totals** + **averages**)
- Improved **FlatList design**
- Implemented **dynamic recalculation** using **hooks**

#### 4. Filter Screen Rewrite (`filter.tsx`)

**Why:**  
To fix **filtering issues** and support **repeated filtering actions**.

**Changes Applied:**

- Introduced **useMemo** for **efficient filtering**
- Added **two-layer filter state**:
  - `selectedCourse` (**radio state**)
  - `appliedCourse` (**filter applied**)
- Improved **UI hit zones** for **radio buttons**

---

## 6. Harvard: Anglia (IIE) Reference List

### 🏛 Institutional Sources
- **IIE**. (2024) *MAST5112POE*. Available at: [https://advtechonline.sharepoint.com/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B0358D574-E8A9-48D7-A374-45CD8B440339%7D&file=MAST5112POE.docx&action=default&mobileredirect=true&CT=1763058684466&OR=ItemsView](https://advtechonline.sharepoint.com/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B0358D574-E8A9-48D7-A374-45CD8B440339%7D&file=MAST5112POE.docx&action=default&mobileredirect=true&CT=1763058684466&OR=ItemsView)

### 💻 Core Technology Documentation
- **Expo**. (2025) *Expo Documentation*. Available at: [https://docs.expo.dev](https://docs.expo.dev)  
- **Expo**. (2025) *Expo Router*. Available at: [https://docs.expo.dev/versions/latest/sdk/router/](https://docs.expo.dev/versions/latest/sdk/router/)  
- **Expo**. (2025) *Checkbox Component Documentation*.  Available at: [https://docs.expo.dev/versions/latest/sdk/checkbox/](https://docs.expo.dev/versions/latest/sdk/checkbox/)
- **Expo**. (2025) *Picker Usage Documentation*.  Available at: [https://docs.expo.dev/versions/latest/sdk/picker/](https://docs.expo.dev/versions/latest/sdk/picker/)
- **Expo**. (2025) *Expo Vector Icons Documentation* Available at: [https://docs.expo.dev/guides/icons/](https://docs.expo.dev/guides/icons/)
- **Meta**. (2025) *React Native Documentation*. Available at: [https://reactnative.dev](https://reactnative.dev)  
- **Meta**. (2025) *React Documentation*. Available at: [https://react.dev](https://react.dev)  
