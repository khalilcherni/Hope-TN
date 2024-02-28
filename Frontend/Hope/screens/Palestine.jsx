import * as React from "react";
import { Image } from "expo-image";
// import {Video} from 'react-native-video';
import { StyleSheet, Text, View,Pressable , ScrollView,Dimensions,TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native"; 
const Frame3 = () => {
  const videoUrl = 'https://youtu.be/PeuNRaNGQr8?si=uC-Au9tE6MshojRn';
  const navigation = useNavigation();
  return (
    <ScrollView>
    <  View style={styles.vectorParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/55.jpg")}
      />
      <Image
        style={styles.needwater21Icon}
        contentFit="cover"
        source={require("../assets/56.jpg")}
      />
      <Image
        style={[styles.needwater22Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/57.jpg")}
      />
      <Image
        style={styles.needwater31Icon}
        contentFit="cover"
        source={require("../assets/58.jpg")}
      />
      <Text
        style={[styles.yearOldOunissaMazhoud, styles.donateTypo]}
      >{`Last month, Reham Shaheen’s four-year-old daughter cried all day from hunger, finally falling asleep while waiting for her only meal of the day to finish cooking.
 Shaheen has been stuck in Jordan since the Israel-Hamas war began, separated from her home, husband and three children who are in Gaza. “I spent two days not able to eat at all, thinking of my daughter, that she couldn’t find food,” Shaheen told TIME in a voice note Friday. `}</Text>
   
  <WebView
        source={{ uri: videoUrl }}
        allowsFullscreenVideo
        style={[ styles.d7unHighres17024256661Icon ]}
      />
      <Text
        style={[styles.inMarchAuthorities, styles.theOnlyRoadPosition]}
      >{`In March, authorities introduced water rationing even in major cities. Many residents in rural areas don't even have taps and rely on springs. Some farmers sold livestock to provide for their family and the rest of their cattle. 
"There are several families who have left the village, Djamila Mazhoud says.
"Elderly people left due to water scarcity. They followed their children to the city so they could live, leaving their houses empty. The reason is thirst. Can an 80-year-old go to the river to get water? No way," the 60-year-old says.
Pushed to move`}</Text>
      <Text
        style={[styles.theOnlyRoad, styles.theOnlyRoadPosition]}
      >{`The only road that leads to the village is decrepit and hasn't been paved in decades, and residents say this only deepens their sense of isolation.
Some villagers have felt pushed to move to urban areas or abroad.
About 300,000 of Tunisia's 12 million people have no drinking water in their homes, according to the Tunisian Forum for Economic and Social Rights.`}</Text>
      
      <View style={styles.youtubeAndVimeoVideo} />
      <Text style={[styles.tunisiansSatisfiedWith ]}>
      Half a million people are starving in Gaza
      </Text>
      <Image
        style={styles.captureDcran20240227113}
        contentFit="cover"
        source={require("../assets/60.jpg")}
      />
      <Text
        style={[styles.theSouthernRegion, styles.donateTypo]}
      >{`More than half a million people in Gaza — a quarter of the population — are starving, according to a report released Thursday by the UN and other agencies that highlights the humanitarian crisis caused by Israel's bombardment and siege on the territory in response to Hamas's Oct. 7 attack.

      The extent of the population's hunger eclipsed even the near-famines in Afghanistan and Yemen of recent years, according to figures in the report. The report warned that the risk of famine is "increasing each day," blaming the hunger on insufficient aid entering Gaza.

`}</Text>
       <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("donation")}
        >
          <Text style={styles.donate}>Donate</Text>
        </TouchableOpacity>
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
    // fontFamily: FontFamily.interRegular,
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
  needwater1Icon: {
    top: 0,
    left: 214,
    borderRadius: 22,
    width: 159,
    height: 149,
    position: "absolute",
  },
  mazhoudiFeelsAbandonned: {
 
    top: 889,
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
    // left: 21,
  },
  theOnlyRoad: {
    top: 1537,
    width: 372,
    height: 200,
    
    fontSize: FontSize.size_mini,
    left: 27,
  },
  d7unHighres17024256661Icon: {
    top: 800,
    borderRadius: 14,
    width: 370,
    height: 220,
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
    color:'white',
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
});

export default Frame3;