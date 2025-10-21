import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Alert, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import uuid from 'react-native-uuid';
import { MenuItem, Course } from '../types';
import { courses } from '../data/courses';
import { loadMenu, saveMenu } from '../utils/storage';
import MenuItemCard from '../components/MenuItemCard';

export default function AddMenuScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState<Course>('Starter');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      const storedMenu = await loadMenu();
      setMenu(storedMenu);
    };
    fetchMenu();
  }, []);

  const handleAdd = async () => {
    const parsedPrice = parseFloat(price);
    if (!name || !desc || isNaN(parsedPrice)) {
      Alert.alert('Error', 'Please fill all fields correctly.');
      return;
    }

    const newItem: MenuItem = {
      id: uuid.v4().toString(),
      name,
      desc,
      course,
      price: parsedPrice,
      description: ''
    };

    const updatedMenu = [...menu, newItem];
    await saveMenu(updatedMenu);
    setMenu(updatedMenu);

    setName('');
    setDesc('');
    setPrice('');
    setCourse('Starter');
  };

  const handleDelete = async (id: string) => {
    const updatedMenu = menu.filter(item => item.id !== id);
    await saveMenu(updatedMenu);
    setMenu(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Menu Item</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Description" value={desc} onChangeText={setDesc} style={styles.input} />

      <View style={styles.pickerContainer}>
        <Picker selectedValue={course} onValueChange={(value) => setCourse(value as Course)} style={styles.picker}>
          {courses.map((c) => <Picker.Item key={c} label={c} value={c} />)}
        </Picker>
      </View>

      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Pressable style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Item</Text>
      </Pressable>

      <Text style={styles.subHeader}>Existing Menu Items</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <MenuItemCard item={item} />
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5DC', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#000' },
  subHeader: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#000' },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10 },
  pickerContainer: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, overflow: 'hidden' },
  picker: { height: 50 },
  addButton: { backgroundColor: '#D2B48C', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15 },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  menuItemContainer: { marginBottom: 15 },
  deleteButton: { backgroundColor: 'red', padding: 5, borderRadius: 5, marginTop: 5, alignSelf: 'flex-end' },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});
