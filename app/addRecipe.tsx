import { Ionicons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addMenuItem } from "./data/menuData";

export default function AddMenuScreen() {
  const router = useRouter();

  // State: Hold input values for the new menu item
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  // CRUD: Handle save action for a new menu item
  // Validation: Ensure required fields are filled
  // Persistence: Call addMenuItem to save to AsyncStorage or backend
  // Navigation: Redirect back to main menu after save
  const handleSave = () => {
    if (!name || !price) {
      alert("Please fill all fields"); 
      return;
    }

    addMenuItem({ name, description, course, price });

    // Navigate back to menu list
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Add Menu Item</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>Dish Name</Text>
        <TextInput 
          placeholder="Dish Name" 
          value={name} 
          onChangeText={setName} 
          style={styles.input} 
        />

        <Text style={styles.label}>Description</Text>
        <TextInput 
          placeholder="Description" 
          value={description} 
          onChangeText={setDescription} 
          style={styles.input} 
        />

        <Text style={styles.label}>Select Course</Text>
        <Picker 
          selectedValue={course} 
          onValueChange={setCourse} 
          style={styles.picker}
        >
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>

        <Text style={styles.label}>Price (R)</Text>
        <TextInput 
          placeholder="Price (R)" 
          value={price} 
          keyboardType="numeric" 
          onChangeText={setPrice} 
          style={styles.input} 
        />

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10, position: "relative" },
  backButton: { position: "absolute", left: 0 },
  title: { fontSize: 22, fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#ccc", marginBottom: 15 },
  container: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 15, padding: 15 },
  label: { marginTop: 15, marginBottom: 5, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8 },
  picker: { backgroundColor: "#f2f2f2", marginBottom: 10 },
  saveButton: { marginTop: 15, backgroundColor: "#d3d3d3", padding: 12, borderRadius: 8, alignItems: "center" },
  saveText: { fontWeight: "bold" },
});
