import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MenuItem } from '../types';

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <View style={styles.card}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.price}>R{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: { flex: 1 },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  desc: {
    fontSize: 13,
    color: '#333',
    marginVertical: 3,
  },
  price: {
    fontWeight: '600',
    color: '#000',
  },
});
