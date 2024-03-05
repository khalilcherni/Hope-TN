import * as React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
const AndroidLarge2 = () => {
  const [donationAmount, setDonationAmount] = React.useState('');
  const [enteredAmount, setEnteredAmount] = React.useState('');
  const navigation = useNavigation();
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
  const handleHomeNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };
  const handleChatNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('ChatRoom');
  };
  const handleSchoolNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('School');
  };
  const handleMESNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('Messages');
  };
  const handleHelpnavigation=()=>{
    navigation.navigate('Helping'); 
  }
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
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleHelpnavigation}><FontAwesome5 name="hands-helping" size={24} color="black" /></TouchableOpacity>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
<<<<<<< HEAD
    fontFamily: 'Arial', // Adjust font family as needed
=======
    // fontFamily: 'Arial', // Adjust font family as needed
>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
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
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AndroidLarge2;
