import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native';

const EnglishCourseScreen = () => {
  const animatedValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>English Courses</Text>
      <TouchableOpacity onPress={startAnimation} style={styles.courseContainer}>
        <Animated.Image
          source={require('../assets/bb.jpg')}
          style={[styles.courseImage, { transform: [{ scale }] }]}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Basic English Grammar</Text>
          <Text style={styles.courseDescription}>Learn the fundamentals of English grammar.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.courseContainer}>
        <Animated.Image
          source={require('../assets/english_course_2.jpg')}
          style={[styles.courseImage, { transform: [{ scale }] }]}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Intermediate English Speaking</Text>
          <Text style={styles.courseDescription}>Improve your speaking skills with practical exercises.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={startAnimation} style={styles.courseContainer}>
        <Animated.Image
          source={require('../assets/english_course_2.jpg')}
          style={[styles.courseImage, { transform: [{ scale }] }]}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Advanced English Writing</Text>
          <Text style={styles.courseDescription}>Enhance your writing abilities with advanced techniques.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop:50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  courseImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'cover',
  },
  courseDetails: {
    flex: 1,
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
  },
});

export default EnglishCourseScreen;
