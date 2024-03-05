import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

const DonationScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize the useNavigation hook
  const { cardId, handleDonate } = route.params;

  const [enteredAmount, setEnteredAmount] = React.useState('');

  const handleDonateAmount = () => {
    if (enteredAmount) {
      const amount = parseInt(enteredAmount);
      handleDonate(amount, cardId);
      Alert.alert("Donation done", "Thank you for your donation", [
        {
          text: "OK",
          onPress: () => navigation.goBack(), // Navigate back to the CharityScreen
        },
      ]);
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
          placeholder='Phone'
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
          placeholder="Amount"
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
      </ScrollView>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleHelpnavigation}><FontAwesome5 name="hands-helping" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // Adjust this value according to the tab bar height
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#209FA6',
    marginBottom: 20,
  },
  input: {
    height: 55,
    width: windowWidth * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    borderRadius: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    height: 55,
    width: windowWidth * 0.8,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default DonationScreen;
