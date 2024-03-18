import * as React from "react";
import { Text, StyleSheet, View,ScrollView,Pressable} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 
import { WebView } from 'react-native-webview';
const Gaza = () => {
  // const videoUrl='https://www.youtube.com/watch?v=PeuNRaNGQr8'
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.israelsWarAgainstGazasCParent}>
      <Text style={styles.israelsWarAgainst}>
        Israel’s ‘war against Gaza’s children’ explained
      </Text>
      <Text
        style={[styles.oneChildIs, styles.oneChildIsTypo]}
      >{`One child is killed every 15 minutes in the Israeli bombings of Gaza, according to a Palestinian NGO, highlighting the toll the current war has exacted on children.
More than 100 children have been killed every day since Israel started bombing the besieged Palestinian enclave on October 7 in the wake of the deadly Hamas attack. More than 3,400 Palestinians have been killed in the deadliest Israeli assault in decades.`}</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/aaa.jpg")}
      />
      <Text
        style={[styles.gazaChildrenDizzy, styles.donateTypo]}
      >{`Gaza children dizzy from hunger `}</Text>
      <View style={styles.imageContainer}>
  <Image
    style={[styles.palestine21Icon, styles.iconLayout]}
    contentFit="cover"
    source={require("../assets/aaa.jpg")}
  />
  <Image
    style={[styles.palestine31Icon, styles.iconLayout]}
    contentFit="cover"
    source={require("../assets/aaa.jpg")}
  />
  <Image
    style={[styles.palestine41Icon, styles.iconPosition]}
    contentFit="cover"
    source={require("../assets/aaa.jpg")}
  />
  <Image
    style={[styles.palestine51Icon, styles.iconPosition]}
    contentFit="cover"
    source={require("../assets/aaa.jpg")}
  />
</View>
      <Text
        style={[styles.hungerHasBecome, styles.oneChildIsTypo]}
      >{`Hunger has become the most pressing of the myriad problems facing hundreds of thousands of displaced Gaza Palestinians, with aid trucks able to bring in only a small fraction of what is needed, and distribution uneven due to the chaos of war.
Some trucks have been stopped and looted by people desperate for food, while swathes of the devastated territory are beyond their reach because access roads are active battlegrounds.`}</Text>
  {/* <WebView
        source={{ uri: videoUrl }}
        allowsFullscreenVideo
        style={[ styles.d7unHighres17024256661Icon ]}
      /> */}
     
      <Text style={[styles.healthFacilitiesNeed, styles.donateTypo1]}>{`
“Health facilities need this equipment because of the many injured patients,” said Ayman Al-Djaroucha, MSF deputy coordinator in Gaza. “Hospitals are overcrowded with injured people, there is a shortage of drugs and consumables and a shortage of fuel for generators.”
One challenge medical staff face in Gaza at the moment is the lack of a safe option to move patients to health facilities. “Ambulances can’t be used right now because they’re being hit by airstrikes,” said Darwin Diaz, medical coordinator for MSF in Gaza.`}</Text>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/aaa.jpg")}
      />
      <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate("donation")}
        >
          <Text style={styles.donate}>Donate</Text>
        </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  oneChildIsTypo: {
    width: 370,
    left: 15,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    height:200
  },
  imageContainer:{
    top:60,
    left:35,
    width:220,
    borderRadius:5
  },
  donateTypo: {
    fontSize: 25,
    position: "absolute",
  },
  iconLayout: {
    height: 98,
    borderRadius: Border.br_9xs,
    top: 568,
    position: "absolute",
  },
  iconPosition: {
    top: 684,
    height: 98,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  donateTypo1: {
   
    textAlign: "left",
  },
  nextButton: {
    borderRadius: 15,
    backgroundColor: Color.colorDarkcyan,
    top: 1560,
    height: 70,
    width: 272,
    left: 74,
    position: "absolute",
  },
  israelsWarAgainst: {
    top: 84,
    fontWeight: "700",
    fontSize: 25,
    width: 390,
    height: 121,
    textAlign: "left",
    color: Color.colorBlack,
    // fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    left: 40,
    position: "absolute",
  },
  oneChildIs: {
    top: 163,
  },
  image1Icon: {
    top: 350,
    borderRadius: 4,
    width: 353,
    height: 148,
    left: 29,
    position: "absolute",
  },
  gazaChildrenDizzy: {
    top: 530,
    left: 61,
    fontWeight: "700",
    textAlign: "center",
    width: 291,
    height: 73,
    color: Color.colorBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: 20,
  },
  d7unHighres17024256661Icon: {
    top: 1090,
    borderRadius: 14,
    width: 370,
    height: 390,
    left: 20,
    position: "absolute",
  },
  palestine21Icon: {
    left: 180,
    width: 144,
  },
  palestine31Icon: {
    left: 17,
    width: 144,
  },
  palestine41Icon: {
    left: 177,
    width: 144,
  },
  palestine51Icon: {
    left: 21,
    width: 144,
  },
  hungerHasBecome: {
    top: 880,
    height: 50,
  },
 
  healthFacilitiesNeed: {
    top: 1280,
    left: 18,
    width: 380,
    height: 268,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    top: 1090,
    left: 10,
    borderRadius:3,
    width: 390,
    height: 180,
    position: "absolute",
  },
  donate: {
    top: 15,
    left: 92,
    fontSize: 25,
    color:'white',
    width: 186,
    height: 33,
  },
  israelsWarAgainstGazasCParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1732,
    overflow: "hidden",
  },
});

export default Gaza;