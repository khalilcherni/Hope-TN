import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { Linking } from 'react-native';
export default function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.100.44:4000/events/get')
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

  const renderCountdown = (deadline) => {
    const now = moment();
    const end = moment(deadline);
    const diff = end.diff(now);
    const duration = moment.duration(diff);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

  
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {data.map(event => (
        <View style={styles.eventContainer} key={event.id}>
                <Text style={styles.title}>{event.name}</Text>
          {event.image ? (
            <Image style={styles.image} source={{ uri: event.image }} />
          ) : (
            <Text>No Image Available</Text>
          )}
      
          <Text style={styles.description}>{event.description}</Text>
          <TouchableOpacity onPress={() => handleMapNavigation(event.location)}>
            <View style={styles.locationContainer}>
              <Text style={styles.details}>Location: {event.location}</Text>
              {/* <Ionicons name="md-map" size={24} color="blue" /> */}
            </View>
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={24} color="green" />
            <Text style={styles.details}>Start Date: {(event.startdate)}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={24} color="red" />
            <Text style={styles.details}>End Date: {(event.enddate)}</Text>
          </View>
       
         
          <View style={styles.deadlineContainer}>
            <Text style={styles.details}>Registration Deadline: {(event.registrationdeadline)}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.countdownContainer}>
            {renderCountdown(event.registrationdeadline)}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    marginBottom: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  deadlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  countdownContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});
