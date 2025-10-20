import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../types';

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price}</Text>
      <Text style={styles.course}>{item.course}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // dark semi-transparent overlay
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontWeight: 'bold', fontSize: 18, color: 'white' },
  description: { marginVertical: 4, color: 'white', fontSize: 14 },
  price: { fontWeight: 'bold', color: '#FFD700', marginTop: 4 }, // golden price
  course: { color: '#FFA500', marginTop: 2, fontStyle: 'italic' }, // orange course label
});
