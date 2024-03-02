import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const DonationScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize the useNavigation hook
  const { cardId, handleDonate } = route.params;

  const [enteredAmount, setEnteredAmount] = React.useState('');

  const handleDonateAmount = () => {
    if (enteredAmount) {
      const amount = parseInt(enteredAmount);
      handleDonate(amount, cardId);
      Alert.alert("Donation done", "Rabi ykather khirk", [
        {
          text: "OK",
          onPress: () => navigation.goBack(), // Navigate back to the CharityScreen
        },
      ]);
    } else {
      Alert.alert("Please enter a donation amount");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donation</Text>
      <TextInput
      placeholder='Name'
      style={styles.input}
      />
       <TextInput
      placeholder='City'
      style={styles.input}
      />
       <TextInput
      placeholder='phone'
      style={styles.input}
      />
        <TextInput
      placeholder='Card'
      style={styles.input}
      />
        <TextInput
      placeholder='Card Number'
      style={styles.input}
      />
      <TextInput
        placeholder="amount"
    
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
