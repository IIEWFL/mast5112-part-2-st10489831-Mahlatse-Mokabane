import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { saveMenu, loadMenu } from '../utils/storage';
import { MenuItem } from '../types';
import { courses } from '../data/courses';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { BlurView } from 'expo-blur';

export default function AddMenuScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');
  const navigation = useNavigation<any>();

  const addDish = async () => {
    const newItem: MenuItem = { id: uuid.v4().toString(), name, description, course, price };
    const existing = await loadMenu();
    const updated = [...existing, newItem];
    await saveMenu(updated);
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
      <BlurView intensity={25} style={styles.blurContainer}>
        <Text style={styles.title}>Add Menu Item</Text>
        <TextInput style={styles.input} placeholder="Dish Name" onChangeText={setName} value={name} />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          multiline
          onChangeText={setDescription}
          value={description}
        />
        <View style={styles.pickerContainer}>
          <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
            {courses.map((c) => (
              <Picker.Item key={c} label={c} value={c} />
            ))}
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={setPrice}
          value={price}
        />
        <TouchableOpacity style={styles.button} onPress={addDish}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  blurContainer: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: 'white', borderRadius: 12, padding: 10, marginVertical: 8 },
  textArea: { height: 80 },
  pickerContainer: { backgroundColor: 'white', borderRadius: 12, marginVertical: 8 },
  picker: { height: 50 },
  button: { backgroundColor: '#2E1503', padding: 14, borderRadius: 25, marginTop: 10 },
  buttonText: { color: 'white', textAlign: 'center' },
});
