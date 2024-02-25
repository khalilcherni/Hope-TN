import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Details = () => {
  return (
    <View style={[styles.details, styles.detailsLayout]}>
      <Image
        style={[styles.detailsChild, styles.detailsChildPosition]}
        contentFit="cover"
        source={require("../assets/poor13.jpg")}
      />
      <Image
        style={[styles.signOutCircleDuotoneIcon, styles.detailsChildPosition]}
        contentFit="cover"
        source={require("../assets/poor13.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsLayout: {
    height: 812,
    width: 375,
  },
  detailsChildPosition: {
    left: 0,
    position: "absolute",
  },
  detailsChild: {
    top: -22,
    height: 812,
    width: 375,
  },
  signOutCircleDuotoneIcon: {
    top: 765,
    width: 50,
    height: 50,
  },
  details: {
    backgroundColor: Color.lightWhite,
    overflow: "hidden",
  },
});

export default Details;