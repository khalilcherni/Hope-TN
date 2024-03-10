import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions ,TouchableOpacity} from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const aaaa = () => {
  const videoUrl = 'https://youtu.be/Qro0Rb7XJjI?si=dA1H-KkCa_u-RL-g';
  const navigation = useNavigation();
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

  return (
    <ScrollView>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          // source={require("../assets/orphan1.jpg")}
          source={require("../assets/poor1.jpg")}

        />
        <Image
          style={styles.needwater21Icon}
          contentFit="cover"
          // source={require("../assets/pp.jpg")}
          source={require("../assets/poor1.jpg")}
        />
        <Image
          style={[styles.needwater22Icon, styles.iconPosition]}
          contentFit="cover"
          // source={require("../assets/needWater2.jpg")}
          source={require("../assets/poor1.jpg")}
        />
        <Image
          style={styles.needwater31Icon}
          contentFit="cover"
          // source={require("../assets/needWater2.jpg")}
          source={require("../assets/poor1.jpg")}
        />
        <Text style={[styles.yearOldOunissaMazhoud, styles.donateTypo]}>
          The neglect of education infrastructure in Tunisia has left numerous children without access to schools, perpetuating a cycle of disadvantage and despair. These children face insurmountable obstacles as they navigate a landscape devoid of educational opportunities. The absence of adequate roads leading to villages isolates these children further, compounding their sense of abandonment and hopelessness. Many families, witnessing the lack of investment in education and infrastructure, feel compelled to leave their homes behind in pursuit of a better future in urban areas or even abroad.
        </Text>
        <Text style={[styles.mazhoudiFeelsAbandonned, styles.donateTypo]}>
          In the midst of this crisis, it is disheartening to note that hundreds of thousands of children in Tunisia are denied the basic right to education. Their plight serves as a stark reminder of the urgent need for government intervention and international support to address systemic inequalities and ensure that every child has access to quality education.
        </Text>
        <WebView
          source={{ uri: videoUrl }}
          allowsFullscreenVideo
          style={[styles.d7unHighres17024256661Icon]}
        />
        <Text style={[styles.inMarchAuthorities, styles.theOnlyRoadPosition]}>
          In Tunisia, countless children are deprived of their right to education, facing dire circumstances and enduring immense hardship. Many of these children, predominantly in rural areas, lack access to proper schooling facilities and resources. As authorities implement water rationing measures, these already marginalized communities suffer further. Families are forced to prioritize survival over education, with some even selling livestock to make ends meet.
        </Text>
        <Text style={[styles.theOnlyRoad, styles.theOnlyRoadPosition]}>
          The only road that leads to the village is decrepit and hasn't been paved in decades, and residents say this only deepens their sense of isolation. Some villagers have felt pushed to move to urban areas or abroad. About 300,000 of Tunisia's 12 million people have no drinking water in their homes, according to the Tunisian Forum for Economic and Social Rights.
        </Text>
        <View style={styles.youtubeAndVimeoVideo} />
        <Text style={[styles.tunisiansSatisfiedWith]}>
          Education Disparities in Tunisia:
        </Text>
        <Image
          style={styles.captureDcran20240227113}
          contentFit="cover"
          // source={require("../assets/khhh.jpg")}
          source={require("../assets/poor1.jpg")}
        />
        <Text style={[styles.theSouthernRegion, styles.donateTypo]}>
          The 2014 Tunisia Country report on Out-of-school children showed that while pre-primary out-of-school rates decreased, and primary rates fell to nearly zero, there had been no improvement at the lower secondary level. Poor children, children in rural areas, disabled children and children with uneducated parents were facing particular risk of being excluded from school. The report argued that poverty, poor school conditions, difference of language of instruction and low quality of education were among key barriers to education access.
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
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
    top: 883,
    left: 20,
    width: 372,
    height: 488,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  inMarchAuthorities: {
    top: 1290,
    width: 372,
    height: 220,
    fontSize: FontSize.size_mini,
  },
  theOnlyRoad: {
    top: 1537,
    width: 372,
    height: 200,
    fontSize: FontSize.size_mini,
    left: 27,
  },
  d7unHighres17024256661Icon: {
    top: 1050,
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

export default aaaa;
