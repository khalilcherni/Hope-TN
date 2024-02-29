Home
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

          // source={require("../assets/poor1.jpg")}

<<<<<<< HEAD
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

        
=======
          source={require("../assets/profile-circle.webp")}
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea

        />
      </Pressable>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
      <Image
        style={styles.menuIcon}
        style={styles.menuIcon}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/111.jpg")}
=======

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/menu.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/menu.png")}
=======
        source={require("../assets/poor1.jpg")}
      />
      <Text style={[styles.categories, styles.categoriesTypo]}>
        Categories:
      </Text>
      <Image
        style={[styles.homeReItem, styles.homePosition]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/Ellipse.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Image
        style={[styles.dropIcon, styles.iconPosition]}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/Rectangle.png")}
=======

        // source={require("../assets/poor1.jpg")
        source={require("../assets/drop.webp")}
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Pressable
        style={[styles.wrapper, styles.homePosition]}
        onPress={() => navigation.navigate("Details")}
      >
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
<<<<<<< HEAD
          source={require("../assets/profile-circle.png")}
=======

          // source={require("../assets/poor1.jpg")}

          source={require("../assets/Ellipse.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
        />
      </Pressable>
      <Image
        style={[styles.homeItem, styles.homeItemPosition]}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/Frame 495.png")}
      />
      <Text style={[styles.somePhotos, styles.somePhotosTypo]}>
        Some Photos :
=======

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/dollar-circle.webp")}

      />
      <Image
        style={[styles.homeReInner, styles.homePosition]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/Ellipse.webp")}

      />
      <Image
        style={[styles.downloadRemovebgPreview1Icon, styles.iconLayout2]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/4.webp")}

      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/Ellipse.webp")}

      />
      <Image
        style={[styles.depositphotos105691240StockIcon, styles.iconLayout2]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/3.webp")}

      />
      <Image
        style={[styles.homeReChild1, styles.homePosition]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/Ellipse.webp")}

      />
      <Image style={styles.seniorCitizenLogoPngSeniorIcon} contentFit="cover" />
      <Text style={[styles.ourWork, styles.welcomeTypo]}>Our Work :</Text>
      <Image
        style={[styles.demt1Icon, styles.iconLayout1]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/DEMT_1.webp")}

      />
      <Image
        style={[styles.tunisiaCovidStation7671Icon, styles.iconLayout1]}
        contentFit="cover"

        // source={require("../assets/poor1.jpg")}
        source={require("../assets/covid.jpg")}

      />
      <Text style={[styles.povertyInTunisia, styles.categoriesTypo]}>
        Poverty in Tunisia :
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
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
<<<<<<< HEAD
        source={require("../assets/jpg-removebg-preview 1.png")}
=======

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/remove.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Text style={[styles.povertyRatesIn, styles.somePhotosTypo]}>
        Poverty rates in Tunisia :
      </Text>
      <Image
        style={[styles.homeInner, styles.demt1IconPosition]}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/Rect.png")}
=======

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/Rect.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Pressable
        style={[styles.vuesaxbrokenmessageText, styles.houseIconLayout]}
        onPress={() => navigation.navigate("ChannelList")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
<<<<<<< HEAD
          source={require("../assets/drop.png")}
=======

          // source={require("../assets/poor1.jpg")}

          source={require("../assets/message-text.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
        />
      </Pressable>
      <Image
        style={[styles.houseIcon, styles.iconLayout]}
        contentFit="cover"
<<<<<<< HEAD
        source={require("../assets/house.png")}
=======

        // source={require("../assets/poor1.jpg")}

        source={require("../assets/house.webp")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
      />
      <Pressable
        style={[styles.vuesaxboldchart, styles.houseIconLayout]}
        onPress={() => navigation.navigate("LeaderBoard")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
<<<<<<< HEAD
          source={require("../assets/message-text.png")}
=======

          // source={require("../assets/poor1.jpg")}

          // source={require("../assets/chart.png")}

>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
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

<<<<<<< HEAD
export default HomeRE
=======
export default Home
>>>>>>> 74ceca7558c11c5cb80ae555362d4f92cf5bdfea
