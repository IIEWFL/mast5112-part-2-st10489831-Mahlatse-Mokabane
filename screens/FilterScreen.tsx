import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { loadMenu } from '../utils/storage';
import { MenuItem, Course } from '../types';
import { courses } from '../data/courses';
import MenuItemCard from '../components/MenuItemCard';

export default function FilterScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [filtered, setFiltered] = useState<MenuItem[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course>('Starter');

  useEffect(() => {
    const fetchMenu = async () => {
      const storedMenu = await loadMenu();
      setMenu(storedMenu);
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    setFiltered(menu.filter(item => item.course === selectedCourse));
  }, [selectedCourse, menu]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(value) => setSelectedCourse(value)}
          style={styles.picker}
        >
          {courses.map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      {filtered.length === 0 ? (
        <Text style={styles.emptyText}>No dishes in this category.</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItemCard item={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5DC', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  pickerContainer: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 15, overflow: 'hidden' },
  picker: { height: 50 },
  emptyText: { color: '#000', fontSize: 16, marginTop: 20, textAlign: 'center' },
});
