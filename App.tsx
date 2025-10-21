import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import RoleSelectionScreen from "./screens/RoleSelectionScreen";
import ChefPinScreen from "./screens/PinScreen";
import HomeScreen from "./screens/HomeScreen";
import AddMenuScreen from "./screens/AddMenuScreen";
import FilterScreen from "./screens/FilterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="ChefPin" component={ChefPinScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenu" component={AddMenuScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
