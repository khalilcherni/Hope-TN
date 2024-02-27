import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge4}>
      <View style={[styles.androidLarge4Child, styles.childLayout]} />
      <View style={[styles.androidLarge4Item, styles.childLayout]} />
      <View style={[styles.androidLarge4Inner, styles.childLayout]} />
      <View style={[styles.rectangleView, styles.childLayout]} />
      <View style={styles.orWrapper}>
        <Text style={[styles.or, styles.orTypo]}>or</Text>
      </View>
      <View style={styles.androidLarge4Child1} />
      <Text style={styles.donate}>Donate</Text>
      <Text style={[styles.tnd, styles.tndTypo]}>50 Tnd</Text>
      <Text style={[styles.tnd1, styles.tndTypo]}>80 Tnd</Text>
      <Text style={[styles.tnd2, styles.tndTypo]}>100 Tnd</Text>
      <Text style={[styles.tnd3, styles.tndTypo]}>120 Tnd</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.enterHere, styles.enterHereLayout]}>
          enter here
        </Text>
      </Pressable>
      <Text style={[styles.donation, styles.orTypo]}>donation</Text>
      {/* <Image
        style={[styles.signOutCircleDuotoneIcon, styles.enterHereLayout]}
        contentFit="cover"
        source={require("../assets/sign-out-circle-duotone.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 47,
    width: 253,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  orTypo: {
    textAlign: "left",
    fontSize: FontSize.size_16xl,
    position: "absolute",
  },
  tndTypo: {
    height: 21,
    width: 125,
    fontSize: FontSize.size_xl,
    left: 154,
    color: Color.lightWhite,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansRegular,
    position: "absolute",
  },
  enterHereLayout: {
    height: 50,
    position: "absolute",
  },
  androidLarge4Child: {
    top: 83,
    left: 54,
    height: 47,
  },
  androidLarge4Item: {
    top: 167,
    left: 54,
    height: 47,
  },
  androidLarge4Inner: {
    top: 258,
    left: 54,
    height: 47,
  },
  rectangleView: {
    top: 349,
    left: 54,
    height: 47,
  },
  or: {
    top: 2,
    left: 45,
    color: Color.colorDodgerblue,
    height: 22,
    width: 50,
    fontFamily: FontFamily.inriaSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_16xl,
  },
  orWrapper: {
    top: 415,
    left: 130,
    width: 140,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge4Child1: {
    top: 609,
    left: 56,
    width: 249,
    height: 60,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  donate: {
    top: 627,
    left: 138,
    width: 157,
    height: 23,
    color: Color.lightWhite,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansRegular,
    position: "absolute",
  },
  tnd: {
    top: 96,
  },
  tnd1: {
    top: 177,
  },
  tnd2: {
    top: 271,
  },
  tnd3: {
    top: 361,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  enterHere: {
    top: 8,
    left: 76,
    color: Color.colorGainsboro_100,
    width: 177,
    fontSize: FontSize.size_6xl,
    height: 50,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansRegular,
  },
  rectangleParent: {
    top: 479,
    height: 58,
    width: 253,
    left: 54,
    position: "absolute",
  },
  donation: {
    top: 9,
    left: 121,
    fontFamily: FontFamily.kalamRegular,
    color: Color.lightBlack,
    width: 159,
    height: 28,
    textAlign: "left",
    fontSize: FontSize.size_16xl,
  },
  signOutCircleDuotoneIcon: {
    top: 750,
    left: 0,
    width: 50,
  },
  androidLarge4: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge2;