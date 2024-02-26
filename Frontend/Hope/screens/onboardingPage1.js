import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const OnboardingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingPage1}>
      <Image
        style={[styles.poor91Icon, styles.iconLayout3]}
        contentFit="cover"
        // source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.poor111Icon, styles.iconLayout2]}
        contentFit="cover"
        // source={require("../assets/poor2.jpg")}
      />
      <Image
        style={[styles.poor121Icon, styles.iconLayout4]}
        contentFit="cover"
        // source={require("../assets/poor3.jpg")}
      />
      <Image
        style={[styles.poor101Icon, styles.iconLayout1]}
        contentFit="cover"
        // source={require("../assets/poor11.jpg")}
      />
      <Image
        style={[styles.poor31Icon, styles.iconLayout]}
        contentFit="cover"
        // source={require("../assets/poor10.jpg")}
      />
      <Image
        style={[styles.poor21Icon, styles.iconLayout1]}
        contentFit="cover"
        // source={require("../assets/poor13.jpg")}
      />
      <Image
        style={[styles.poor11Icon, styles.iconLayout]}
        contentFit="cover"
        // source={require("../assets/aaa.jpg")}
      />
      <Image
        style={[styles.poo3131Icon, styles.iconLayout2]}
        contentFit="cover"
        // source={require("../assets/aaa.jpg")}
      />
      <Text style={styles.letsHelpEach}>Let’s help each others</Text>
      <Text style={[styles.whenWeGive, styles.whenWeGiveTypo]}>
        when we give cheerfully and accept gratefully, everyone is blessed
      </Text>
      <Pressable
        style={styles.nextButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          // source={require("../assets/aaa.jpg")}
        />
      </Pressable>
      {/* <Text style={[styles.httpswwwfigcomponentscom, styles.whenWeGiveTypo]}>
        next
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    height: 157,
    top: 38,
  },
  iconLayout2: {
    height: 152,
    top: 243,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout4: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout1: {
    width: 96,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout: {
    height: 148,
    top: 85,
    width: 107,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  whenWeGiveTypo: {
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    color: Color.lightBlack,
    position: "absolute",
  },
  poor91Icon: {
    left: 301,
    width: 110,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  poor111Icon: {
    left: 183,
    width: 107,
    height: 152,
    top: 243,
  },
  poor121Icon: {
    left: 300,
    width: 106,
    height: 173,
    top: 205,
  },
  poor101Icon: {
    left: 77,
    height: 159,
    top: 205,
  },
  poor31Icon: {
    left: -39,
  },
  poor21Icon: {
    left: 78,
    height: 157,
    top: 38,
  },
  poor11Icon: {
    left: 184,
  },
  poo3131Icon: {
    left: -37,
    width: 105,
    height: 152,
    top: 243,
  },
  letsHelpEach: {
    top: 443,
    left: 60,
    fontSize:30,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.kalamRegular,
    width: 273,
    height: 34,
    textAlign: "center",
    color: Color.lightBlack,
    position: "absolute",
  },
  whenWeGive: {
    top: 580,
    left: 60,
    width: 272,
    height: 20,
    fontFamily: 'Kalam', // Set your desired font family
    fontSize: 16,
    lineHeight: 30,
    fontWeight: 'regular', // Assuming regular is a valid font weight value
  },
  
  icon: {
    height: "50%",
    width: "50%",
  },
  nextButton: {
    backgroundColor: '#209FA6',
    height: 75,
    width: 74,
    borderRadius: 37, // Half of the width to make it a circle
    position: 'absolute',
    top: 700,
    left: 155,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  httpswwwfigcomponentscom: {
    top: -82,
    left: -141,
    textDecoration: "underline",
    width: 432,
    height: 131,
    display: "none",
  },
  onboardingPage1: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OnboardingPage;