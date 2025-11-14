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

---

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
