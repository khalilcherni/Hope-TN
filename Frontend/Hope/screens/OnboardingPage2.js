import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OnboardingPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingPage2}>
      <Image
        style={[styles.charityWork1080x6751Icon, styles.charityIconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.charityWork1Icon, styles.charityIconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.theHalle101Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={styles.weCanHelp}>We Can Help Those In Need</Text>
      <Text style={[styles.whenWeGive, styles.whenWeGiveLayout]}>
        when we give cheerfully and accept gratefully, everyone is blessed
      </Text>
      <Pressable
        style={styles.onboardingPage2Inner}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={styles.getPosition}>
          <View style={styles.getPosition}>
            <View style={[styles.getStartedButtonChild, styles.getPosition]} />
            <Text style={[styles.getStarted, styles.getStartedLayout]}>
              Get Started
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  charityIconLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  whenWeGiveLayout: {
    height: 40,
    lineHeight: 17,
    textAlign: "center",
    // fontFamily: FontFamily.kalamRegular,
    position: "absolute",
  },
  getPosition: {
    left: 8,
    top: 0,
    height: 50,
    width: 272,
    position: "absolute",
  },
  charityWork1080x6751Icon: {
    top: 25,
    left: 11,
    width: 206,
    height: 172,
  },
  charityWork1Icon: {
    top: 215,
    left: 175,
    width: 190,
    height: 151,
  },
  theHalle101Icon: {
    top: 54,
    left: 233,
    width: 110,
    height: 114,
  },
  icon: {
    top: 234,
    left: 22,
    width: 118,
    height: 113,
  },
  weCanHelp: {
    top: 435,    
    left: 50,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    lineHeight: 34,
    width: 300,
    height: 75,
    textAlign: "center",
    color: Color.lightBlack,
    // fontFamily: FontFamily.kalamRegular,
    position: "absolute",
  },
  whenWeGive: {
    top: 556,
    fontSize: FontSize.size_mini,
    width: 272,
    left: 60,
    height: 40,
    lineHeight:20,
    fontWeight:'700',
    color: Color.lightBlack,
  },
  getStartedButtonChild: {
    borderRadius: 15,
    backgroundColor: Color.colorDarkcyan,
  },
  getStartedLayout:{
    height: 30,
    lineHeight: 22,
    textAlign: "center",
    // fontFamily: FontFamily.kalamRegular,
    position: "absolute",

  },
  getStarted: {
    top: 19,
    left: 65,
    fontSize: FontSize.size_3xl_5,
    color: Color.lightWhite,
    width: 150,
    height: 30,
    lineHeight: 30,
  },
  onboardingPage2Inner: {
    top: 679,
    height: 70,
    width: 272,
    left: 44,
    position: "absolute",
  },
  onboardingPage2: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default OnboardingPage2;