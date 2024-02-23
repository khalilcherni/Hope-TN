import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartingPage from './component/StartingPage'; // Assuming StartingPage.js is located in the components directory

export default function App() {
  return (
    <View style={styles.container}>
      <StartingPage />
      <StatusBar style="auto" />
    </View>
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
