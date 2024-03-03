import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const CharityScreen = () => {
  const navigation = useNavigation();
  const [donationCards, setDonationCards] = useState([
    {
      id: 1,
      image: require('../assets/poor1.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0, // Initialize currentAmount to 0
      goalAmount: 10000,
    },
    {
      id: 2,
      image: require('../assets/orphan1.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0, // Initialize currentAmount to 0
      goalAmount: 10000,
    },
    {
      id: 3,
      image: require('../assets/needWater.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0, // Initialize currentAmount to 0
      goalAmount: 10000,
    },
    {
      id: 4,
      image: require('../assets/needWater.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0, // Initialize currentAmount to 0
      goalAmount: 10000,
    },
    // Add more donation cards here
  ]);

  useEffect(() => {
    // Load donation amounts for each card from AsyncStorage
    loadDonationAmounts();
  }, []);

  const loadDonationAmounts = async () => {
    try {
      const savedDonations = await AsyncStorage.multiGet(donationCards.map(card => `donation_${card.id}`));
      const updatedCards = donationCards.map((card, index) => {
        const storedAmount = savedDonations[index][1];
        if (storedAmount !== null) {
          return {
            ...card,
            currentAmount: parseInt(storedAmount),
          };
        }
        return card;
      });
      setDonationCards(updatedCards);
    } catch (error) {
      console.error('Error loading donation amounts: ', error);
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
const handleEventsavigation=()=>{
  navigation.navigate('Events'); 
}
  const handleDonate = async (donationAmount, cardId) => {
    const updatedCards = donationCards.map(card => {
      if (card.id === cardId) {
        return {
          ...card,
          currentAmount: card.currentAmount + donationAmount,
        };
      }
      return card;
    });
    setDonationCards(updatedCards);
    try {
      // Store the updated donation amount in AsyncStorage
      await AsyncStorage.setItem(`donation_${cardId}`, (updatedCards.find(card => card.id === cardId).currentAmount).toString());
    } catch (error) {
      console.error('Error storing donation amount: ', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {donationCards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Image source={card.image} style={styles.image} />
            <Text style={styles.description}>{card.description}</Text>
            <Text style={styles.progress}>
              {card.currentAmount} DT raised of {card.goalAmount} DT goal
            </Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={card.currentAmount / card.goalAmount}
            />
            <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('Donation1', { cardId: card.id, handleDonate })}>
              <Text style={styles.donateButtonText}>Donate</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleHelpnavigation}><FontAwesome5 name="hands-helping" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleEventsavigation}><MaterialIcons name="event" size={24} color="black" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  container: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width - 40,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  progress: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center',
  },
  donateButton: {
    backgroundColor: '#209FA6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  donateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 18,
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

export default CharityScreen;
