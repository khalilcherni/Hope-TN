import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import FontFamily from './FontFamily';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');

  const handlePost = () => {
    const obj = {
      name: name,
      phone: phone,
      job: job
    };
    axios.post("http://192.168.100.42:4000/api/voluntary/add", obj)
      .then((res) => {
        console.log(res.data);
        setName('');
        setPhone('');
        setJob('');
        Alert.alert("Thank you for posting", "Rabi yberklk");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '80%', marginBottom: 20 }}>
        <Text style={{ height: 26, fontSize: 20, fontWeight: 'bold', color: '#209FA6', marginBottom: 60, textAlign: 'center', fontFamily: FontFamily.smallNormalBold, width: 101, marginLeft: 10 }}></Text>
        <Text style={{ height: 66, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center', fontFamily: FontFamily.kanit }}>voluntary</Text>
        <Text>if u are willing to take matters unto your own hands feel free to join us here</Text>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <TextInput
          placeholder="job"
          value={job}
          onChangeText={setJob}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handlePost}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit </Text>
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
    backgroundColor: 'white',
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
});

export default SignUp;
