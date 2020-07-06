import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EatenItemsScreen from './src/screens/EatenItemsScreen'
import ItemCaloriesListScreen from './src/screens/ItemCaloriesListScreen'

export default function App() {
  return (
    <EatenItemsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
