import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <View style={[styles.settingChild, styles.settingLayout]} />
      <View style={[styles.settingItem, styles.settingLayout]} />
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
        //   source={require("../assets/time--light.png")}
        />
      </View>
      <Image
        style={styles.unsplashjmurdhtm7ngIcon}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Pressable
        style={[styles.arrowLeft, styles.notchIconLayout]}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </Pressable>
      <Image
        style={[styles.bellIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.favorites, styles.eventsFlexBox]}>Favorites</Text>
      <Text style={[styles.preferences, styles.eventsTypo]}>Preferences</Text>
      <Text style={[styles.favourite, styles.favouritePosition]}>
        Favourite
      </Text>
      <Text style={[styles.darkmode, styles.eventsFlexBox]}>Darkmode</Text>
      <View style={[styles.rectangle36Copy5Parent, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          // style={styles.rightIcon}
          // contentFit="cover"
          // source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Group, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Container, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </View>
      <Pressable
        style={[styles.settingInner, styles.settingInnerLayout]}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Text style={[styles.editProfile, styles.profileClr]}>Edit Profile</Text>
      </Pressable>
      <Image
        style={[styles.umoonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.heartIcon, styles.favouritePosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.profile, styles.profileClr]}>Profile</Text>
      <View style={[styles.rectangleView, styles.settingLayout]} />
      <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      <Image
        style={[styles.editDuotoneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.editProfile1, styles.settingInnerLayout]}>
        Edit Profile
      </Text>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
  settingLayout: {
    width: 390,
    position: "absolute",
  },
  notchIconLayout: {
    height: 30,
    position: "absolute",
  },
  iconLayout1: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  eventsFlexBox: {
    textAlign: "left",
    color: Color.lightBlack,
  },
  eventsTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  favouritePosition: {
    top: 319,
    position: "absolute",
  },
  groupLayout: {
    opacity: 0.65,
    width: 14,
    height: 14,
    position: "absolute",
  },
  settingInnerLayout: {
    width: 105,
    position: "absolute",
  },
  profileClr: {
    color: Color.lightWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  settingChild: {
    backgroundColor: Color.colorDarkcyan,
    height: 188,
    left: 0,
    top: 0,
  },
  settingItem: {
    top: 361,
    left: -23,
    backgroundColor: "#f6f6f6",
    height: 29,
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  statusBar: {
    right: 4,
    left: -15,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  unsplashjmurdhtm7ngIcon: {
    top: 99,
    left: 119,
    width: 122,
    height: 122,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft: {
    left: 24,
    width: 26,
    top: 50,
  },
  bellIcon: {
    top: 58,
    left: 319,
    height: 19,
    position: "absolute",
  },
  favorites: {
    top: 464,
    left: 60,
    display: "none",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  preferences: {
    top: 366,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    left: 17,
    textAlign: "left",
    color: Color.lightBlack,
    position: "absolute",
  },
  favourite: {
    left: 33,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  darkmode: {
    top: 433,
    left: 45,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangle36Copy5: {
    width: 14,
    height: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rightIcon: {
    top: 2,
    left: 4,
    width: 7,
    height: 10,
    position: "absolute",
  },
  rectangle36Copy5Parent: {
    top: 411,
    left: 338,
    opacity: 0.65,
  },
  rectangle36Copy5Group: {
    top: 324,
    left: 338,
    opacity: 0.65,
  },
  rectangle36Copy5Container: {
    top: 442,
    left: 339,
  },
  settingInner: {
    top: 225,
    left: 128,
    borderRadius: 5,
    backgroundColor: Color.colorGray_200,
    height: 29,
  },
  editProfile: {
    top: 230,
    left: 150,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  umoonIcon: {
    top: 428,
    left: 17,
    overflow: "hidden",
  },
  heartIcon: {
    left: 7,
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  profile: {
    left: 158,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    top: 50,
  },
  rectangleView: {
    top: 266,
    backgroundColor: Color.colorGainsboro_100,
    height: 32,
    left: 0,
  },
  events: {
    top: 271,
    left: 19,
    width: 88,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    textAlign: "left",
    color: Color.lightBlack,
    height: 19,
    position: "absolute",
  },
  editDuotoneIcon: {
    top: 468,
    left: 13,
  },
  editProfile1: {
    top: 470,
    left: 40,
    height: 17,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  groupView: {
    top: 472,
    left: 341,
  },
});

export default Setting;