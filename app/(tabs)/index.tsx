import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "Soup of the Day", description: "Fresh daily soup", course: "Starters", price: "200" },
    { name: "Grilled Chicken", description: "Served with vegetables", course: "Mains", price: "350" },
  ]);

  const totalItems = menuItems.length;
  const totalPrice = menuItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const courseGroups: Record<string, number[]> = {};
  menuItems.forEach((item) => {
    if (!courseGroups[item.course]) courseGroups[item.course] = [];
    courseGroups[item.course].push(parseFloat(item.price));
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Add Button at top right */}
      <View style={styles.header}>
        <Pressable
          style={styles.addButton}
          onPress={() => router.push("/(tabs)/addRecipe")}
        >
          <MaterialIcons name="add" size={28} color="white" />
        </Pressable>
      </View>

      {/* Boxed content container */}
      <View style={styles.contentBox}>
        <Text style={styles.title}>Chef Christoffel's Menu</Text>
        <View style={styles.divider} />

        <FlatList
          data={menuItems}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R{item.price} </Text>
              </View>
              <Text>{item.description}</Text>
              <Text style={styles.course}>{item.course}</Text>
            </View>
          )}
        />

        {/* Bottom summary section */}
        <View style={styles.bottomSection}>
          <View style={styles.bottomDivider} />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
            <Text style={styles.summaryText}>Total Price: R{totalPrice}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#d3d3d3", 
    borderRadius: 10,
    padding: 10,
  },

  contentBox: {
    flex: 1,
    backgroundColor: "#fff", 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc", 
    padding: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 15,
  },

  subtitle: { marginTop: 10, fontWeight: "600" },

  card: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 5,
  },

  name: { fontSize: 16, fontWeight: "bold" },
  course: { color: "gray" },
  price: { color: "#006600", fontWeight: "bold" },

  bottomSection: {
    marginTop: 15,
  },

  bottomDivider: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
