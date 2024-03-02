import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const CharityScreen = () => {
  const navigation = useNavigation();
  const [donationCards, setDonationCards] = useState([
    {
      id: 1,
      image: require('../assets/poor1.jpg'),
      description: 'Help Jebreel and his family to escape from death',
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  card: {
    marginBottom: 20,
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
  },
  progress: {
    fontSize: 14,
    marginBottom: 5,
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
});

export default CharityScreen;
