import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth, GoogleProvider } from '../firebase/config'; // Import Firebase auth
import { FontAwesome } from '@expo/vector-icons';
import FontFamily from './FontFamily';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('signin');
  };

  const handleSignUp = async () => {
    try {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        Alert.alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }
      navigation.navigate('Terms');
      // const res = await createUserWithEmailAndPassword(email, password);

      // if (!res || !res.user) {
      //   Alert.alert("User creation failed. Please try again.");
      //   return;
      // }

      const registerResponse = await axios.post('http://192.168.72.231:4000/users/register', {
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirth(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <Text style={[styles.logo, darkMode && styles.darkModeText]}>HOPE TN</Text>
      <Text style={[styles.title, darkMode && styles.darkModeText]}>SIGN UP</Text>
      <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
        <FontAwesome name="user" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirst}
          style={[styles.input, darkMode && styles.darkInputText]}
          placeholderTextColor={darkMode ? "lightgrey" : "grey"}
        />
      </View>
      <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
        <FontAwesome name="user" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLast}
          style={[styles.input, darkMode && styles.darkInputText]}
          placeholderTextColor={darkMode ? "lightgrey" : "grey"}
        />
      </View>
      <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
        <FontAwesome name="envelope" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={[styles.input, darkMode && styles.darkInputText]}
          placeholderTextColor={darkMode ? "lightgrey" : "grey"}
        />
      </View>
      <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
        <TouchableOpacity onPress={showDatePicker}>
          <FontAwesome name="calendar" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          placeholder="Birth"
          value={birth}
          onChangeText={setBirth}
          style={[styles.input, darkMode && styles.darkInputText]}
          placeholderTextColor={darkMode ? "lightgrey" : "grey"}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={[styles.inputContainer, darkMode && styles.darkInputContainer]}>
        <FontAwesome name="lock" size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={[styles.input, darkMode && styles.darkInputText]}
          placeholderTextColor={darkMode ? "lightgrey" : "grey"}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color={darkMode ? "white" : "#209FA6"} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, darkMode && styles.darkButton]}
        onPress={handleSignUp}
      >
        <Text style={[styles.buttonText, darkMode && styles.darkButtonText]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={[styles.haveAccountText, darkMode && styles.darkModeText]}>Have an account? <Text style={[styles.signInText, darkMode && styles.darkModeText]}>Sign In</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.darkModeButton} onPress={toggleDarkMode}>
        <Ionicons name={darkMode ? "sunny" : "moon"} size={24} color="white"  /> 
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
    backgroundColor: '#f0f0f0',
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
  darkButtonText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '80%',
    borderRadius: 30,
  },
  darkInputContainer: {
    backgroundColor: '#333',
  },
  icon: {
    marginRight: 10,
  },
  darkInputText: {
    color: 'white',
  },
  darkModeText: {
    color: 'white',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 50,
    fontFamily: FontFamily.smallNormalBold,
    marginRight:200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    fontFamily: FontFamily.kanit,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
    color: 'black',
  },
  button: {
    height: 55,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: '80%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  haveAccountText: {
    color: 'black',
    marginTop: 10,
    marginBottom: 20
  },
  signInText: {
    color: '#0085FF',
    fontWeight: 'bold',
  },
  darkModeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#209FA6',
    padding: 10,
    borderRadius: 20,
  },
});

export default SignUp;
