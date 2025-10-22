import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

/**
 * This screen allows users to choose their role:
 * - "Guest" → Navigates directly to the public Home screen.
 * - "Chef"  → Requires authentication via a PIN before accessing the menu editor.
 * It acts as a simple role-based access gate within the app.
 */
export default function RoleSelectionScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>

      {/* Guest Button: Goes directly to the Home screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", { role: "guest" })}
      >
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>

    {/* Chef Button: Navigates to the Chef PIN screen for secure access */}
      <TouchableOpacity
        style={[styles.button, styles.chefButton]}
        onPress={() => navigation.navigate("ChefPin")}>
        <Text style={styles.buttonText}>Chef</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Styles
 * Warm beige background for visual consistency.
 * Centered layout to focus attention on role selection buttons.
 * Black and dark-gray buttons create clear visual contrast.
 */
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
