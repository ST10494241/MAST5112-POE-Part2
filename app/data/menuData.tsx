// Global store for menu items and helper functions
// Purpose: Acts as an in-memory data store and provides utilities for menu operations

export interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: string; // Stored as string; conversion needed for calculations
}

// Initial data: Pre-populated menu items
export let menuItems: MenuItem[] = [
  { name: "Soup of the Day", description: "Fresh daily soup", course: "Starters", price: "200" },
  { name: "Grilled Chicken", description: "Served with vegetables", course: "Mains", price: "350" },
  { name: "Chocolate Cake", description: "Rich and moist", course: "Desserts", price: "180" },
];

// Feature: Add menu item
// Why: Implements "Create" functionality in CRUD
export function addMenuItem(item: MenuItem) {
  menuItems.push(item);
}

// Feature: Remove menu item by name
// Why: Implements "Delete" functionality in CRUD
// Note: Removes all items matching the name; 
export function removeMenuItem(name: string) {
  menuItems = menuItems.filter((item) => item.name !== name);
}

// Feature: Calculate average price per course
// Why: Demonstrates data retrieval, aggregation, and calculation
// Steps:
// 1. Group items by course
// 2. Convert string prices to float
// 3. Calculate sum and average per course
// 4. Return averages as record with 2 decimal precision
export function getAveragePriceByCourse(): Record<string, number> {
  const courseGroups: Record<string, number[]> = {};

  // Group prices by course using a for...of loop
  for (const item of menuItems) {
    if (!courseGroups[item.course]) courseGroups[item.course] = [];
    courseGroups[item.course].push(parseFloat(item.price)); // Conversion from string to number
  }

  const averages: Record<string, number> = {};

  // Calculate average per course using for...in loop
  for (const course in courseGroups) {
    const prices = courseGroups[course];
    const total = prices.reduce((sum, p) => sum + p, 0); // Sum all prices
    averages[course] = parseFloat((total / prices.length).toFixed(2)); // Round to 2 decimals
  }

  return averages;
}
