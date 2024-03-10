import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView, Switch } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from '../firebase/config';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }

      const loginResponse = await axios.post('http://192.168.1.201:4000/users/login', {
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

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
  
      console.log('Google Sign-In successful:', result.user);
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollView, darkMode && styles.darkMode]}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.darkModeButton} onPress={toggleDarkMode}>
          <Ionicons name={darkMode ? "sunny" : "moon"} size={24} color="white" /> 
        </TouchableOpacity>
        <Text style={[styles.title, darkMode && styles.darkModeText]}>HOPE TN</Text>
        <Text style={[styles.subtitle, darkMode && styles.darkModeText]}>SIGN IN</Text>
        <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
          <Ionicons name="mail" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} /> 
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={[styles.input, darkMode && styles.darkInputText]}
            placeholderTextColor={darkMode ? "lightgrey" : "grey"}
          />
        </View>
        <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
          <Ionicons name="lock-closed" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} /> 
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={[styles.input, darkMode && styles.darkInputText]}
            placeholderTextColor={darkMode ? "lightgrey" : "grey"}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} /> 
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={[styles.button, darkMode && styles.darkButton]}
          onPress={handleSignIn}
        >
          <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignInWithGoogle}>
          <View style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
            />
            <Text style={styles.socialText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignInWithGoogle}>
          <View style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
            />
            <Text style={styles.socialText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.signUpText, darkMode && styles.darkModeText]}>Don't have an account? Sign Up</Text>
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
  darkMode: {
    backgroundColor: 'black',
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
    marginRight: 190,
  },
  darkModeText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 30,
  },
  darkInputContainer: {
    backgroundColor: '#333',
  },
  icon: {
    marginRight: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
  },
  darkInputText: {
    color: 'white',
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
  darkButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  darkButtonText: {
    color: 'black',
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
  darkModeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#209FA6',
    padding: 10,
    borderRadius: 20,
  },
});

export default SignIn;
