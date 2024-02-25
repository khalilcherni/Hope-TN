import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LeaderBoard = () => {
  return (

    <View style={styles.leaderBoard}>
      <Image
        style={styles.leaderBoardChild}
        contentFit="cover"
        source={require("../assets/444444.png")}
      />
      <View style={[styles.davidParent, styles.parentLayout]}>
        <Text style={[styles.david, styles.johnTypo]}>David</Text>
        <Text style={styles.text}>4578</Text>
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={[styles.groupParent, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <View style={[styles.ellipseParent, styles.ellipseFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/first.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.johnParent, styles.johnParentLayout]}>
        <Text style={[styles.john, styles.johnTypo]}>John</Text>
        <Text style={[styles.text2, styles.textTypo]}>4235</Text>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <Image
            style={[styles.groupContainer, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <View style={[styles.ellipseGroup, styles.frameItemLayout]}>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/iyess.png")}
            />
            <Text style={[styles.text3, styles.textPosition]}>2</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent, styles.parentShadowBox]}>
        <Text style={styles.text4Typo}>4</Text>
        <View style={[styles.ellipseContainer, styles.leaderBoard1FlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <Text style={[styles.devonLane, styles.text4Typo]}>Devon Lane</Text>
        </View>
        <View style={[styles.group, styles.parentFlexBox]}>
          <Text style={styles.text5}>3768</Text>
          <Image
            style={styles.polygonIcon}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
        </View>
      </View>
      <View style={[styles.container, styles.parentShadowBox]}>
        <Text style={styles.text4Typo}>5</Text>
        <View style={[styles.ellipseContainer, styles.leaderBoard1FlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <Text style={[styles.devonLane, styles.text4Typo]}>Ronald</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={styles.text5}>3578</Text>
          <Image
            style={styles.polygonIcon}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
        </View>
      </View>
      <View style={[styles.parent2, styles.parentShadowBox]}>
        <Text style={styles.text4Typo}>6</Text>
        <View style={[styles.ellipseContainer, styles.leaderBoard1FlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <Text style={[styles.devonLane, styles.text4Typo]}>Eleanor Pena</Text>
        </View>
        <View style={[styles.parent3, styles.parentFlexBox]}>
          <Text style={styles.text5}>3476</Text>
          <Image
            style={styles.polygonIcon}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
        </View>
      </View>
      <View style={[styles.parent4, styles.parentShadowBox]}>
        <Text style={styles.text4Typo}>7</Text>
        <View style={[styles.ellipseContainer, styles.leaderBoard1FlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <Text style={[styles.devonLane, styles.text4Typo]}>Savannah</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={styles.text5}>3125</Text>
          <Image
            style={styles.polygonIcon}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
        </View>
      </View>
      <View style={[styles.parent6, styles.parentShadowBox]}>
        <Text style={styles.text4Typo}>8</Text>
        <View style={[styles.ellipseContainer, styles.leaderBoard1FlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <Text style={[styles.devonLane, styles.text4Typo]}>Wade Warren</Text>
        </View>
        <View style={[styles.parent3, styles.parentFlexBox]}>
          <Text style={styles.text5}>2857</Text>
          <Image
            style={styles.polygonIcon}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
        </View>
      </View>
      <View style={[styles.merryParent, styles.groupViewLayout]}>
        <Text style={[styles.merry, styles.johnTypo]}>Merry</Text>
        <Text style={[styles.text14, styles.textTypo]}>3967</Text>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <Image
            style={[styles.groupView, styles.groupViewLayout]}
            contentFit="cover"
            source={require("../assets/iyess.png")}
          />
          <View style={[styles.ellipseGroup, styles.frameItemLayout]}>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/iyess.png")}
            />
            <Text style={[styles.text3, styles.textPosition]}>3</Text>
          </View>
        </View>
      </View>
      <View style={[styles.board, styles.ellipseFlexBox]}>
        <Image
          style={[styles.iconamoonarrowUp2Bold, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/iyess.png")}
        />
        <Text style={[styles.leaderBoard1, styles.leaderBoard1FlexBox]}>
          Leader Board
        </Text>
        <Image
          style={[styles.bithreeDotsVerticalIcon, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/iyess.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 130,
    position: "absolute",
  },
  johnTypo: {
    textAlign: "center",
    color: Color.lightWhite,
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
  },
  groupParentPosition: {
    left: 0,
    top: 0,
  },
  ellipseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChildLayout: {
    height: 40,
    width: 40,
  },
  textPosition: {
    zIndex: 1,
    left: "50%",
    top: "50%",
    marginLeft: -6,
    color: Color.lightBlack,
    textAlign: "center",
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
    position: "absolute",
  },
  johnParentLayout: {
    width: 102,
    position: "absolute",
  },
  textTypo: {
    top: 138,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.mitrRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  groupPosition: {
    height: 100,
    left: 0,
    top: 0,
  },
  frameItemLayout: {
    height: 30,
    width: 30,
  },
  parentShadowBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    width: 342,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_3xs,
    left: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  leaderBoard1FlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  text4Typo: {
    fontSize: FontSize.size_xl,
    color: Color.lightBlack,
    fontFamily: FontFamily.mitrRegular,
    textAlign: "center",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    marginLeft: 15,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  groupViewLayout: {
    width: 100,
    position: "absolute",
  },
  leaderBoardChild: {
    left: -24,
    borderRadius: Border.br_11xl,
    width: 430,
    height: 407,
    top: 0,
    position: "absolute",
  },
  david: {
    top: 130,
    left: 32,
    fontSize: FontSize.size_5xl,
    color: Color.lightWhite,
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    top: 168,
    left: 42,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.mitrRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    height: 130,
    width: 130,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  text1: {
    marginTop: -20,
    fontSize: 22,
  },
  ellipseParent: {
    height: 40,
    width: 40,
    left: 0,
    top: 0,
  },
  davidParent: {
    left: 118,
    height: 196,
    top: 100,
  },
  john: {
    left: 23,
    fontSize: FontSize.size_5xl,
    color: Color.lightWhite,
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
    position: "absolute",
    top: 100,
  },
  text2: {
    left: 29,
  },
  groupContainer: {
    width: 102,
    position: "absolute",
  },
  frameItem: {
    zIndex: 0,
  },
  text3: {
    marginTop: -14,
    fontSize: FontSize.size_lg,
    zIndex: 1,
    left: "50%",
    top: "50%",
    marginLeft: -6,
  },
  ellipseGroup: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    left: 0,
    top: 0,
  },
  johnParent: {
    top: 170,
    left: 7,
    height: 166,
  },
  frameInner: {
    width: 60,
    height: 60,
  },
  devonLane: {
    marginLeft: 15,
  },
  ellipseContainer: {
    marginLeft: 15,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text5: {
    color: Color.lightBlack,
    fontFamily: FontFamily.mitrRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  polygonIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  group: {
    width: 70,
  },
  parent: {
    top: 426,
  },
  container: {
    top: 526,
  },
  parent3: {
    width: 69,
  },
  parent2: {
    top: 625,
  },
  parent4: {
    top: 724,
    height: 76,
  },
  parent6: {
    top: 820,
  },
  merry: {
    left: 15,
    fontSize: FontSize.size_5xl,
    color: Color.lightWhite,
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
    position: "absolute",
    top: 100,
  },
  text14: {
    left: 27,
  },
  groupView: {
    height: 100,
    left: 0,
    top: 0,
  },
  merryParent: {
    top: 177,
    left: 252,
    height: 166,
  },
  iconamoonarrowUp2Bold: {
    overflow: "hidden",
  },
  leaderBoard1: {
    fontSize: FontSize.size_7xl,
    marginLeft: 60,
    textAlign: "center",
    color: Color.lightWhite,
    fontFamily: FontFamily.mitrMedium,
    fontWeight: "500",
  },
  bithreeDotsVerticalIcon: {
    marginLeft: 60,
    overflow: "hidden",
  },
  board: {
    top: 17,
    left: -18,
    width: 395,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  leaderBoard: {
    backgroundColor: Color.lightWhite,
    shadowRadius: 20,
    elevation: 20,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default LeaderBoard;
