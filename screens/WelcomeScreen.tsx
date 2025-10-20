import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';

// Define the types for your navigator
type RootStackParamList = {
  Home: { role: 'chef' | 'guest' };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.bg}
    >
      <BlurView intensity={25} style={styles.blurContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/chef-animated.jpg')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            Welcome to Chef Christoffel’s Menu App
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home', { role: 'chef' })}
          >
            <Text style={styles.buttonText}>I'm the Chef </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.guestButton]}
            onPress={() => navigation.navigate('Home', { role: 'guest' })}
          >
            <Text style={styles.buttonText}>I'm a Guest </Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2E1503',
    paddingVertical: 14,
    borderRadius: 25,
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
  },
  guestButton: {
    backgroundColor: '#8B4513',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
