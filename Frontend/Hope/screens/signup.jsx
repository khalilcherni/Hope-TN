import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, Image } from 'react-native';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';

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
      navigation.navigate('SignIn'); 
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
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Sign Up</Text>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirst}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLast}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Birth"
          value={birth}
          onChangeText={setBirth}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: 'white' }}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Image
          style={{ width: 50, height: 50, marginTop: 10 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
          onPress={handleGoogleSignUp}
        />
        <Text style={{ marginTop: 10 }}>or</Text>
        <Button title="Sign In" onPress={handleSignIn} />
   
      </View>
    
    </View>
  );
};

export default SignUp;
