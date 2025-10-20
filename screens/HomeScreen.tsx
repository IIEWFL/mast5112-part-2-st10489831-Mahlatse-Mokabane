import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import MenuItemCard from '../components/MenuItemCard';
import { loadMenu } from '../utils/storage';
import { MenuItem } from '../types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

export default function HomeScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const role = route.params?.role ?? 'guest';

  useEffect(() => {
    loadMenu().then(setMenu);
  }, []);

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
      <BlurView intensity={25} style={styles.blurContainer}>
        <Text style={styles.title}>Today's Culinary Creations</Text>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItemCard item={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
        <View style={styles.buttons}>
          {role === 'chef' && (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenu', { role })}>
              <Text style={styles.buttonText}>Add Menu Item</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filter', { role })}>
            <Text style={styles.buttonText}>Filter by Course</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  blurContainer: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 10 },
  buttons: { alignItems: 'center', marginTop: 10 },
  button: { backgroundColor: '#2E1503', padding: 12, borderRadius: 25, marginVertical: 5, width: '70%' },
  buttonText: { color: 'white', textAlign: 'center' },
});
