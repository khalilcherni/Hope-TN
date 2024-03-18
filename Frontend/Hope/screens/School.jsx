import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, TextInput, Dimensions } from 'react-native'; // Import Dimensions
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
export default function School() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const screenWidth = Dimensions.get('window').width; // Get Screen Width

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
    Linking.openURL('https://meet.google.com/');
  };

  const handleImagePress = () => {
    navigation.navigate('EnglishCourseScreen');
  };

  const filteredData = data.filter(event => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.nameodteacher.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
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
  const handlhelp = () => {
    navigation.navigate('Helping');
  };
  const handledonation = () => {
    navigation.navigate('donation');
  };
  const handlecontact = () => {
    navigation.navigate('Contactus');
  };
  const handleBackPress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../assets/Sign_out_circle_duotone-removebg-preview.png")}
          style={styles.headerImg}
        />
      </TouchableOpacity>
    </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, { width: screenWidth * 0.8 }]} // Use percentage for width
          placeholder="Search..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredData.map(event => (
          <TouchableOpacity key={event.id} onPress={handleImagePress}>
            <View style={styles.eventContainer}>
            <Text style={styles.title}>
  <FontAwesome5 name="book" size={20} color="black" /> {event.name}
</Text>

              <View style={styles.teacherContainer}>
                <AntDesign name="user" size={20} color="black" />
                <Text style={styles.teacherName}>{event.nameodteacher}</Text>
              </View>
              {event.image ? (
                <Image source={{ uri: event.image }} style={[styles.image, { width: screenWidth - 60 }]} /> // Adjust width according to screen
              ) : (
                <Text>No Image Available</Text>
              )}

              <View style={styles.card}>
                <Text style={styles.cardText}>{event.description}</Text>
              </View>

              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={24} color="green" />
                <Text style={styles.details}>Start Date: {event.start}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={24} color="red" />
                <Text style={styles.details}>End Date: {event.end}</Text>
              </View>
              <View style={styles.deadlineContainer}>
                <View style={styles.dateContainer}>
                  <Ionicons name="calendar-outline" size={24} color="purple" />
                  <Text style={styles.details}>Duration: {event.duration}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                  <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </TouchableOpacity>
        ))}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: -20,
    zIndex: 1, // to ensure it's above other content
  },
  headerImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    margin: 40,
    top:-10,
    left:-5
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
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginRight:80
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
    backgroundColor: '#209FA6',
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
  
    paddingVertical: height * 0.02,
    position: 'absolute',
    bottom: -15,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  aa:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 50,
    height: 50,
    marginTop: 80
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    marginRight: 10,
    backgroundColor: '#0000',
  },
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  teacherName: {
    fontSize: 17,
    marginLeft: 5,
  },
});
