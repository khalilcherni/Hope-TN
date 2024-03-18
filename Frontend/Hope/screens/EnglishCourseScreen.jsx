// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');

// const MixedCourseScreen = () => {
//   const navigation = useNavigation();

//   const handleHomeNavigation = () => {
//     navigation.navigate('Home');
//   };

//   const handlevents = () => {
//     navigation.navigate('Events');
//   };

//   const handleSchoolNavigation = () => {
//     navigation.navigate('School');
//   };

//   const handledonation = () => {
//     navigation.navigate('donation');
//   };
//   const handleBackPress = () => {
//     navigation.navigate("School");
//   };
//   return (
//     <View style={styles.container}>
//         <View style={styles.headerContainer}>
//       <TouchableOpacity onPress={handleBackPress}>
//         <Image
//           source={require("../assets/Sign_out_circle_duotone-removebg-preview.png")}
//           style={styles.headerImg}
//         />
//       </TouchableOpacity>
//     </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Courses</Text>

//         {/* English Courses */}
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>English Courses</Text>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Basic English Grammar</Text>
//               <Text style={styles.courseDescription}>Learn the fundamentals of English grammar.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Intermediate English Speaking</Text>
//               <Text style={styles.courseDescription}>Improve your speaking skills with practical exercises.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Advanced English Writing</Text>
//               <Text style={styles.courseDescription}>Enhance your writing abilities with advanced techniques.</Text>
//             </View>
//           </View>
//         </View>

//         {/* German (Deutsch) Courses */}
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>German (Deutsch) Courses</Text>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Grundlagen der deutschen Grammatik</Text>
//               <Text style={styles.courseDescription}>Lernen Sie die Grundlagen der deutschen Grammatik.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Deutsch für Anfänger</Text>
//               <Text style={styles.courseDescription}>Verbessern Sie Ihre Deutschkenntnisse mit praktischen Übungen für Anfänger.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>Fortgeschrittenes Deutsch</Text>
//               <Text style={styles.courseDescription}>Verbessern Sie Ihre Deutschkenntnisse mit fortgeschrittenen Techniken.</Text>
//             </View>
//           </View>
//         </View>

//         {/* Arabic Courses */}
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Arabic Courses</Text>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/bb.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>القواعد الأساسية للغة العربية</Text>
//               <Text style={styles.courseDescription}>تعلم أساسيات قواعد اللغة العربية.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>المحادثة باللغة العربية للمبتدئين</Text>
//               <Text style={styles.courseDescription}>تحسين مهارات المحادثة باللغة العربية للمبتدئين مع التمارين العملية.</Text>
//             </View>
//           </View>
//           <View style={styles.courseContainer}>
//             <Image source={require('../assets/english_course_2.jpg')} style={styles.courseImage} />
//             <View style={styles.courseDetails}>
//               <Text style={styles.courseTitle}>الكتابة باللغة العربية المتقدمة</Text>
//               <Text style={styles.courseDescription}>تحسين مهارات الكتابة باللغة العربية باستخدام التقنيات المتقدمة.</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
      
//       <View style={styles.tabbar}>
//         <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><FontAwesome name="home" size={width * 0.06} color="black" /></TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem} onPress={handlevents}><MaterialCommunityIcons name="charity" size={width * 0.06} color="black" /></TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><Ionicons name="school" size={width * 0.06} color="black" /></TouchableOpacity>
//         <TouchableOpacity style={styles.tabItem} onPress={handledonation}><FontAwesome5 name="donate" size={width * 0.06}  color="black" /></TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     marginTop: 50,
//   },
//   headerContainer: {
//     position: "absolute",
//     top: 0,
//     left: -20,
//     zIndex: 1, // to ensure it's above other content
//   },
//   headerImg: {
//     width: 50,
//     height: 60,
//     resizeMode: "contain",
//     margin: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   courseContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//   },
//   courseImage: {
//     width: 120,
//     height: 120,
//     resizeMode: 'cover',
//   },
//   courseDetails: {
//     flex: 1,
//     padding: 10,
//   },
//   courseTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   courseDescription: {
//     fontSize: 14,
//   },
//   tabbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
  
//     paddingVertical: height * 0.02,
//     position: 'absolute',
//     bottom: -20,
//     left: 0,
//     right: 0,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default MixedCourseScreen;
