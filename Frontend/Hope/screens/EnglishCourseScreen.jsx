import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const EnglishCourseScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>English Courses</Text>
      <View style={styles.courseContainer}>
        <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Basic English Grammar</Text>
          <Text style={styles.courseDescription}>Learn the fundamentals of English grammar.</Text>
        </View>
      </View>
      <View style={styles.courseContainer}>
        <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Intermediate English Speaking</Text>
          <Text style={styles.courseDescription}>Improve your speaking skills with practical exercises.</Text>
        </View>
      </View>
      <View style={styles.courseContainer}>
        <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>Advanced English Writing</Text>
          <Text style={styles.courseDescription}>Enhance your writing abilities with advanced techniques.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  courseImage: {
    width: 120,
    height: 120,
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
