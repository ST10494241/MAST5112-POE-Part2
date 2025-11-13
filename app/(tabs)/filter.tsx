import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuItems } from "../data/menuData";

export default function FilterScreen() {
  // State: Currently selected course before applying filter
  const [selectedCourse, setSelectedCourse] = useState("All");

  // State: Applied course filter that drives displayed menu
  const [appliedCourse, setAppliedCourse] = useState("All");

  // List of course options for filtering UI
  const courses = ["All", "Starters", "Mains", "Desserts"];

  const filteredItems = useMemo(() => {
    if (appliedCourse === "All") return menuItems; // No filter applied
    // Filter menu by selected course
    return menuItems.filter((item) => item.course === appliedCourse);
  }, [appliedCourse]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Filter Menu</Text>
        <View style={styles.divider} />

        <View style={styles.radioRowContainer}>
          {courses.map((course) => (
            <TouchableOpacity
              key={course}
              style={styles.radioRow}
              onPress={() => setSelectedCourse(course)} 
            >
              <View style={[styles.radioCircle, selectedCourse === course && styles.selectedRadio]} />
              <Text style={styles.radioLabel}>{course}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => setAppliedCourse(selectedCourse)}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>

      </View>

      {/* Display filtered menu items in a scrollable list */}
      <FlatList
        data={filteredItems} 
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R{item.price}</Text>
            </View>
            <Text>{item.description}</Text>
            <Text style={styles.course}>{item.course}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  contentBox: { backgroundColor: "#fff", borderRadius: 15, borderWidth: 1, borderColor: "#ccc", padding: 15, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  divider: { height: 1, backgroundColor: "#ccc", marginBottom: 15 },
  radioRowContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  radioRow: { flexDirection: "row", alignItems: "center" },
  radioCircle: { height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: "#888", marginRight: 5 },
  selectedRadio: { backgroundColor: "#888" }, 
  radioLabel: { fontSize: 16 },
  applyButton: {
    marginTop: 15,
    backgroundColor: "#d3d3d3",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: { backgroundColor: "#f9f9f9", padding: 10, marginVertical: 5, borderRadius: 10 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 },
  name: { fontSize: 16, fontWeight: "bold" },
  course: { color: "gray" },
  price: { color: "#006600", fontWeight: "bold" },
});
