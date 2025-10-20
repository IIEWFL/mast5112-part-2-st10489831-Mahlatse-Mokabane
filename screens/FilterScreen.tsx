import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { loadMenu } from '../utils/storage';
import { MenuItem } from '../types';
import MenuItemCard from '../components/MenuItemCard';
import { courses } from '../data/courses';
import { BlurView } from 'expo-blur';

export default function FilterScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  useEffect(() => {
    loadMenu().then(setMenu);
  }, []);

  const filtered = menu.filter((item) => item.course === selectedCourse);

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
      <BlurView intensity={25} style={styles.blurContainer}>
        <Text style={styles.title}>Filter by Course</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker}>
            {courses.map((c) => (
              <Picker.Item key={c} label={c} value={c} />
            ))}
          </Picker>
        </View>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItemCard item={item} />}
          ListEmptyComponent={<Text style={styles.emptyText}>No dishes in this course.</Text>}
        />
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  blurContainer: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 10 },
  pickerContainer: { backgroundColor: 'white', borderRadius: 12, marginVertical: 8 },
  picker: { height: 50 },
  emptyText: { color: 'white', textAlign: 'center', marginTop: 20 },
});
