import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoleSelectionScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", { role: "guest" })}
      >
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.chefButton]}
        onPress={() => navigation.navigate("ChefPin")}
      >
        <Text style={styles.buttonText}>Chef</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginVertical: 10,
  },
  chefButton: {
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
