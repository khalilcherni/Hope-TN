import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
      <View style={styles.backWrapper}>
        <Text style={[styles.back, styles.backTypo]}>{`back
`}</Text>
      </View>
      <View style={styles.androidLarge3Child} />
      <Text style={styles.payment}>{`payment
`}</Text>
      <Text style={[styles.text, styles.textTypo]}>123</Text>
      <Text style={styles.text1}>{`4/24
`}</Text>
      <Text style={[styles.text2, styles.textTypo]}>156-633-15899</Text>
      <Image
        style={styles.mastercardLogo1Icon}
        contentFit="cover"
        source={require("../assets/Mastercard_logo 1.png")}
      />
      <Image
        style={[styles.editFillIcon, styles.fillIconLayout]}
        contentFit="cover"
        source={require("../assets/edit-fill.png")}
      />
      <View style={[styles.androidLarge3Item, styles.androidLayout]} />
      <View style={[styles.androidLarge3Inner, styles.androidLayout]} />
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <View style={[styles.androidLarge3Child1, styles.androidChildLayout]} />
      <View style={[styles.androidLarge3Child2, styles.androidChildLayout]} />
      <View style={[styles.androidLarge3Child3, styles.androidLayout]} />
      <Text style={[styles.paymentMethod, styles.backTypo]}>
        Payment method
      </Text>
      <View style={styles.androidLarge3Child4} />
      <Text style={[styles.donateNow, styles.backTypo]}>{`Donate Now
`}</Text>
      <Pressable
        style={styles.signOutCircleDuotone}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/Sign_out_circle_duotone.jpg")}
        />
      </Pressable>
      <Image
        style={[styles.creditCardFillIcon, styles.fillIconLayout]}
        contentFit="cover"
        source={require("../assets/credit-card-fil.png")}
      />
      <Text style={[styles.cardNumber, styles.backTypo]}>{`card number `}</Text>
      <Text style={[styles.firstAndLast, styles.backTypo]}>
        first and last name on the card
      </Text>
      <Text style={[styles.email, styles.backTypo]}>email</Text>
      <Text style={[styles.mmyy, styles.mmyyTypo]}>MM/YY</Text>
      <Text style={[styles.cvv2, styles.mmyyTypo]}>CVV2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    position: "absolute",
  },
  textTypo: {
    height: 17,
    top: 114,
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    position: "absolute",
  },
  fillIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  androidLayout: {
    height: 43,
    width: 292,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  androidChildLayout: {
    width: 112,
    top: 468,
    height: 43,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  mmyyTypo: {
    top: 478,
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    position: "absolute",
  },
  back: {
    left: 2,
    width: 89,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    top: 0,
    height: 20,
  },
  backWrapper: {
    top: 13,
    width: 79,
    height: 20,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge3Child: {
    left: 7,
    width: 341,
    height: 107,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xl,
    top: 58,
    position: "absolute",
  },
  payment: {
    width: 100,
    height: 13,
    top: 58,
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    left: 24,
    position: "absolute",
  },
  text: {
    left: 277,
    width: 47,
  },
  text1: {
    left: 201,
    width: 64,
    height: 14,
    top: 114,
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    position: "absolute",
  },
  text2: {
    left: 64,
    width: 129,
  },
  mastercardLogo1Icon: {
    top: 107,
    left: 11,
    width: 53,
    height: 41,
    position: "absolute",
  },
  editFillIcon: {
    top: 71,
    left: 304,
  },
  androidLarge3Item: {
    top: 204,
    left: 32,
  },
  androidLarge3Inner: {
    top: 270,
    left: 38,
  },
  rectangleView: {
    top: 399,
    left: 30,
  },
  androidLarge3Child1: {
    left: 32,
  },
  androidLarge3Child2: {
    left: 204,
  },
  androidLarge3Child3: {
    top: 335,
    left: 34,
  },
  paymentMethod: {
    top: 342,
    left: 37,
    width: 140,
    height: 15,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  androidLarge3Child4: {
    top: 601,
    left: 54,
    backgroundColor: Color.colorDarkcyan,
    width: 249,
    height: 60,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  donateNow: {
    top: 618,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.lightWhite,
    width: 168,
    height: 26,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  signOutCircleDuotone: {
    left: 0,
    width: 54,
    height: 50,
    top: 0,
    position: "absolute",
  },
  creditCardFillIcon: {
    top: 61,
    left: 108,
  },
  cardNumber: {
    top: 407,
    width: 119,
    height: 21,
    left: 32,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  firstAndLast: {
    top: 213,
    left: 55,
    width: 241,
    height: 59,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  email: {
    top: 280,
    left: -14,
    width: 191,
    height: 25,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  mmyy: {
    left: 45,
    width: 87,
    height: 22,
  },
  cvv2: {
    left: 221,
    width: 75,
    height: 25,
  },
  androidLarge3: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Payment;