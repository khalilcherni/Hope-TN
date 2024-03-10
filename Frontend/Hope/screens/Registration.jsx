import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FontFamily from './FontFamily';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');
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
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to access the current location.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setlocation(`El KEF`);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'There was an error getting your location. Please try again later.');
    }
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
  const handlevents = () => {
    navigation.navigate('Events');
  };
  const handledonation = () => {
    navigation.navigate('donation');
  };
  const handlecontact = () => {
    navigation.navigate('Contactus');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.title}>
          If you are willing to join us and volunteer, fill the fields below
        </Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="#209FA6" style={styles.icon} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setname}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="info-circle" size={24} color="#209FA6" style={styles.icon} />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setdescription}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleLocationPress}>
            <FontAwesome name="map-marker" size={24} color="#209FA6" style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Location"
            value={location}
            onChangeText={setlocation}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={24} color="#209FA6" style={styles.icon} />
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
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><FontAwesome name="home" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handlevents}><MaterialCommunityIcons name="charity" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><Ionicons name="school" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handledonation}><FontAwesome5 name="donate" size={width * 0.06}  color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handlecontact}><MaterialIcons name="quick-contacts-dialer" size={width * 0.06}  color="black" /></TouchableOpacity>
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
    marginTop:160
  },
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: FontFamily.kanit,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
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
    marginLeft:70,
    width:180
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
