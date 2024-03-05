import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from '../firebase/config';
import { FontAwesome } from '@expo/vector-icons';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }




   


      

      const loginResponse = await axios.post('http://192.168.137.198:4000/users/login', {


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
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>HOPE TN</Text>
        <Text style={styles.subtitle}>SIGN IN</Text>
        <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="#209FA6" style={styles.icon} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#209FA6" style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color="#209FA6" style={styles.icon} />
        </TouchableOpacity>
      </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 30,
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
