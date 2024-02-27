import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View  style={styles.homeRe}>
      <Pressable
        style={[styles.profileCircle, styles.ellipseIconLayout]}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </Pressable>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={styles.homeReChild}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.categories, styles.categoriesTypo]}>
        Categories:
      </Text>
      <Image
        style={[styles.homeReItem, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.dropIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Pressable
        style={[styles.wrapper, styles.homePosition]}
        onPress={() => navigation.navigate("Details")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </Pressable>
      <Image
        style={[styles.dollarCircleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.homeReInner, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.downloadRemovebgPreview1Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.depositphotos105691240StockIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.homeReChild1, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image style={styles.seniorCitizenLogoPngSeniorIcon} contentFit="cover" />
      <Text style={[styles.ourWork, styles.welcomeTypo]}>Our Work :</Text>
      <Image
        style={[styles.demt1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={[styles.tunisiaCovidStation7671Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.povertyInTunisia, styles.categoriesTypo]}>
        Poverty in Tunisia :
      </Text>
      <Image
        style={styles.jpgRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Pressable
        style={[styles.vuesaxbrokenmessageText, styles.houseIconLayout]}
        onPress={() => navigation.navigate("ChannelList")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </Pressable>
      <Image
        style={[styles.houseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poor1.jpg")}
      />
      <Pressable
        style={[styles.vuesaxboldchart, styles.houseIconLayout]}
        onPress={() => navigation.navigate("LeaderBoard")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/poor1.jpg")}
        />
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ellipseIconLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  welcomeTypo: {
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalam,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  categoriesTypo: {
    left: 9,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalam,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homePosition: {
    top: 270,
    height: 60,
    width: 60,
    position: "absolute",
  },
  iconPosition: {
    top: 288,
    position: "absolute",
  },
  iconLayout2: {
    width: 47,
    position: "absolute",
  },
  iconLayout1: {
    height: 159,
    width: 159,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  houseIconLayout: {
    height: "2.92%",
    width: "11.94%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 122,
  },
  profileCircle: {
    bottom: 1310,
    left: "50%",
  },
  welcome: {
    top: 9,
    left: 140,
    width: 181,
    height: 22,
  },
  menuIcon: {
    marginLeft: -174,
    bottom: 1331,
    width: 27,
    height: 30,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  homeReChild: {
    marginLeft: -165,
    bottom: 1146,
    width: 330,
    height: 160,
    left: "50%",
    position: "absolute",
  },
  categories: {
    top: 237,
    width: 155,
    height: 25,
  },
  homeReItem: {
    left: 6,
  },
  dropIcon: {
    left: 24,
    width: 25,
    height: 25,
  },
  wrapper: {
    left: 73,
  },
  dollarCircleIcon: {
    left: 91,
    width: 24,
    height: 24,
  },
  homeReInner: {
    left: 143,
  },
  downloadRemovebgPreview1Icon: {
    top: 282,
    left: 149,
    height: 36,
  },
  ellipseIcon: {
    top: 267,
    left: 207,
  },
  depositphotos105691240StockIcon: {
    top: 265,
    left: 213,
    height: 64,
  },
  homeReChild1: {
    left: 279,
  },
  seniorCitizenLogoPngSeniorIcon: {
    top: 283,
    left: 287,
    width: 43,
    height: 33,
    position: "absolute",
  },
  ourWork: {
    top: 345,
    left: 12,
    width: 128,
    height: 25,
  },
  demt1Icon: {
    top: 370,
    left: 7,
  },
  tunisiaCovidStation7671Icon: {
    top: 372,
    left: 190,
  },
  povertyInTunisia: {
    top: 542,
    width: 194,
    height: 23,
  },
  jpgRemovebgPreview1Icon: {
    top: 586,
    left: -15,
    width: 375,
    height: 569,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1132,
    left: 0,
    width: 470,
    height: 238,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vuesaxbrokenmessageText: {
    left: "86.11%",
    top: "95.99%",
    right: "1.94%",
    bottom: "1.09%",
  },
  houseIcon: {
    top: "95.77%",
    right: "43.61%",
    bottom: "1.31%",
    left: "44.44%",
    height: "2.92%",
    width: "11.94%",
    position: "absolute",
  },
  vuesaxboldchart: {
    left: "2.78%",
    top: "96.06%",
    right: "85.28%",
    bottom: "1.02%",
  },
  homeRe: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    height: 1370,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home