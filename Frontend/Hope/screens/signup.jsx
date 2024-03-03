import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth, GoogleProvider } from '../firebase/config'; // Import Firebase auth

import FontFamily from './FontFamily';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {
    // Your existing handleSignUp function code
  };

  const handleGoogleSignUp = async () => {
    // Your existing handleGoogleSignUp function code
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>HOPE TN</Text>
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirst}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLast}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Birth"
        value={birth}
        onChangeText={setBirth}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}> or continue with</Text>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignUp}>
        <Image
          style={styles.socialIcon}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
        />
        <Text style={styles.socialText}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignUp}>
        <Image
          style={styles.socialIcon}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
        />
        <Text style={styles.socialText}>Sign up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.haveAccountText}>Have an account? <Text style={styles.signInText}>Sign In</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 50,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 60,
    fontFamily: FontFamily.smallNormalBold,
    marginRight:250
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    fontFamily: FontFamily.kanit,
  },
  input: {
    height: 55,
    width: windowWidth * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    textAlign: 'center',
  },
  button: {
    height: 55,
    width: windowWidth * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0085FF',
    textAlign: 'center',
  },
  haveAccountText: {
    color: 'black',
    marginTop: 20,
  },
  signInText: {
    color: '#0085FF',
  },
});

export default SignUp;
