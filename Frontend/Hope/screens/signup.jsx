import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image ,Button,StyleSheet} from 'react-native';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import FontFamily from './FontFamily'; // Adjust the path as needed

import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [password, setPassword] = useState('');
   
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigation = useNavigation();

    const handleSignIn = () => {
      navigation.navigate(''); 
    };

    const handleSignUp = async () => {
      try {
          // Password validation
          const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
          if (!passwordRegex.test(password)) {
              Alert.alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
              return;
          }

          // Create user with email and password
          const res = await createUserWithEmailAndPassword(email, password);
          console.log('User creation response:', res);

          if (!res || !res.user) {
              Alert.alert("User creation failed. Please try again.");
              return;
          }

          // Make API call to register the user
          const registerResponse = await axios.post('http://localhost:4000/users/register', {
              firstName,
              lastName,
              email,
              birth,
              password
          });
          console.log('Registration API response:', registerResponse);

          // Store the user's email in session storage
          sessionStorage.setItem('userEmail', email);

          // Clear input fields
          setEmail('');
          setPassword('');
          setBirth('');
          setFirst('');
          setLast('');

          // Show success message
          Alert.alert("Sign up successful");
      } catch (e) {
          console.error(e);
          Alert.alert("Sign up failed. Please try again.");
      }
  };
  
  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle(GoogleProvider);
      console.log({ res });
      sessionStorage.setItem('user', true);
      navigation.navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '80%', marginBottom: 20 }}>
   <Text style={{ height: 26, fontSize: 20, fontWeight: 'bold', color: '#209FA6', marginBottom: 60, textAlign: 'center',    fontFamily: FontFamily.smallNormalBold,width:101,marginLeft:10}}>HOPE TN</Text>
   
        <Text style={{ height: 66, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center', fontFamily: FontFamily.kanit }}>SIGN UP</Text>
        
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirst}  
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLast}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Birth"
          value={birth}
          onChangeText={setBirth}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TouchableOpacity 
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, justifyContent: 'center', alignItems: 'center' ,}}
          onPress={handleSignUp}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center',color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
        <Text  style={{ fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center',color: 'black' }}> or continue with</Text>
        
        <View style={styles.container}>
  <View style={styles.imageContainer}>
    <Image
      style={styles.image}
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
      onPress={handleGoogleSignUp}
    />
   
</View>
<View>  
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0085FF', textAlign: 'center',marginTop:-40 }}>sign up with email</Text></View>
  </View>
  <View style={styles.container}>
  <View style={styles.imageContainer}>
    <Image
      style={styles.image}
      source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
      onPress={handleGoogleSignUp}
    />
   
</View>
<View>  
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0085FF', textAlign: 'center',marginTop:-40 }}>sign up with facebook</Text></View>
  </View>
      
    
   
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
  <Text style={{ color: 'black', marginTop: 2, marginLeft: -100 }}>Have account?</Text>
  <Text style={{ color: '#0085FF' }}> Sign In</Text>
</TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      borderRadius: 30,
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 270,
    },

  });
  
  
export default SignUp;
