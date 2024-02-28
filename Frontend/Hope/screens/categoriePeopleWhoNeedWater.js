import * as React from "react";
import { Image } from "expo-image";
// import {Video} from 'react-native-video';
import { StyleSheet, Text, View,Pressable , ScrollView,Dimensions,TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 
import { WebView } from 'react-native-webview';
const Frame = () => {
  const videoUrl = 'https://www.youtube.com/embed/Tg8FDNYkEIQ';
  const navigation = useNavigation();
  return (
    <ScrollView>
    <  View style={styles.vectorParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/water4.jpg")}
      />
      <Image
        style={styles.needwater21Icon}
        contentFit="cover"
        source={require("../assets/needWater.jpg")}
      />
      <Image
        style={[styles.needwater22Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/needWater2.jpg")}
      />
      <Image
        style={styles.needwater31Icon}
        contentFit="cover"
        source={require("../assets/needWater2.jpg")}
      />
      <Text
        style={[styles.yearOldOunissaMazhoud, styles.donateTypo]}
      >{`57-year-old Ounissa Mazhoud lives in Tunisia's remote village of Ouled Omar, 180 kilometers (110 miles) southwest of Tunis.
She wakes up every morning with one obsession: finding water. She walks to fetch water at the village's last spring.
Today she went with her cousin Djamila. Both women lead a donkey, with two jerry cans tied to it, and cautiously descend a stony hill towards the last local source of water in the village.
tunisia is the 33rd most water-stressed country according to the World Resources Institute.
The north African nation is in its fourth year of drought and inhabitants of rural communities are grappling with the nation's worst water scarcity in years.`}</Text>
     
      <Text
        style={[styles.mazhoudiFeelsAbandonned, styles.donateTypo]}
      >{`Mazhoudi feels abandonned by authorities: "We are the living [who are] dead, forgotten by everyone."
"We have no roads or water, no help or decent housing. We own nothing. Are we Tunisians? No, because here we are not considered as such, Why? Because we lack a lot of things."
`}</Text>
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
        Tunisians Satisfied With Water Quality?
      </Text>
      <Image
        style={styles.captureDcran20240227113}
        contentFit="cover"
        source={require("../assets/Capture d’écran.png")}
      />
      <Text
        style={[styles.theSouthernRegion, styles.donateTypo]}
      >{`The southern region of Tunisia offers a stark illustration of the country’s water crisis. Here, only 7% were satisfied with their water quality -- the lowest total anywhere in the world -- in 2022. This is a rapid drop from 2015, when roughly half (48%) of Tunisians in the south were satisfied with their water.

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
    top: 1050,
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

export default Frame;