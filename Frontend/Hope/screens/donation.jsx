import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert,Dimensions } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const AndroidLarge = () => {
  const navigation = useNavigation();
  const [enteredAmount, setEnteredAmount] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleSelectAmount = (amount) => {
    setEnteredAmount(amount);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect category if already selected
    } else {
      setSelectedCategory(category); // Select category if not selected
    }
    Alert.alert(`${category} selected`, "Category selected successfully");
  };

  const handleDonate = () => {
    if (enteredAmount && selectedCategory) {
      Alert.alert(
        `Donation Confirmation`,
        `You are going to donate ${enteredAmount} to ${selectedCategory}`,
        [
          { text: "Cancel", onPress: () => console.log("Donation canceled") },
          { text: "Donate", onPress: () => navigation.navigate('Payment') },
        ]
      );
    } else {
      Alert.alert("Please enter a donation amount and select a category");
    }
  };
  const handlevents = () => {
    navigation.navigate('Events');
  };
  const handledonation = () => {
    navigation.navigate('donation');
  };
  const handlecontact = () => {
    navigation.navigate('Contactus');
  };
  const handleSchoolNavigation = () => {
    navigation.navigate('School');
  
  };
  const handleHomeNavigation = () => {
    navigation.navigate('Home');
  
  };
  const handleBackPress = () => {
    navigation.navigate("Home");
  };
  return (
    <>
    <ScrollView>
      <View style={styles.androidLarge4}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress}>
        <Image
          source={require("../assets/Sign_out_circle_duotone-removebg-preview.png")}
          style={styles.headerImg}
        />
      </TouchableOpacity>
    </View>
        <View style={[styles.androidLarge4Child, styles.childLayout]} />
        <View style={[styles.androidLarge4Item, styles.childLayout]} />
        <View style={[styles.androidLarge4Inner, styles.childLayout]} />
        <View style={[styles.rectangleView, styles.childLayout]} />
        <View style={styles.orWrapper}>
          <Text style={styles.or}>or</Text>
        </View>
        {/* <View style={styles.androidLarge4Child1} />
        <Text style={styles.donate}>Donate</Text> */}
        <TouchableOpacity onPress={() => handleSelectAmount("50tnd")}>
          <Text style={[styles.tnd, styles.tndTypo]}>50 Tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectAmount("80tnd")}>
          <Text style={[styles.tnd1, styles.tndTypo]}>80 Tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectAmount("100tnd")}>
          <Text style={[styles.tnd2, styles.tndTypo]}>100 Tnd</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectAmount("120tnd")}>
          <Text style={[styles.tnd3, styles.tndTypo]}>120 Tnd</Text>
        </TouchableOpacity>
        <View style={styles.rectangleParent}>
          <TextInput
            style={[styles.groupChild, styles.childLayout, styles.inputStyle]}
            placeholder="enter here"
            onChangeText={(text) => setEnteredAmount(text)}
            value={enteredAmount}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.donation}>donation</Text>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/Rectangle_4187.png")}
        />
        <View style={styles.images}>
          <TouchableOpacity onPress={() => handleCategorySelect("water")}>
            <Image
              style={[styles.ellipseIcon, styles.androidChildLayout]}
              contentFit="cover"
              source={require("../assets/abcd.png")}
            />
            {selectedCategory === "water" && (
              <Ionicons name="checkmark" size={24} color="green" style={styles.checkmarkIcon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCategorySelect("poor")}>
            <Image
              style={[styles.androidLarge4Child2, styles.androidChildLayout]}
              contentFit="cover"
              source={require("../assets/abcd.png")}
            />
            {selectedCategory === "poor" && (
              <Ionicons name="checkmark" size={24} color="green" style={styles.checkmarkIcon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCategorySelect("elderly")}>
            <Image
              style={[styles.androidLarge4Child3, styles.androidChildLayout]}
              contentFit="cover"
              source={require("../assets/abcd.png")}
            />
            {selectedCategory === "elderly" && (
              <Ionicons name="checkmark" size={24} color="green" style={styles.checkmarkIcon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCategorySelect("palestine")}>
            <Image
              style={[styles.androidLarge4Child4, styles.androidChildLayout]}
              contentFit="cover"
              source={require("../assets/abcd.png")}
            />
            {selectedCategory === "palestine" && (
              <Ionicons name="checkmark" size={24} color="green" style={styles.checkmarkIcon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCategorySelect("orphans")}>
            <Image
              style={[styles.androidLarge4Child5, styles.androidChildLayout]}
              contentFit="cover"
              source={require("../assets/abcd.png")}
            />
            {selectedCategory === "orphans" && (
              <Ionicons name="checkmark" size={24} color="green" style={styles.checkmarkIcon} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.peopleWhoNeed, styles.peopleTypo]}>
          people who need water
        </Text>
        <Text style={[styles.poorPeople, styles.peopleTypo]}>poor people</Text>
        <Text style={[styles.eldreyPeople, styles.peopleTypo]}>
          eldrey people
        </Text>
        <Text style={[styles.palestine, styles.peopleTypo]}>palestine</Text>
        <Text style={[styles.orphansKids, styles.peopleTypo]}>orphans kids</Text>
        <TouchableOpacity onPress={handleDonate}>
          <Text style={styles.donateButton}>Donate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <View style={styles.tabbar}>
      <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><FontAwesome name="home" size={width * 0.06} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={handlevents}><MaterialCommunityIcons name="charity" size={width * 0.06} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><Ionicons name="school" size={width * 0.06} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={handledonation}><FontAwesome5 name="donate" size={width * 0.06}  color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={handlecontact}><MaterialIcons name="quick-contacts-dialer" size={width * 0.06}  color="black" /></TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 55,
    width: 253,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: -20,
    zIndex: 1, // to ensure it's above other content
  },
  headerImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    margin: 40,
    top:-65,
    left:-5
  },
  checkmarkIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 16,
    // fontFamily: 'Arial',
    marginTop: 10,
  },
  groupChild: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    fontSize: 16,
    // fontFamily: 'Arial',
    marginTop: 10,
  },
  tndTypo: {
    height: 31,
    width: 125,
    fontSize: FontSize.size_xl,
    left: 174,
    color: Color.lightWhite,
    textAlign: "left",
    // fontFamily: FontFamily.inriaSansRegular,
    position: "absolute",
  },
  androidChildLayout: {
    height: 19,
    width: 20,
    left: 34,
    position: "absolute",

  },
  peopleTypo: {
    fontSize: FontSize.size_mid,
    color: Color.lightBlack,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge4Child: {
    top: 83,
    left: 79,
    height: 60,
  },
  androidLarge4Item: {
    top: 167,
    left: 79,
    height: 60,
  },
  androidLarge4Inner: {
    top: 258,
    left: 79,
    height: 60,
  },
  images: {
    left: 21,
  },
  rectangleView: {
    top: 349,
    left: 79,
    width: 249,
    height: 60,
  },
  or: {
    top: 2,
    left: 65,
    color: Color.lightBlack,
    width: 50,
    height: 42,
    textAlign: "left",
    fontSize: FontSize.size_16xl,
    position: "absolute",
    fontWeight: "700",
  },
  orWrapper: {
    top: 415,
    left: 130,
    width: 140,
    height: 96,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge4Child1: {
    top: 890,
    left: 79,
    width: 249,
    height: 60,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  donate: {
    top: 900,
    left: 161,
    width: 157,
    height: 53,
    color: Color.lightWhite,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    position: "absolute",
  },
  donateButton: {
    top: 900,
    left: 80,
    width: 250,
    height: 50,
    color: Color.lightWhite,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    lineHeight: 40,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_11xl,
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
  rectangleParent: {
    top: 479,
    height: 58,
    width: 253,
    left: 79,
    position: "absolute",
  },
  donation: {
    top: 10,
    left: 121,
    width: 159,
    height: 58,
    color: Color.lightBlack,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_16xl,
    position: "absolute",
  },
  rectangleIcon: {
    top: 594,
    left: 40,
    width: 341,
    height: 254,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  ellipseIcon: {
    top: 623,
  },
  androidLarge4Child2: {
    top: 752,
  },
  androidLarge4Child3: {
    top: 711,
  },
  androidLarge4Child4: {
    top: 793,
  },
  androidLarge4Child5: {
    top: 670,
  },
  peopleWhoNeed: {
    width: 234,
    height: 26,
    left: 92,
    fontSize: FontSize.size_mid,
    top: 623,
    fontWeight: "700",
  },
  poorPeople: {
    top: 667,
    width: 187,
    height: 29,
    left: 92,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
  },
  eldreyPeople: {
    top: 708,
    left: 93,
    width: 150,
    height: 32,
    fontWeight: "700",
  },
  palestine: {
    top: 791,
    left: 94,
    width: 153,
    height: 28,
    fontWeight: "700",
  },
  orphansKids: {
    top: 750,
    width: 185,
    left: 92,
    fontSize: FontSize.size_mid,
    height: 22,
    fontWeight: "700",
  },
  androidLarge4: {
    backgroundColor: '#f0f0f0',
    top: 60,
    width: 360,
    height: 1050,
  },
  selectedCategory: {
    backgroundColor: "lightblue", // Change to the color you want to use for selected category
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  
    paddingVertical: height * 0.02,
    position: 'absolute',
    bottom: -7,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AndroidLarge;
