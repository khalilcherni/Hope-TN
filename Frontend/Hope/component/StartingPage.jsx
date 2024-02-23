import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import logo from '../../Hope/assets/hopelogo.webp'; 

const StartingPage = () => {
  return (
    <View style={styles.container}>
      <Text>helooo</Text>
      <Image source={logo} style={styles.logo} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default StartingPage;
