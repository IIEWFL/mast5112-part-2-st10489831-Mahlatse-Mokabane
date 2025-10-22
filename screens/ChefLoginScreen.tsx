import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

/**
 * ChefLoginScreen
 * ---------------------------------------------------
 * This screen authenticates a Chef before allowing access
 * to the Add Menu section.
 *
 * The chef must enter a valid username and 4-digit PIN.
 */
export default function ChefLoginScreen({ navigation }: any) {
  // State variables for username and PIN
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  
  /**
   * Handles login validation.
   * Checks if both username and PIN are correct.
   */
  const handleLogin = () => {
    const correctUsername = "Christoffel"; // username
    const correctPin = "4321"; //  PIN

    if (username.trim() === "" || pin.trim() === "") {
      Alert.alert("Missing Fields", "Please fill in both fields.");
      return;
    }

    if (username === correctUsername && pin === correctPin) {
      // Navigate to the AddMenu screen if credentials are correct
      navigation.navigate("AddMenu", { role: "chef" });
    } else {
      Alert.alert("Invalid Credentials", "Incorrect username or PIN. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <Text style={styles.title}>Chef Login</Text>
      <Text style={styles.subtitle}>Enter your credentials to access the menu manager</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* PIN Input */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        secureTextEntry
        maxLength={4}
        placeholder="4-Digit PIN"
        value={pin}
        onChangeText={setPin}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Styles
 * ---------------------------------------------------
 * Matches app theme (beige + black) with centered layout.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    marginVertical: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: "#000",
    fontSize: 16,
  },
});
