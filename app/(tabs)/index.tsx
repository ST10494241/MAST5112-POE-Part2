import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAveragePriceByCourse, menuItems, removeMenuItem } from "../data/menuData";

export default function HomeScreen() {
  const router = useRouter();

  // State: Holds current menu items displayed on the screen
  const [menu, setMenu] = useState(menuItems);

  // State: Holds computed average price per course (starter, main, dessert)
  const [averages, setAverages] = useState<Record<string, number>>({});

  // Effect: Refresh menu and averages on initial render or when menuItems change
  useEffect(() => {
    setMenu([...menuItems]); 
    setAverages(getAveragePriceByCourse()); 
  }, [menuItems]);

  // Feature: Remove a menu item (CRUD: Delete)
  // Why: Allows user to remove items from the menu
  const handleRemove = (name: string) => {
    removeMenuItem(name); // Remove from data source
    setMenu([...menuItems]); 
    setAverages(getAveragePriceByCourse()); // Recalculate averages after deletion
  };

  // Getting Total number of items in menu
  const totalItems = menu.length;

  //Getting Total price of all menu items (sum of price fields)
  const totalPrice = menu.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.addButton}
          onPress={() => router.push("/addRecipe")} // Navigate to Add Recipe screen
        >
          <MaterialIcons name="add" size={28} color="white" />
        </Pressable>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.title}>Chef Christoffel's Menu</Text>
        <View style={styles.divider} />

        {/* List of menu items */}
        <FlatList
          data={menu}
          keyExtractor={(_, i) => i.toString()} 
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R{item.price}</Text>
              </View>
              <Text>{item.description}</Text>
              <Text style={styles.course}>{item.course}</Text>

              {/* CRUD: Delete item */}
              <TouchableOpacity onPress={() => handleRemove(item.name)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Summary and Averages */}
        <View style={styles.bottomSection}>
          <View style={styles.bottomDivider} />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
            <Text style={styles.summaryText}>Total Price: R{totalPrice}</Text>
          </View>

          {/* Display average prices per course */}
          <View style={styles.averageBox}>
            <Text style={styles.avgTitle}>Average Prices by Course:</Text>
            {Object.entries(averages).map(([course, avg]) => (
              <Text key={course} style={styles.avgText}>
                {course}: R{avg}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Styles for layout, spacing, and presentation
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "flex-end", marginBottom: 10 },
  addButton: { backgroundColor: "#d3d3d3", borderRadius: 10, padding: 10 },
  contentBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  divider: { height: 1, backgroundColor: "#ccc", marginBottom: 15 },
  card: { backgroundColor: "#f9f9f9", padding: 10, marginVertical: 5, borderRadius: 10 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
  name: { fontSize: 16, fontWeight: "bold" },
  course: { color: "gray" },
  price: { color: "#006600", fontWeight: "bold" },
  removeText: { color: "red", marginTop: 5, textAlign: "right" },
  bottomSection: { marginTop: 15 },
  bottomDivider: { height: 1, backgroundColor: "#ccc", marginBottom: 10 },
  summary: { flexDirection: "row", justifyContent: "space-between" },
  summaryText: { fontWeight: "600", fontSize: 16 },
  averageBox: { marginTop: 15 },
  avgTitle: { fontWeight: "bold" },
  avgText: { color: "#333" },
});
