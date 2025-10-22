import { Ionicons } from '@expo/vector-icons'; // for back arrow
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddMenuScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }
    alert(`Item "${name}" added!`);
    router.back();
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

        <Text style={styles.labelWhite}>Dish Name</Text>
        <TextInput
          placeholder="Dish Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.labelWhite}>Description</Text>
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />

        <Text style={styles.labelWhite}>Select Course</Text>
        <Picker
          selectedValue={course}
          onValueChange={setCourse}
          style={styles.picker}
        >
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>

        <Text style={styles.labelWhite}>Price (R)</Text>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", 
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  labelWhite: {
    color: "black",
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 15,
    backgroundColor: "#d3d3d3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveText: { 
    color: "black", 
    fontWeight: "bold" 
  },
});
