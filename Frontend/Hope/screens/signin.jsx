import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }

      const loginResponse = await axios.post('http:/192.168.100.48:4000/users/login', {
        email,
        password,
      });

      console.log('Login API response:', loginResponse);

      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        Alert.alert("Invalid email or password. Please try again.");
        return;
      }

      await AsyncStorage.setItem('user', JSON.stringify(loginResponse.data.user));

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

      await AsyncStorage.setItem('user', JSON.stringify(res.user));

      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>HOPE TN</Text>
        <Text style={styles.subtitle}>SIGN IN</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleSignUp}>
          <View style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
            />
            <Text style={styles.socialText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleSignUp}>
          <View style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
            />
            <Text style={styles.socialText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 80,
    marginRight:190
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 30,
    textAlign: 'center',
  },
  button: {
    height: 55,
    backgroundColor: '#209FA6',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0085FF',
  },
  signUpText: {
    color: '#0085FF',
    marginBottom: 10,
  },
});

export default SignIn;
