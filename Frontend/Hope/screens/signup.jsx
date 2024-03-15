import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth, GoogleProvider } from '../firebase/config'; // Import Firebase auth
import { FontAwesome } from '@expo/vector-icons';
import FontFamily from './FontFamily';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('signin');
  };

  const handleSignUp = async () => {
    try {
   
      Alert.alert("jbvjvbjj");
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        Alert.alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }
      navigation.navigate('Terms');
      // const res = await createUserWithEmailAndPassword(email, password);

      // if (!res || !res.user) {
      //   alert("User creation failed. Please try again.");
      //   return;
      // }
      const registerResponse = await axios.post('http:/192.168.1.12:4000/users/register', {
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

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HOPE TN</Text>
      <Text style={styles.title}>SIGN UP</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#209FA6" style={styles.icon} />
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirst}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#209FA6" style={styles.icon} />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLast}
          style={styles.input}
        />
      </View>
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
        <TouchableOpacity onPress={showDatePicker}>
          <FontAwesome name="calendar" size={24} color="#209FA6" style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          placeholder="Birth"
          value={birth}
          onChangeText={setBirth}
          style={styles.input}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
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
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: '#f0f0f0',
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
  icon: {
    marginRight: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 30,
    fontFamily: FontFamily.smallNormalBold,
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
  }
});

export default SignUp;
