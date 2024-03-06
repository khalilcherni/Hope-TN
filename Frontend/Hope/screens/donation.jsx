import * as React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert, Modal } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const AndroidLarge2 = () => {
  const [donationAmount, setDonationAmount] = React.useState('');
  const [enteredAmount, setEnteredAmount] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const navigation = useNavigation();

  const handleSelectAmount = (amount) => {
    setDonationAmount(amount);
    setEnteredAmount(amount);
  };

  const handleDonate = () => {
    if (enteredAmount && selectedCategory) {
      Alert.alert("Donation done", `Thank you for donating to ${selectedCategory}`);
    } else {
      Alert.alert("Please enter a donation amount and select a category");
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
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

  const handleHelpnavigation = () => {
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
          onPress={() => handleSelectAmount("100tnd")}
        >
          <Text style={styles.amountButtonText}>100tnd</Text>
        </TouchableOpacity>
        {/* Add more amount buttons as needed */}
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
        style={styles.categoryButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>{selectedCategory || "Select Category"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDonate}
      >
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>

      {/* Modal for category selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleCategorySelect("Poor")}>
              <Text style={styles.modalOption}>Poor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategorySelect("Orphaned")}>
              <Text style={styles.modalOption}>Orphaned</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategorySelect("Need Water")}>
              <Text style={styles.modalOption}>Need Water</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategorySelect("Gaza")}>
              <Text style={styles.modalOption}>Gaza</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategorySelect("Elderly")}>
              <Text style={styles.modalOption}>Elderly</Text>
            </TouchableOpacity>
         
            {/* Add more category options as needed */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  categoryButton: {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalOption: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalCancel: {
    fontSize: 18,
    color: 'red',
  },
});

export default AndroidLarge2;
