import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions ,TouchableOpacity} from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height ,width} = Dimensions.get('window')

const Orphan = () => {
  const videoUrl = 'https://youtu.be/dmosK4LHeUU?si=HYD_Xr66MW9-r-l5';
  const navigation = useNavigation();
  const handleHomeNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };
  const handleChatNavigation = () => {
    // Navigate to the ChatRoom screen
    navigation.navigate('ChatRoom');
  };
  const handleSchoolNavigation = () => {
    // Navigate to the School screen
    navigation.navigate('School');
  };
  const handleMESNavigation = () => {
    // Navigate to the Messages screen
    navigation.navigate('Messages');
  };

  return (
    <ScrollView>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          // source={require("../assets/orphan1.jpg")}
          source={require("../assets/orphan1.jpeg")}

        />
        <Image
          style={styles.needwater21Icon}
          contentFit="cover"
          // source={require("../assets/pp.jpg")}
          source={require("../assets/orphan2.jpg")}
        />
        <Image
          style={[styles.needwater22Icon, styles.iconPosition]}
          contentFit="cover"
          // source={require("../assets/needWater2.jpg")}
          source={require("../assets/orphan3.jpeg")}
        />
        <Image
          style={styles.needwater31Icon}
          contentFit="cover"
          // source={require("../assets/needWater2.jpg")}
          source={require("../assets/orphan4.jpg")}
        />
        <Text style={[styles.yearOldOunissaMazhoud, styles.donateTypo]}>
          In Tunisia, a vital initiative is taking shape—one that aims to provide essential support and care for orphaned children who have been left vulnerable and in need. The "Orphan Care Project" is dedicated to addressing the pressing challenges faced by these children, offering them a pathway towards a brighter and more secure future. However, to bring this vision to fruition, the initiative relies on the generosity and compassion of donors who recognize the urgent need to uplift and empower orphaned children in Tunisia.
        </Text>
        <Text style={[styles.mazhoudiFeelsAbandonned, styles.donateTypo]}>
          At the heart of the Orphan Care Project lies a comprehensive approach to meeting the needs of orphaned children across the country. Many of these children face significant barriers to accessing education, healthcare, and basic necessities, leaving them vulnerable to exploitation and neglect. Through the initiative, donations will be channeled into establishing and supporting orphanages and foster care programs that provide safe and nurturing environments for orphaned children. These facilities will offer shelter, education, healthcare, and emotional support, giving orphaned children the opportunity to thrive and reach their full potential.
        </Text>
        <WebView
          source={{ uri: videoUrl }}
          allowsFullscreenVideo
          style={[styles.d7unHighres17024256661Icon]}
        />
        <Text style={[styles.inMarchAuthorities, styles.theOnlyRoadPosition]}>
          Moreover, the Orphan Care Project recognizes the importance of providing holistic support to orphaned children, addressing not only their material needs but also their emotional well-being. Donations will fund counseling services, trauma-informed care programs, and recreational activities aimed at helping orphaned children heal from past traumas and build resilience for the future. By nurturing their mental and emotional health, the initiative seeks to empower orphaned children to overcome adversity and embrace opportunities for growth and development.
        </Text>
        <Text style={[styles.theOnlyRoad, styles.theOnlyRoadPosition]}>
          In addition to providing direct support to orphaned children, the Orphan Care Project is committed to strengthening families and communities to prevent children from being orphaned in the first place. Donations will support initiatives that provide financial assistance, vocational training, and parenting support to at-risk families, helping them stay together and provide a stable and loving home environment for their children. By investing in family support services, the initiative aims to reduce the number of children who are orphaned or separated from their families due to poverty, conflict, or other crises.
        </Text>
        <View style={[styles.youtubeAndVimeoVideo]} />
        <Text style={[styles.tunisiansSatisfiedWith]}>
          So helping Orphans is our job !
        </Text>
        <Image
          style={styles.captureDcran20240227113}
          contentFit="cover"
          // source={require("../assets/khhh.jpg")}
          source={require("../assets/orphan5.jpeg")}
        />
        <Text style={[styles.theSouthernRegion, styles.donateTypo]}>
          In essence, the Orphan Care Project represents a beacon of hope for orphaned children in Tunisia, offering them a lifeline of support and opportunity in their time of need. Through the collective efforts of donors and volunteers, this initiative has the power to transform the lives of countless orphaned children, giving them the chance to grow, learn, and succeed. Together, let us join hands and make a difference in the lives of Tunisia's orphaned children by supporting the Orphan Care Project. Your donation can help to provide love, security, and hope to orphaned children who deserve nothing less.
        </Text>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("donation")}
        >
          <Text style={styles.donate}>Donate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    iconPosition: {
    top: 260,
    position: "absolute",
  },
  donateTypo: {
    textAlign: "left",
    position: "absolute",
  },
  theOnlyRoadPosition: {
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    height: hp(7),
    top: 260,
    left: 9,
    borderRadius: 20,
    width: 230,
    height: 230,
    position: "absolute",
  },
  needwater21Icon: {
    top: 100,
    left: 240,
    borderRadius: 20,
    width: 179,
    height: 149,
    position: "absolute",
  },
  needwater22Icon: {
    left: 250,
    borderRadius: 20,
    width: 155,
    height: 153,
  },
  needwater31Icon: {
    top: 120,
    left: 30,
    borderRadius: 12,
    width: 200,
    height: 127,
    position: "absolute",
  },
  yearOldOunissaMazhoud: {
    top: 520,
    width: 372,
    height: 525,
    lineHeight: 20,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    left: 21,
  },
  mazhoudiFeelsAbandonned: {
    top: 750,
    left: 20,
    width: 372,
    height: 488,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  inMarchAuthorities: {
    top: 1240,
    width: 372,
    height: 220,
    fontSize: FontSize.size_mini,
  },
  theOnlyRoad: {
    top: 1470,
    width: 372,
    height: 250,
    fontSize: FontSize.size_mini,
    left: 27,
  },
  d7unHighres17024256661Icon: {
    top: 1000,
    borderRadius: 14,
    width: 370,
    height: 200,
    left: 20,
    position: "absolute",
  },
  tunisiansSatisfiedWith: {
    left: 31,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    fontWeight: "700",
    top: 1720,
    fontSize: 35,
    lineHeight: 40,
    width: 370,
    height: 109,
  },
  captureDcran20240227113: {
    top: 1835,
    left: 21,
    width: 366,
    height: 175,
    position: "absolute",
  },
  theSouthernRegion: {
    top: 2030,
    left: 18,
    width: 370,
    height: 137,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  donate: {
    top: 15,
    left: 92,
    fontSize: 25,
    color: 'white',
    width: 186,
    height: 33,
  },
  nextButton: {
    borderRadius: 15,
    backgroundColor: Color.colorDarkcyan,
    top: 2220,
    height: 70,
    width: 272,
    left: 74,
    position: "absolute",
  },
  vectorParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 2353,
    overflow: "hidden",
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Orphan;