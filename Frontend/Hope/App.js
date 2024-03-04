import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import BottomAppBar from './screens/Messages';
// import LeaderBoard from './screens/LeaderBoard'
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
// import BottomAppBar from './screens/Messages';
// import Voluntarywork from './screens/Voluntarywork';
// import Home from './screens/Home';
// import StartingPage from './screens/StartingPage';
// import SignUp from './screens/signup';
// import OnboardingPage1 from './screens/onboardingPage1';
// import OnboardingPage2 from './screens/OnboardingPage2';
// import SignIn from './screens/signin';
// import Setting from './screens/Setting';
// import EditProfile from "./screens/EditProfile"
import Messages from './screens/Messages.jsx'
import LeaderBoard from './screens/LeaderBoard.jsx';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
 <Messages/>
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