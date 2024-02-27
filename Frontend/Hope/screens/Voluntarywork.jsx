import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth, GoogleProvider } from '../firebase/config'; // Import Firebase auth

import FontFamily from './FontFamily';

const SignUp = () => {
const [name, setName] = useState('');
const [phone, setphone] = useState(0);
const [job, setjob] = useState("");

const handlePost=(()=>{
const obj ={
    name:name,
    phone:phone,
    job:job
}
axios.post("http://localhost:4000/api/voluntary/add",obj)

})



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '80%', marginBottom: 20 }}>
        <Text style={{ height: 26, fontSize: 20, fontWeight: 'bold', color: '#209FA6', marginBottom: 60, textAlign: 'center', fontFamily: FontFamily.smallNormalBold, width: 101, marginLeft: 10 }}>HOPE TN</Text>

        <Text style={{ height: 66, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center', fontFamily: FontFamily.kanit }}>SIGN UP</Text>

        <TextInput
          placeholder="First Name"
        //   value={firstName}
        //   onChangeText={setFirst}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Last Name"
        //   value={lastName}
        //   onChangeText={setLast}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="Email"
        //   value={email}
        //   onChangeText={setEmail}
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#D9D9D9', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
    
        <TouchableOpacity
        //   style={styles.button}
        //   onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

       
        
        
      </View>
    
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
  },
  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
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
    marginRight: 10
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
