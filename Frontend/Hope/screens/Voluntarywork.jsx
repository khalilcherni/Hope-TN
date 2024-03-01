import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import axios from 'axios';
import FontFamily from './FontFamily';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Voluntary = () => {
  const navigation = useNavigation(); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [job, setJob] = useState('');

  const handlePost = () => {
    const obj = {
      name: name,
      phone: phone,
      job: job
    };
    axios.post("http://192.168.100.44:4000/api/voluntary/add", obj)
      .then((res) => {
        console.log(res.data);
        setName('');
        setPhone(0);
        setJob('');
        Alert.alert("Thank you for posting", "Rabi yberklk");
      })
      .catch((err) => console.log(err));
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Voluntary</Text>
        <Text style={styles.subtitle}>If you are willing to take matters into your own hands, feel free to join us here</Text>
        <Input
          placeholder="Name"
          leftIcon={<Icon name="user" type="font-awesome" color="#209FA6" />}
          value={name}
          onChangeText={setName}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Phone"
          leftIcon={<Icon name="phone" type="font-awesome" color="#209FA6" />}
          value={phone}
          onChangeText={setPhone}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Job"
          leftIcon={<Icon name="briefcase" type="font-awesome" color="#209FA6" />}
          value={job}
          onChangeText={setJob}
          inputStyle={styles.input}
        />
        <Button
          title="Submit"
          onPress={handlePost}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>

      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 10,
    fontFamily: FontFamily.kanit,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: FontFamily.kanit,
  },
  input: {
    color: 'black',
    fontFamily: FontFamily.kanit,
  },
  button: {
    backgroundColor: '#209FA6',
    borderRadius: 30,
    width: 200,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: FontFamily.kanit,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Voluntary;
