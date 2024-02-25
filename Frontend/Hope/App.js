import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
// import StartingPage from './component/StartingPage'; // Import StartingPage component
// import SignUp from './screens/signup';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingPage1 from './screens/onboardingPage1'
import OnboardingPage2 from './screens/OnboardingPage2';


const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="OnboardingPage">
        <Stack.Screen name="O" component={OnboardingPage1} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />
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
