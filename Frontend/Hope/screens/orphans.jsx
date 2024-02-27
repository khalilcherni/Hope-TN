import * as React from "react";
    import {Image} from "expo-image";
import {StyleSheet, Text, View} from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
    
const Frame = () => {

  return (
    <View style={styles.vectorParent}>
      <Image style={styles.frameChild} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Image style={styles.needwater21Icon} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Image style={[styles.needwater22Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Image style={styles.needwater31Icon} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Text style={[styles.yearOldOunissaMazhoud, styles.donateTypo]}>{`57-year-old Ounissa Mazhoud lives in Tunisia's remote village of Ouled Omar, 180 kilometers (110 miles) southwest of Tunis.
She wakes up every morning with one obsession: finding water. She walks to fetch water at the village's last spring.
Today she went with her cousin Djamila. Both women lead a donkey, with two jerry cans tied to it, and cautiously descend a stony hill towards the last local source of water in the village.
tunisia is the 33rd most water-stressed country according to the World Resources Institute.
The north African nation is in its fourth year of drought and inhabitants of rural communities are grappling with the nation's worst water scarcity in years.`}</Text>
      <Image style={styles.needwater1Icon} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Text style={[styles.mazhoudiFeelsAbandonned, styles.donateTypo]}>{`Mazhoudi feels abandonned by authorities: "We are the living [who are] dead, forgotten by everyone."
"We have no roads or water, no help or decent housing. We own nothing. Are we Tunisians? No, because here we are not considered as such, Why? Because we lack a lot of things."
`}</Text>
      <Text style={[styles.inMarchAuthorities, styles.theOnlyRoadPosition]}>{`In March, authorities introduced water rationing even in major cities. Many residents in rural areas don't even have taps and rely on springs. Some farmers sold livestock to provide for their family and the rest of their cattle. 
"There are several families who have left the village, Djamila Mazhoud says.
"Elderly people left due to water scarcity. They followed their children to the city so they could live, leaving their houses empty. The reason is thirst. Can an 80-year-old go to the river to get water? No way," the 60-year-old says.
Pushed to move`}</Text>
      <Text style={[styles.theOnlyRoad, styles.theOnlyRoadPosition]}>{`The only road that leads to the village is decrepit and hasn't been paved in decades, and residents say this only deepens their sense of isolation.
Some villagers have felt pushed to move to urban areas or abroad.
About 300,000 of Tunisia's 12 million people have no drinking water in their homes, according to the Tunisian Forum for Economic and Social Rights.`}</Text>
      <Image style={[styles.d7unHighres17024256661Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <View style={styles.youtubeAndVimeoVideo} />
      <Text style={[styles.tunisiansSatisfiedWith, styles.theOnlyRoadPosition]}>Tunisians Satisfied With Water Quality?</Text>
      <Image style={styles.captureDcran20240227113} contentFit="cover" source={require("../assets/poor1.jpg")} />
      <Text style={[styles.theSouthernRegion, styles.donateTypo]}>{`The southern region of Tunisia offers a stark illustration of the country’s water crisis. Here, only 7% were satisfied with their water quality -- the lowest total anywhere in the world -- in 2022. This is a rapid drop from 2015, when roughly half (48%) of Tunisians in the south were satisfied with their water.

`}</Text>
      <Text style={[styles.donate, styles.donateTypo]}>Donate</Text>
    </View>);
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 170,
    position: "absolute"
  },
  donateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute"
  },
  theOnlyRoadPosition: {
    left: 27,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute"
  },
  frameChild: {
    top: 1848,
    left: 39,
    borderRadius: 20,
    width: 289,
    height: 71,
    position: "absolute"
  },
  needwater21Icon: {
    top: -559,
    left: -826,
    width: 330,
    height: 220,
    position: "absolute"
  },
  needwater22Icon: {
    left: 245,
    borderRadius: 25,
    width: 155,
    height: 153
  },
  needwater31Icon: {
    top: 29,
    left: 40,
    borderRadius: 12,
    width: 153,
    height: 127,
    position: "absolute"
  },
  yearOldOunissaMazhoud: {
    top: 395,
    width: 322,
    height: 100,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 21
  },
  needwater1Icon: {
    top: 0,
    left: 214,
    borderRadius: 22,
    width: 159,
    height: 149,
    position: "absolute"
  },
  mazhoudiFeelsAbandonned: {
    top: 653,
    left: 20,
    width: 309,
    height: 88,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xs
  },
  inMarchAuthorities: {
    top: 1015,
    width: 294,
    height: 93,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    left: 27
  },
  theOnlyRoad: {
    top: 1237,
    width: 295,
    height: 62,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
    left: 27
  },
  d7unHighres17024256661Icon: {
    borderRadius: 14,
    width: 209,
    height: 211,
    left: 21
  },
  youtubeAndVimeoVideo: {
    width: 360,
    height: 220
  },
  tunisiansSatisfiedWith: {
    top: 1396,
    fontSize: 35,
    lineHeight: 30,
    fontFamily: FontFamily.kalam,
    width: 327,
    height: 99
  },
  captureDcran20240227113: {
    top: 1495,
    left: -6,
    width: 366,
    height: 155,
    position: "absolute"
  },
  theSouthernRegion: {
    top: 1680,
    left: 16,
    width: 335,
    height: 137,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xs
  },
  donate: {
    top: 1872,
    left: 142,
    fontSize: 25,
    color: Color.colorWhite,
    width: 186,
    height: 23
  },
  vectorParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 2033,
    overflow: "hidden"
  }
});

export default Frame;
