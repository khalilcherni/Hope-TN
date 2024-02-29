import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
<<<<<<< HEAD

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


=======

import BottomAppBar from './screens/Messages';
import Voluntarywork from './screens/Voluntarywork';
import Home from './screens/Home';


>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
=======
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
import StartingPage from './screens/StartingPage';
import SignUp from './screens/signup';
import OnboardingPage1 from './screens/onboardingPage1';
import OnboardingPage2 from './screens/OnboardingPage2';
import SignIn from './screens/signin';
import Home from './screens/Home';
import Setting from './screens/Setting';
import ProfileEdit from "./screens/EditProfile"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingPage" component={StartingPage} />
=======
 
      {/* <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>  */}
         {/* <Stack.Screen name="StartingPage" component={StartingPage} />
>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
        <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} />
        <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
<<<<<<< HEAD
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="AndroidLarge2" component={AndroidLarge2} />
      </Stack.Navigator> */}
      <BottomAppBar/>

 {/* <AndroidLarge2/> */}
 {/* <Example/> */}


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
   {/* <Home/> */}

=======
        <Stack.Screen name="Home" component={Home} />  */}
   {/* <Stack.Screen name="Palestine" component={Frame3} />
   <Stack.Screen name="donation" component={AndroidLarge2}/> */}
   {/* </Stack.Navigator>  */}
      {/* <Example/> */}
      <BottomAppBar/>

 {/* <AndroidLarge2/> */}
 {/* <Example/> */}

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

>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
=======
      <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="StartingPage" component={StartingPage} />  */}
        {/* <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} />  */}
        {/* <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />  */}
        {/* <Stack.Screen name="SignUp" component={SignUp} />  */}
        {/* <Stack.Screen name="SignIn" component={SignIn} />  */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="ProfileEdit" component={ProfileEdit}/>
      </Stack.Navigator>
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
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