import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MenuItemCard from '../components/MenuItemCard';
import { loadMenu } from '../utils/storage';
import { MenuItem } from '../types';

export default function HomeScreen({ navigation }: any) {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const storedMenu = await loadMenu();
      setMenu(storedMenu);
    };
    const focus = navigation.addListener('focus', fetchMenu);
    return focus;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Text style={styles.subHeader}>Today’s Culinary Creations</Text>
      <Text style={styles.sub}>Culinary Options:</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Filter')}
      >
        <Text style={styles.buttonText}>Filter by Course</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5DC', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  subHeader: { fontSize: 18, color: '#000', marginBottom: 6 },
  sub: { color: '#000', marginBottom: 12 },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { fontWeight: 'bold', color: '#fff' },
});
