Home
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const HomeRE = () => {
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

          // source={require("../assets/profile-circle.webp")}

        />
      </Pressable>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
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
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/111.jpg")}
      />
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={[styles.dropIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Rectangle.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.homePosition]}
        onPress={() => navigation.navigate("Details")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/profile-circle.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeItem, styles.homeItemPosition]}
        contentFit="cover"
        source={require("../assets/Frame 495.png")}
      />
      <Text style={[styles.somePhotos, styles.somePhotosTypo]}>
        Some Photos :
      </Text>
      <Text style={[styles.categories, styles.somePhotosTypo]}>
        Categories :
      </Text>
      <View
        style={[
          styles.jeuneMereEnfantsRemplitBidParent,
          styles.homeItemPosition,
        ]}
      >
        <Image
          style={[styles.jeuneMereEnfantsRemplitBidIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/jeune-mere-enfants-remplit-bidons-eau-potable-tunisie 1.png")}
        />
        <Image
          style={[styles.fediMejriTunisiaWarmMeUpIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/Fedi-Mejri-Tunisia-Warm-Me-Up-project-1 1.png")}
        />
        <Image
          style={[styles.tunisiaCovidStation7671Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/tunisia-covid-station-767 1 (1).png")}
        />
        <Image
          style={[styles.demt1Icon, styles.demt1IconPosition]}
          contentFit="cover"
          source={require("../assets/DEMT 1.png")}
        />
      </View>
      <Image
        style={styles.jpgRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/jpg-removebg-preview 1.png")}
      />
      <Text style={[styles.povertyRatesIn, styles.somePhotosTypo]}>
        Poverty rates in Tunisia :
      </Text>
      <Image
        style={[styles.homeInner, styles.demt1IconPosition]}
        contentFit="cover"
        source={require("../assets/Rect.png")}
      />
      <Pressable
        style={[styles.vuesaxbrokenmessageText, styles.houseIconLayout]}
        onPress={() => navigation.navigate("ChannelList")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drop.png")}
        />
      </Pressable>
      <Image
        style={[styles.houseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/house.png")}
      />
      <Pressable
        style={[styles.vuesaxboldchart, styles.houseIconLayout]}
        onPress={() => navigation.navigate("LeaderBoard")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/message-text.png")}
        />
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  menuIconPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  homeItemPosition: {
    left: 15,
    position: "absolute",
  },
  somePhotosTypo: {
    height: 19,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout2: {
    width: 47,
    position: "absolute",
  },
  iconLayout1: {
    width: 159,
    height: 159,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  demt1IconPosition: {
    left: 0,
    position: "absolute",
  },
  houseIconLayout: {
    height: "2.94%",
    width: "10.75%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  helloJohnDoe: {
    marginLeft: -95,
    bottom: 1291,
    width: 152,
    height: 17,
  },
  menuIcon: {
    marginLeft: -169,
    bottom: 1290,
    width: 27,
    height: 30,
    overflow: "hidden",
  },
  homeChild: {
    marginLeft: -171,
    bottom: 1110,
    width: 330,
    height: 160,
  },
  icon: {
    marginLeft: 102,
  },
  profileCircle: {
    bottom: 1274,
    width: 60,
    height: 60,
  },
  homeItem: {
    top: 279,
    width: 356,
    height: 64,
  },
  somePhotos: {
    top: 373,
    width: 164,
    left: 16,
    height: 19,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  categories: {
    top: 251,
    width: 164,
    left: 16,
    height: 19,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  jeuneMereEnfantsRemplitBidIcon: {
    left: 580,
    width: 294,
  },
  fediMejriTunisiaWarmMeUpIcon: {
    left: 380,
    width: 169,
  },
  tunisiaCovidStation7671Icon: {
    top: 372,
    left: 190,
    position: "absolute",
  },
  demt1Icon: {
    width: 159,
    height: 159,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  jeuneMereEnfantsRemplitBidParent: {
    top: 401,
    width: 1505,
    height: 160,
  },
  jpgRemovebgPreview1Icon: {
    top: 599,
    left: -11,
    width: 375,
    height: 643,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1132,
    left: 0,
    width: 470,
    height: 238,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vuesaxbrokenmessageText: {
    left: "75.81%",
    top: "95.37%",
    right: "13.44%",
    bottom: "1.69%",
  },
  houseIcon: {
    top: "95.15%",
    right: "45.7%",
    bottom: "1.91%",
    left: "43.55%",
    height: "2.94%",
    width: "10.75%",
    position: "absolute",
  },
  vuesaxboldchart: {
    left: "10.75%",
    top: "95.29%",
    right: "78.49%",
    bottom: "1.76%",
  },
  homeRe: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    height: 1360,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeRE
