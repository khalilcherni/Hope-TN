import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

export default function Example() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://192.168.1.201:4000/palestine/get")
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleImageError = () => {
    setLoading(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((e, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={{ uri: e.image }}
                style={styles.image}
                onError={handleImageError}
              />
              <View style={styles.textContainer}>
                <Text style={styles.description}>{e.description}</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  container: {
    width: '100%',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  description: {
    fontSize: 16,
  },
});
