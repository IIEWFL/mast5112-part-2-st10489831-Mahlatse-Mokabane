import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function ChefPinScreen({ navigation }: any) {
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    const correctPin = "1234";
    if (pin === correctPin) {
      navigation.navigate("AddMenu", { role: "chef" });
    } else {
      Alert.alert("Incorrect PIN", "Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Access</Text>
      <Text style={styles.subtitle}>Enter your 4-digit PIN</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        secureTextEntry
        maxLength={4}
        placeholder="Enter Pin"
        value={pin}
        onChangeText={setPin}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
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
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    width: "50%",
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
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
