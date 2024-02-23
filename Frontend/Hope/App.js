import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import SignUp from './screens/signup';
import LeaderBoard from './screens/LeaderBoard';

export default function App() {
  return (
    <NavigationContainer>
      {/* <SignUp /> */}
      <LeaderBoard/>
    </NavigationContainer>
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
