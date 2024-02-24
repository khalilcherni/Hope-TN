import 'react-native-gesture-handler';

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';// Import NavigationContainer
import StartingPage from './screens/StartingPage';
// import StartingPage from './component/StartingPage'; // Import StartingPage component
import SignUp from './screens/signup';
import OnboardingPage from './screens/onboardingPage1';
import SignIn  from './screens/signin';
const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    {/* Render StartingPage */}
    {/* <StartingPage /> */}
    {/* You can render other components here */}
    {/* <SignUp /> */}
    {/* <OnboardingPage/> */}
    <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>

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
