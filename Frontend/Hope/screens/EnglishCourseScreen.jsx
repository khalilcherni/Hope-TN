import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const MixedCourseScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Courses</Text>

      {/* English Courses */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>English Courses</Text>
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
      </View>

      {/* German (Deutsch) Courses */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>German (Deutsch) Courses</Text>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Grundlagen der deutschen Grammatik</Text>
            <Text style={styles.courseDescription}>Lernen Sie die Grundlagen der deutschen Grammatik.</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Deutsch für Anfänger</Text>
            <Text style={styles.courseDescription}>Verbessern Sie Ihre Deutschkenntnisse mit praktischen Übungen für Anfänger.</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Fortgeschrittenes Deutsch</Text>
            <Text style={styles.courseDescription}>Verbessern Sie Ihre Deutschkenntnisse mit fortgeschrittenen Techniken.</Text>
          </View>
        </View>
      </View>

      {/* Arabic Courses */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Arabic Courses</Text>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>القواعد الأساسية للغة العربية</Text>
            <Text style={styles.courseDescription}>تعلم أساسيات قواعد اللغة العربية.</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>المحادثة باللغة العربية للمبتدئين</Text>
            <Text style={styles.courseDescription}>تحسين مهارات المحادثة باللغة العربية للمبتدئين مع التمارين العملية.</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>الكتابة باللغة العربية المتقدمة</Text>
            <Text style={styles.courseDescription}>تحسين مهارات الكتابة باللغة العربية باستخدام التقنيات المتقدمة.</Text>
          </View>
        </View>
        <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
      </View>
      </View>
   
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default MixedCourseScreen;
