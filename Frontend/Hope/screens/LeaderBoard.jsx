import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import axios from "axios";

const LeaderBoard = () => {
  const windowWidth = Dimensions.get('window').width;

  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://192.168.1.12:4000/supporters/get')
      .then(res => {
        const sortedSupporters = res.data.sort((a, b) => b.poitns - a.poitns);
        setSupporters(sortedSupporters);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const styles = StyleSheet.create({
    scrollView: {
      marginTop:20,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leaderBoard: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    supporterWrapper: {
      marginBottom: 10,
      width: "100%", // Ensure full width
      alignItems: "center", // Center supporters horizontally
    },
    supporterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: windowWidth * 0.9 - 20, // Subtract 20px for the gap between supporters
      height: 80, // Adjusted height
      marginBottom: 10, // Decreased margin
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#ccc",
      padding: 20,
      backgroundColor: "#fff",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    rankContainer: {
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    rankText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30, // Make it circular
      marginRight: 10,
    },
    infoContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    points: {
      fontSize: 14,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.leaderBoard}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          supporters.map((supporter, index) => (
            <View style={styles.supporterWrapper} key={supporter.id}>
              <View style={styles.supporterContainer}>
                <View style={styles.rankContainer}>
                  <Text style={styles.rankText}>{index + 1}</Text>
                </View>
                <Image style={styles.image} source={{ uri: supporter.image }} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{supporter.name}</Text>
                  <Text style={styles.points}>Points: {supporter.poitns}</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default LeaderBoard;
