import * as React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";

const AndroidLarge2 = () => {
  const [donationAmount, setDonationAmount] = React.useState('');
  const [enteredAmount, setEnteredAmount] = React.useState('');

  const handleSelectAmount = (amount) => {
    setDonationAmount(amount);
    setEnteredAmount(amount);
  };

  const handleDonate = () => {
    if (enteredAmount) {
      Alert.alert("Donation done", "Rabi ykather khirk");
    } else {
      Alert.alert("Please enter a donation amount");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Donation</Text>
      <View style={styles.amountContainer}>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => handleSelectAmount("50tnd")}
        >
          <Text style={styles.amountButtonText}>50tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => handleSelectAmount("80tnd")}
        >
          <Text style={styles.amountButtonText}>80tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => handleSelectAmount("100tnd")}
        >
          <Text style={styles.amountButtonText}>100tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => handleSelectAmount("120tnd")}
        >
          <Text style={styles.amountButtonText}>120tnd</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>or</Text>
      <TextInput
        placeholder="enter here"
        placeholderTextColor="white"
        style={styles.input}
        value={enteredAmount}
        onChangeText={setEnteredAmount}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleDonate}
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
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Arial', // Adjust font family as needed
  },
  amountContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  amountButton: {
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    fontSize: 16,
    color: 'white',
  },
  orText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: 290,
    borderRadius: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
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

export default AndroidLarge2;
