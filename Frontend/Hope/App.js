import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomAppBar from './screens/Messages';
import Voluntarywork from './screens/Voluntarywork';
import Home from './screens/Home';


import StartingPage from './screens/StartingPage';
import SignUp from './screens/signup';
import OnboardingPage1 from './screens/onboardingPage1';
import OnboardingPage2 from './screens/OnboardingPage2';
import SignIn from './screens/signin';
import Example from './screens/Palestine';
// import Home from './screens/Home';
// import Example from './screens/Example';
import AndroidLarge2 from './screens/donation';
import MessageCard from './screens/Messages'
// import StartingPage from './screens/StartingPage';
// import SignUp from './screens/signup';
// import OnboardingPage1 from './screens/onboardingPage1';
// import OnboardingPage2 from './screens/OnboardingPage2';
// import SignIn from './screens/signin';
// import Home from './screens/Home';
// import Setting from './screens/Setting';
// import ProfileEdit from "./screens/EditProfile"
// import Home from "./screens/Home"
// import MessageCard from './screens/Messages'
import categoriePeopleWhoNeedWater from "./screens/categoriePeopleWhoNeedWater"
import Frame2 from './screens/Elderly';
import Events from './screens/Events';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
 
      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>  */}
         {/* <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} />
        <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />  */}
   {/* <Stack.Screen name="Home" component={Home} /> */}
   {/* <Stack.Screen name="categoriePeopleWhoNeedWater" component={categoriePeopleWhoNeedWater}/> */}
   {/* <Stack.Screen name="Elderly" component={Frame2} /> 
   <Stack.Screen name="donation" component={AndroidLarge2} />  */}
      {/* </Stack.Navigator>  */}
      {/* <Example/> */}
      {/* <Home/> */}

 {/* <AndroidLarge2/> */}
 {/* <Example/> */}
{/* <MessageCard/> */}
<Events/>
{/* <Frame3/> */}
      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}> */}
        {/* <Stack.Screen name="StartingPage" component={StartingPage} /> /}
        {/ <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} /> /}
        {/ <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} /> /}
        {/ <Stack.Screen name="SignUp" component={SignUp} /> /}
        {/ <Stack.Screen name="SignIn" component={SignIn} /> /}
        {/ <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="ProfileEdit" component={ProfileEdit}/> */}
        {/* <Stack.Screen name ="Home" component={Home}/> */}
      {/* </Stack.Navigator> */}
{/* <Frame2/> */}
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