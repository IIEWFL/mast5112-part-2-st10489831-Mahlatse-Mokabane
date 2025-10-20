import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuItem } from '../types';

const STORAGE_KEY = '@christoffel_menu_items_v1';

export async function loadMenu(): Promise<MenuItem[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Failed to load menu', err);
    return [];
  }
}

export async function saveMenu(items: MenuItem[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.warn('Failed to save menu', err);
  }
}

export const uid = () => Math.random().toString(36).slice(2, 9);
