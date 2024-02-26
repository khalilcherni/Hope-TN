import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth } from '../firebase/config'; // Import Firebase auth

import { GoogleProvider } from '@firebase/auth'; // Import GoogleProvider from firebase auth
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
    try {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }

    //   Create user in Firebase
      const res = await createUserWithEmailAndPassword(email, password);

      if (!res || !res.user) {
        alert("suup");
        return;
      }

      // Create user in backend SQL database
      const registerResponse = await axios.post('http://192.168.72.231:4000/users/register', {
        firstName,
        lastName,
        birth,
        email,
        password
      });
      
      console.log('Registration API response:', registerResponse.data);

      // Store the user's email in session storage
      sessionStorage.setItem('userEmail', email);

      // Clear input fields
      setEmail('');
      setPassword('');
      setBirth('');
      setFirst('');
      setLast('');

      // Navigate to home screen
      navigation.navigate("Home");
      alert("Sign up successful");
    } catch (error) {
      console.error(error);
      alert("Sign up failed. Please try again.");
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ width: '80%', marginBottom: 20 }}>
                <Text style={{ height: 26, fontSize: 20, fontWeight: 'bold', color: '#209FA6', marginBottom: 60, textAlign: 'center', fontFamily: FontFamily.smallNormalBold, width: 101, marginLeft: 10 }}>HOPE TN</Text>

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
                    style={styles.button}
                    onPress={handleSignUp}
                    
                >
                    <Text onPress={() => navigation.navigate('SignIn')} style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            
                <Text style={styles.orText}> or continue with</Text>
                <View style={styles.container}>
                <TouchableOpacity style={styles.imageContainer} onPress={handleGoogleSignUp}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
                    />
                    <Text style={styles.imageText}>sign up with Google</Text>
                 
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <TouchableOpacity  style={styles.imageContainer} onPress={handleGoogleSignUp}>
               
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }}
                    />
                    <Text style={styles.imageText}>sign up with Facebook</Text>
                  
                </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.haveAccountText}>Have an account? <Text style={styles.signInText}>Sign In</Text></Text>
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
        color: 'black',
        textAlign: 'center',
        color: 'white'
    },
    orText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        color: 'black'
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 50
    },
    imageText: {
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
