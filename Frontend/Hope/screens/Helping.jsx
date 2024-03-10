import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const CharityScreen = () => {
  const navigation = useNavigation();
  const [donationCards, setDonationCards] = useState([
    {
      id: 1,
      image: require('../assets/poor1.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0,
      goalAmount: 10000,
    },
    {
      id: 2,
      // image: require('../assets/orphan1.jpg'),
      image: require('../assets/poor1.jpg'),
      description: 'Help Jebreel and his family to escape from death. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id consequat turpis, eget tincidunt lectus.',
      currentAmount: 0,
      goalAmount: 10000,
    },

  ]);

  useEffect(() => {
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
  };

  const handleEventsnavigation = () => {
    navigation.navigate('Events'); 
  };
  const handledonation = () => {
    navigation.navigate('donation');
  };
  const handlecontact = () => {
    navigation.navigate('Contactus');
  };
  const handlhelp = () => {
    navigation.navigate('Helping');
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
      await AsyncStorage.setItem(`donation_${cardId}`, (updatedCards.find(card => card.id === cardId).currentAmount).toString());
    } catch (error) {
      console.error('Error storing donation amount: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer} stickyHeaderIndices={[1]}>
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
        {/* Empty view to maintain space for the tab bar */}
        <View style={{ height: height * 0.1 }} />
      </ScrollView>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><FontAwesome name="home" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handlhelp}><MaterialCommunityIcons name="charity" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><Ionicons name="school" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handledonation}><FontAwesome5 name="donate" size={width * 0.06}  color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handlecontact}><MaterialIcons name="quick-contacts-dialer" size={width * 0.06}  color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  card: {
    width: Dimensions.get('window').width - 40,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  progress: {
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
  },
  donateButton: {
    backgroundColor: '#209FA6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
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

    paddingVertical: height * 0.02,
    position: 'absolute',
    bottom: -18,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CharityScreen;
