import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert, Dimensions } from 'react-native';
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
    navigation.navigate('signin');
  };

  const handleSignUp = async () => {
    try {
      navigation.navigate('signin');
      Alert.alert("jbvjvbjj");
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        Alert.alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }

      const registerResponse = await axios.post('http://192.168.1.201:4000/users/register', {
        firstName,
        lastName,
        birth,
        email,
        password
      });

      console.log('Registration API response:', registerResponse.data);

      setEmail('');
      setPassword('');
      setBirth('');
      setFirst('');
      setLast('');

      Alert.alert("Sign up successful", "Please log in to continue.", [
        { text: "OK", onPress: () => navigation.navigate("signin") }
      ]);

    } catch (error) {
      console.error(error);
      Alert.alert("Sign up failed. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle(GoogleProvider);
      console.log({ res });
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: 26,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 60,
    textAlign: 'center',
    fontFamily: FontFamily.smallNormalBold,
    width: 101,
    marginLeft: 10
  },
  title: {
    height: 66,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: FontFamily.kanit
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: 290,
    borderRadius: 30,
    marginLeft: 15,
    textAlign: 'center'
  },
  button: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: 290,
    borderRadius: 30,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
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
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0085FF',
    textAlign: 'center'
  },
  haveAccountText: {
    color: 'black',
    marginTop: 2,
    marginLeft: -100,
    marginBottom: 10
  },
  signInText: {
    color: '#0085FF'
  }
});

export default SignUp;
