import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function Events() {
  const navigation = useNavigation(); 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.72.231:4000/api/get')
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
    navigation.navigate('Registration');
  };

  const renderCountdown = (deadline) => {
    // Implement your countdown rendering logic here
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
  const handlevents = () => {
    navigation.navigate('Events');
  };
  const handledonation = () => {
    navigation.navigate('donation');
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
          <View style={styles.eventContainer} key={event.id}>
            <Text style={styles.title}>{event.name}</Text>
            {event.image ? (
              <Image style={styles.image} source={{ uri: event.image }} />
            ) : (
              <Text>No Image Available</Text>
            )}

            <View style={styles.card}>
              <Text style={styles.cardText}>{event.description}</Text>
            </View>

            <TouchableOpacity onPress={() => handleMapNavigation(event.location)}>
              <View style={styles.dateContainer}>
                <Ionicons name="location-outline" size={width * 0.05} color="blue" />
                <Text style={styles.details}> {event.location}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={width * 0.05} color="green" />
              <Text style={styles.details}>Start Date: {(event.startdate)}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={width * 0.05} color="red" />
              <Text style={styles.details}>End Date: {(event.enddate)}</Text>
            </View>
            <View style={styles.deadlineContainer}>
              <View style={styles.registrationDeadline}>
                <Ionicons name="calendar-outline" size={width * 0.05} color="purple" />
                <Text style={styles.details}>Registration Deadline: {(event.registrationdeadline)}</Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.countdownContainer}>
              {renderCountdown(event.registrationdeadline)}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><FontAwesome name="home" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handlevents}><MaterialCommunityIcons name="charity" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><Ionicons name="school" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handledonation}><FontAwesome5 name="donate" size={width * 0.06}  color="black" /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: width * 0.03,
    marginTop: height * 0.03
  },
  eventContainer: {
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.05,
    padding: width * 0.03,
  },
  image: {
    width: '100%',
    height: height * 0.25,
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    textAlign: 'center',
    color:'#209FA6'
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: width * 0.03,
    borderRadius: width * 0.02,
    marginBottom: height * 0.02,
  },
  cardText: {
    fontSize: width * 0.04,
  },
  description: {
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
  },
  details: {
    fontSize: width * 0.03,
    marginBottom: height * 0.007,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.005,
  },
  deadlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.005,
  },
  registrationDeadline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countdownContainer: {
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  button: {
    backgroundColor: '#209FA6',
    padding: width * 0.03,
    borderRadius: width * 0.02,
    alignItems: 'center',
    marginBottom: height * 0.005,
  },
  buttonText: {
    color: 'white',
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
