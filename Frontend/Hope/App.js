import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
// import StartingPage from './component/StartingPage'; // Import StartingPage component
// import SignUp from './screens/signup';
import OnboardingPage2 from './screens/OnboardingPage2';


export default function App() {
  return (

    <NavigationContainer>
    {/* Render StartingPage */}
    {/* <StartingPage /> */}
    {/* You can render other components here */}
    {/* <SignUp /> */}
    <OnboardingPage2/>
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
