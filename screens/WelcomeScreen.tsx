import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Chef’s Christoffel’s Menu App</Text>
      <Image source={require("../assets/chef-animated.jpg")} style={styles.image} />
      <Text style={styles.subtitle}>Exclusive flavors, one private chef.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RoleSelection")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
