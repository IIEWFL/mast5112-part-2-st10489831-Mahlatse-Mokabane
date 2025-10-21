import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuItem } from "../types";

const MENU_KEY = "menu_items";

export const saveMenu = async (menu: MenuItem[]) => {
  await AsyncStorage.setItem(MENU_KEY, JSON.stringify(menu));
};

export const loadMenu = async (): Promise<MenuItem[]> => {
  const data = await AsyncStorage.getItem(MENU_KEY);
  return data ? JSON.parse(data) : [];
};
