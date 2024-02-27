import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomAppBar from './screens/Messages';
// import Voluntarywork from './screens/Voluntarywork';
// import Home from './screens/Home';
// import AndroidLarge2 from './screens/donation';

// import StartingPage from './screens/StartingPage';
// import SignUp from './screens/signup';
// import OnboardingPage1 from './screens/onboardingPage1';
// import OnboardingPage2 from './screens/OnboardingPage2';
// import SignIn from './screens/signin';
// import Home from './screens/Home';
// import Example from './screens/Example';


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
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="AndroidLarge2" component={AndroidLarge2} />
      </Stack.Navigator> */}
      <BottomAppBar/>

 {/* <AndroidLarge2/> */}
 {/* <Example/> */}

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
