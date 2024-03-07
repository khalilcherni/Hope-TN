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
import Example from './screens/Palestine';

import AndroidLarge2 from './screens/donation.jsx';
import BottomAppBar from './screens/Messages.jsx'

import Gaza from './screens/Palestine';







// import Setting from './screens/Setting';
import Chatroom from './screens/ChatRoom';
import ChatroomContainer from './screens/ChatrommContainer';
// import ProfileEdit from "./screens/EditProfile"
import Register from './screens/Registration'
import Events from './screens/Events.jsx'
import ChatRoom from './screens/ChatRoom.jsx'
import HomeRE from './screens/Home.jsx';
import Messages from './screens/Messages.jsx'
import Setting from './screens/Setting.jsx'
import School from './screens/School.jsx';
import EnglishCourseScreen from './screens/EnglishCourseScreen.jsx';
import Contact from './screens/Contactus.jsx';
import Elderly from "./screens/Elderly.jsx"
import Donation from './screens/donation.jsx'

import categoriePeopleWhoNeedWater from './screens/categoriePeopleWhoNeedWater.js'
import Azert from './screens/Azert.jsx';
import CharityScreen from './screens/Helping.jsx'
import Donation1 from './screens/Donation1.jsx'
import Payment from './screens/Payment.js'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="StartingPage" component={StartingPage} /> 
         <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} /> 
         <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} /> 
         <Stack.Screen name="SignUp" component={SignUp} /> 
         <Stack.Screen name="signin" component={SignIn} /> 
         <Stack.Screen name="Home" component={HomeRE}/>  
         <Stack.Screen name="ChatrommContainer" component={ChatroomContainer}/>  
         <Stack.Screen name="ChatRoom" component={Chatroom}/>  
         <Stack.Screen name="Helping" component={CharityScreen}/> 
         <Stack.Screen name="Donation1" component={Donation1}/> 
        <Stack.Screen name="Registration" component={Register}/> 
        <Stack.Screen name="School" component={School}/> 
        <Stack.Screen name="Messages" component={Messages}/> 
 

      </Stack.Navigator>  */}
<Payment/>
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