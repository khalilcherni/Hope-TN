// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions ,TouchableOpacity} from "react-native";
// import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
// import { useNavigation } from "@react-navigation/native";
// import { WebView } from 'react-native-webview';

// const Frame1 = () => {
//     const navigation = useNavigation();
//     const videoUrl = 'https://th.bing.com/th/id/R.3b3b5f8db8178d2ad7ebdb48c2cd4057?rik=dmQJr6RyfnmGSw&pid=ImgRaw&r=0';
//   return (
//     <ScrollView>
//     <View style={styles.elder31Parent}>
//       <Image
//         style={styles.elder31Icon}
//         contentFit="cover"
//         source={require("../assets/elder3.jpeg")}
//       />
//       <Image
//         style={[styles.elder11Icon, styles.iconLayout1]}
//         contentFit="cover"
//         source={require("../assets/elder1.jpeg")}
//       />
//       <Image
//         style={[styles.elder21Icon, styles.iconLayout1]}
//         contentFit="cover"
//         source={require("../assets/elder2.jpeg")}
//       />
//       <Image
//         style={[styles.elder51Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../assets/elder5.jpeg")}
//       />
//       <Image
//         style={[styles.elder61Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../assets/elder6.jpeg")}
//       />
//       <Text style={[styles.inTheHeart, styles.theTypo1]}>
//         In the heart of Tunisia, a groundbreaking project is emerging—one that
//         seeks to provide vital support and care for the elderly population in
//         need. The project, aptly named "Elderly Care Initiative," aims to address the pressing challenges faced by elderly Tunisians.
   
//       </Text>
//       <Text style={[styles.atTheCore, styles.theTypo1]}>
//         At the core of the Elderly Care Initiative is the provision of
//         comprehensive healthcare services tailored to the unique needs of
//         elderly individuals. Many seniors in Tunisia struggle to access quality
//         healthcare due to financial constraints or limited availability of
//         medical facilities. 
//       </Text>
//       <Text style={[styles.beyondHealthcareThe, styles.theTypo]}>
//         Beyond healthcare, the Elderly Care Initiative seeks to combat social
//         isolation and loneliness among the elderly population. Too often,
//         elderly Tunisians find themselves living in isolation, cut off from
//         social networks and support systems.
//       </Text>
   
  
   
//       <WebView
//           source={{ uri: videoUrl }}
//           allowsFullscreenVideo
//           style={[styles.d7unHighres17024256661Icon]}
//         />
//       <View style={[styles.vectorParent, styles.groupChildLayout]}>
//       <TouchableOpacity>
//         <Image
//           style={[styles.groupChild, styles.groupChildLayout]}
//           contentFit="cover"
//           onPress={() => navigation.navigate("donation")}
//           source={require("../assets/Group_3040.png")}
//         />
//         <Text style={styles.donate}></Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   iconLayout1: {
//     height: 100,
//     width: 150,
//     borderRadius: 30,
//     top:550,
//     position: "absolute",
//     marginLeft:30 //(Dimensions.get('window').width - 150) / 2
    
//   },
//   d7unHighres17024256661Icon: {
//     top: 950,
//     borderRadius: 30,
//     width: 370,
//     height: 200,
//     left: 20,
//     position: "absolute",
//   },
//   iconLayout: {
//     top:660,
//     height: 100,
//     width: 150,
//     borderRadius:30,
//     position: "absolute",
//   },
//   theTypo1: {
//     width: 400,
//     color: Color.lightBlack,

//     fontSize: FontSize.size_mini,
//     fontFamily: FontFamily.interRegular,
//     position: 'absolute',
//     textAlign: 'center',
//     left: (Dimensions.get('window').width - 400) / 2,
    
//     // top: (Dimensions.get('window').height - FontSize.unifiedDesignDeprecatedFootnote_size) / 2,
//   },
//   theTypo: {
//     height: 165,
//     width: 400,
//     textAlign: "left",
//     color: Color.lightBlack,
//     fontSize: FontSize.size_mini,
//     fontFamily: FontFamily.interRegular,
//     left: (Dimensions.get('window').width - 400) / 2,
//     position: "absolute",
//   },
//   groupChildLayout: {
//     height: 71,
//     width: 289,
//     position: "absolute",
//     top:600
//   },
//   elder31Icon: {
//     width: 308,
//     height: 164,
//     borderRadius: Border.br_xl,
//     position: 'absolute',
//     top: 60, // Center vertically
//     left: (Dimensions.get('window').width - 308) / 2, // Center horizontally
//   },
//   elder11Icon: {
//     top: 741,
//     left: 197,
//   },
//   elder21Icon: {
//     top: 744,
//     left: 25,
//   },
//   elder51Icon: {
//     left: 197,
//   },
//   elder61Icon: {
//     left: 26,
//   },
//   inTheHeart: {
//     top: 250,
//     left: 27,
//     height: 150,
//   },
//   atTheCore: {
//     top: 350,
//     height: 225,
//     left: 26,
//   },
//   beyondHealthcareThe: {
//     top: 800,
//   },
//   moreoverTheElderly: {
//     top: 870,
//   },
//   howeverNoneOf: {
//     top: 990,
//   },
//   inEssenceThe: {
//     top: 1110,
//   },
//   groupChild: {
//     top: 0,
//     left: (Dimensions.get('window').width-350) / 2 ,
//     borderRadius: Border.br_xl,
//   },
//   donate: {
//     top: 23,
//     left: 101,
//     fontSize: FontSize.size_mini,
//     color: Color.lightWhite,
//     width: 87,
//     height: 24,
//     textAlign: "left",
//     fontSize: FontSize.size_mini,
//     position: "absolute",
//   },
//   vectorParent: {
//     top: 1623,
//     left: 36,
//   },
//   elder31Parent: {
//     backgroundColor: '#f0f0f0',
//     flex: 1,
//     width: "100%",
//     height: 1763,
//     overflow: "hidden",
//     marginTop:50
//   },
// });

// export default Frame1;
