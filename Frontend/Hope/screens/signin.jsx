import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>Sign In</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TouchableOpacity
          onPress={handleSignIn}
          style={{ width: '100%', backgroundColor: 'blue', paddingVertical: 10, borderRadius: 5, alignItems: 'center' }}
        >
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white', marginTop: 20 }}>Don't have an account? <Text style={{ color: 'blue' }}>Sign Up</Text></Text>
        <Text style={{ color: 'white', marginTop: 10 }}>By signing in, you agree to our <Text style={{ color: 'blue' }}>Terms of Service</Text> and <Text style={{ color: 'blue' }}>Privacy Policy</Text>.</Text>
      </View>
    </View>
  );
};

export default SignIn;
