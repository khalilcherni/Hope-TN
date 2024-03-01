import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native'; // Import the necessary module

export default function School() {
  const navigation = useNavigation(); // Initialize navigation

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.72.231:4000/api/school/get')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleMapNavigation = (location) => {
    const mapsUrl = `https://www.google.com/maps/place/${location}`;
    Linking.openURL(mapsUrl);
  };

  const handleRegistration = () => {
    // Open the Google Meet link in the browser or the app
    Linking.openURL('https://meet.google.com/');
  };

  const handleImagePress = () => {
    // Navigate to the EnglishCourseScreen when image is pressed
    navigation.navigate('EnglishCourseScreen');
  };

  const renderCountdown = (deadline) => {
    // Implement your countdown rendering logic here
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data.map(event => (
          <TouchableOpacity key={event.id} onPress={handleImagePress}>
            <View style={styles.eventContainer}>
              <Text style={styles.title}>{event.name}</Text>
              <Text style={styles.aa} > Teacher:{event.nameodteacher}</Text>
              {event.image ? (
                <Image source={{ uri: event.image }} style={styles.image} />
              ) : (
                <Text>No Image Available</Text>
              )}

              <View style={styles.card}>
                <Text style={styles.cardText}>{event.description}</Text>
              </View>

            
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={24} color="green" />
                <Text style={styles.details}>Start Date: {(event.start)}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={24} color="red" />
                <Text style={styles.details}>End Date: {(event.end)}</Text>
              </View>
              <View style={styles.deadlineContainer}>
                <View style={styles.dateContainer}>
                  <Ionicons name="calendar-outline" size={24} color="purple" />
                  <Text style={styles.details}>Duration: {(event.duration)}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                  <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('ChatRoom')}><Text>ChatRoom</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Messages')}><Text>Messages</Text></TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 15,
    marginTop: 30
  },
  eventContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    marginBottom: 3,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  deadlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -5,
  },
  registrationDeadline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countdownContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
  aa:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});
