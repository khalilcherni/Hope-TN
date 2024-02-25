import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text,Image, Alert,StyleSheet } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleSignIn = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }

      const loginResponse = await axios.post('http://localhost:4000/users/login', {
        email,
        password,
      });

      console.log('Login API response:', loginResponse);

      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        Alert.alert("Invalid email or password. Please try again.");
        return;
      }

      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      navigation.navigate('Home');
      Alert.alert("Sign in successful");
    } catch (e) {
      console.error(e);
      Alert.alert("Sign in failed. Please try again.");
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
   <Text style={{ height: 26, fontSize: 20, fontWeight: 'bold', color: '#209FA6', marginBottom: 60, textAlign: 'center',  width:101,marginLeft:10}}>HOPE TN</Text>
   
   <Text style={{ height: 66, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center' }}>SIGN IN</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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
          onPress={handleSignIn}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center',color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
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
       < View style={styles.container}>
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
  <Text style={{ color: '#0085FF',marginBottom:10 }}> Sign In</Text>
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
export default SignIn;
