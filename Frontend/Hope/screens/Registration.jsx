import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

import FontFamily from './FontFamily';

const Register = () => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [location, setlocation] = useState('');
  const [phone, setphone] = useState('');

  const navigation = useNavigation();

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
    // Handle location press logic
  };

  const handleHomeNavigation = () => {
    navigation.navigate('Home');
  };

  const handleChatNavigation = () => {
    navigation.navigate('ChatRoom');
  };

  const handleSchoolNavigation = () => {
    navigation.navigate('School');
  };

  const handleMESNavigation = () => {
    navigation.navigate('Messages');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
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
      </ScrollView>

      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 20,
    marginTop:100
  },
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: FontFamily.kanit,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
  },
  button: {
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: '100%',
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
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Register;
