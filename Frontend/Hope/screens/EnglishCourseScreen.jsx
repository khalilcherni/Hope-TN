import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native';

const CourseScreen = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Basic English Grammar',
      description: 'Learn the fundamentals of English grammar.',
      image: require('../assets/bb.jpg'),
    },
    {
      id: 2,
      title: 'Intermediate English Speaking',
      description: 'Improve your speaking skills with practical exercises.',
      image: require('../assets/english_course_2.jpg'),
    },
    {
      id: 3,
      title: 'Advanced English Writing',
      description: 'Enhance your writing abilities with advanced techniques.',
      image: require('../assets/english_course_2.jpg'),
    },
    {
      id: 4,
      title: 'القواعد الأساسية للغة العربية',
      description: 'تعلم القواعد الأساسية للغة العربية.',
      image: require('../assets/bb.jpg'),
    },
    {
      id: 5,
      title: 'المحادثة العربية المتوسطة',
      description: 'تحسين مهارات المحادثة العربية مع التمارين العملية.',
      image: require('../assets/bb.jpg'),
    },
    {
      id: 6,
      title: 'دروس اللغة الألمانية',
      description: 'تعلم اللغة الألمانية مع دروس متقدمة.',
      image: require('../assets/bb.jpg'),
    },
  ]);

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
      <Text style={styles.title}>Courses</Text>
      {courses.map(course => (
        <TouchableOpacity key={course.id} onPress={startAnimation} style={styles.courseContainer}>
          <Animated.Image
            source={course.image}
            style={[styles.courseImage, { transform: [{ scale }] }]}
          />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseDescription}>{course.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    marginTop: 50,
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

export default CourseScreen;
