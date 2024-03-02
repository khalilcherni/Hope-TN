import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const DonationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { cardId, handleDonate } = route.params;

  const [enteredAmount, setEnteredAmount] = useState('');

  useEffect(() => {
    // Load the donation amount from AsyncStorage when the component mounts
    loadDonationAmount();
  }, []);

  const loadDonationAmount = async () => {
    try {
      const storedAmount = await AsyncStorage.getItem(`donation_${cardId}`);
      if (storedAmount !== null) {
        setEnteredAmount(storedAmount);
      }
    } catch (error) {
      console.error('Error loading donation amount: ', error);
    }
  };

  const handleDonateAmount = async () => {
    if (enteredAmount) {
      const amount = parseInt(enteredAmount);
      handleDonate(amount, cardId);
      try {
        // Store the donation amount in AsyncStorage
        await AsyncStorage.setItem(`donation_${cardId}`, enteredAmount);
        Alert.alert("Donation done", "Rabi ykather khirk", [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]);
      } catch (error) {
        console.error('Error storing donation amount: ', error);
      }
    } else {
      Alert.alert("Please enter a donation amount");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donation</Text>
      <TextInput
        placeholder="Enter amount here"
        placeholderTextColor="white"
        style={styles.input}
        keyboardType="numeric"
        value={enteredAmount}
        onChangeText={setEnteredAmount}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleDonateAmount}
      >
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#209FA6',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: 290,
    borderRadius: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    width: 290,
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
});

export default DonationScreen;
