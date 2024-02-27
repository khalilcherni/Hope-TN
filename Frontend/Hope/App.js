import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartingPage from './screens/StartingPage';
import SignUp from './screens/signup';
import OnboardingPage1 from './screens/onboardingPage1';
import OnboardingPage2 from './screens/OnboardingPage2';
import SignIn from './screens/signin';
import Home from './screens/Home';
// import StartingPage from './screens/StartingPage';
// import StartingPage from './component/StartingPage'; // Import StartingPage component
// import SignUp from './screens/signup';
// import OnboardingPage from './screens/onboardingPage1';
// import SignIn  from './screens/signin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} />
        <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
      <Home/>
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
