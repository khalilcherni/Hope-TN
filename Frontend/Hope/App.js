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
// import Home from './screens/Home';
// import Example from './screens/Example';
import AndroidLarge2 from './screens/donation';
import BottomAppBar from './screens/Messages.jsx'
// import StartingPage from './screens/StartingPage';
// import SignUp from './screens/signup';
// import OnboardingPage1 from './screens/onboardingPage1';
// import OnboardingPage2 from './screens/OnboardingPage2';
// import SignIn from './screens/signin';
// import HomeRE from './screens/Home.jsx'
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
         {/* <Stack.Screen name="StartingPage" component={StartingPage} /> 
         <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} /> 
         <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} /> 
         <Stack.Screen name="SignUp" component={SignUp} /> 
         <Stack.Screen name="SignIn" component={SignIn} /> 
         <Stack.Screen name="Home" component={Home} /> 
         <Stack.Screen name="Events" component={Events}/>
         <Stack.Screen name="Messages" component={BottomAppBar}/>
        <Stack.Screen name="Registration" component={Register}/> 
      
  */}
  {/* <Stack.Screen name="Home" component={HomeRE}/> */}
        {/* <Stack.Screen name="ChatRoom" component={ChatRoom}/> 
        <Stack.Screen name="Messages" component={Messages}/> 
      
        <Stack.Screen name="EnglishCourseScreen" component={EnglishCourseScreen}/> */}
        {/* <Stack.Screen name="Events" component={Events}/> 
        <Stack.Screen name="Registration" component={Register}/> */}
       
      <Stack.Screen name="Events" component={Events}/> 
            <Stack.Screen name="Home" component={HomeRE}/>   
            <Stack.Screen name="ChatRoom" component={ChatRoom}/>   
            <Stack.Screen name="School" component={School}/>   
            <Stack.Screen name="Messages" component={Messages}/>   
      </Stack.Navigator>
{/* <Events/> */}

      {/* <HomeRE/> */}
      {/* <ChatroomContainer/> */}
      {/* <Register/> */}
      {/* <School/> */}
      {/* <EnglishCourseScreen/> */}
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