import React, { useState, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterScreen from './screens/FilterScreen';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddMenu: undefined;
  Filter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const ChefContext = createContext<{ isChef: boolean; setIsChef: (v: boolean) => void } | undefined>(undefined);
export const useChef = () => {
  const ctx = useContext(ChefContext);
  if (!ctx) throw new Error('useChef must be used within provider');
  return ctx;
};

export default function App() {
  const [isChef, setIsChef] = useState(false);

  return (
    <ChefContext.Provider value={{ isChef, setIsChef }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddMenu" component={AddMenuScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ChefContext.Provider>
  );
}
