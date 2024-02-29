import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';

import FontFamily from './FontFamily';

const Register = () => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [location, setlocation] = useState('');
  const [phone, setphone] = useState('');

  const navigation = useNavigation();

  // Define latitude, longitude, and altitude for El Kef
  const elKefLatitude = 36.1826;
  const elKefLongitude = 8.7046;
  const elKefAltitude = 800; // Placeholder altitude value

  const handlePost = () => {
    const obj = {
      name: name,
      description: description,
      location: location,
      phone: phone
    };

    axios.post("http://192.168.100.44:4000/help/post", obj)
      .then(response => {
        // Clear input fields
        setname('');
        setdescription('');
        setlocation('');
        setphone('');
        // Show success alert
        Alert.alert('Success', 'Your submission was successful.', [{ text: 'OK' }]);
      })
      .catch(err => {
        console.log(err);
        // Show error alert if submission fails
        Alert.alert('Error', 'There was an error submitting your information. Please try again later.', [{ text: 'OK' }]);
      });
  };

  const handleLocationPress = async () => {
    // Set location to El Kef's latitude, longitude, and altitude
    setlocation(`El Kef`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>
          If you are willing to join us and volunteer, fill the fields below
        </Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="black" style={styles.icon} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setname}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="info-circle" size={24} color="black" style={styles.icon} />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setdescription}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleLocationPress}>
            <FontAwesome name="map-marker" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Location"
            value={location}
            onChangeText={setlocation}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={24} color="black" style={styles.icon} />
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setphone}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePost}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  formContainer: {
    width: '80%',
    marginBottom: 20
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: 290,
    borderRadius: 30
  },
  icon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16
  },
  button: {
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: 290,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default Register;
