import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import styles and other assets
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeRE = () => {
  const navigation = useNavigation();

  // Generate a random number of points
  const randomPoints = Math.floor(Math.random() * 1000) + 1;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Icon */}
      <Pressable
        style={[styles.iconContainer, styles.profileCircle]}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/profile-circle.png")}
        />
      </Pressable>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>

      <Image
        style={styles.rectangleImage}
        resizeMode="cover"
        source={require("../assets/Rectangle.png")}
      />
      {/* Menu Icon */}
      <Pressable
        style={styles.menuIcon}
        onPress={() => console.log("Menu pressed")} // Placeholder onPress action
      >
        <Image
          style={styles.menuIcon}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
      </Pressable>

      {/* Rectangle with points */}
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangleWithPoints}>
          <Image
            style={styles.rectangleImage}
            resizeMode="cover"
            source={require("../assets/Rectangle.png")}
          />
          <Text style={styles.pointsText}>{randomPoints} points</Text>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.categoriesText}>Categories:</Text>
      <View style={styles.categoriesContainer}>
        {/* Add more categories here */}
        <Pressable onPress={() => navigation.navigate("Category1")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/drop.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Category2")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/drop.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Category3")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/drop.png")}
            />
          </View>
        </Pressable>
        {/* Add more categories here */}
        <Pressable onPress={() => navigation.navigate("Category4")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/drop.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Category5")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/drop.png")}
            />
          </View>
        </Pressable>
      </View>

      {/* Our Work */}
      <View style={styles.ourWorkContainer}>
        <Text style={styles.ourWorkText}>Our Work :</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.ourWorkImagesContainer, { flexGrow: 1 }]}>
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/DEMT 1.png")}
            />
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/tunisia-covid-station-767.png")}
            />
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/jeune-mere-enfants-remplit-bidons-eau-potable-tunisie 1.png")}
            />
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/jeune-mere-enfants-remplit-bidons-eau-potable-tunisie 1.png")}
            />
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/jeune-mere-enfants-remplit-bidons-eau-potable-tunisie 1.png")}
            />
            <Image
              style={styles.ourWorkImage}
              resizeMode="cover"
              source={require("../assets/jeune-mere-enfants-remplit-bidons-eau-potable-tunisie 1.png")}
            />
            {/* Add more images here */}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Color.lightWhite,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.lightBlack,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    right: 20,
    width: 60,
    height: 60,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_xl,
    marginTop: 10, // Decreased marginTop value
  },
  menuIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 27,
    height: 30,
  },
  rectangleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500, // Adjusted marginTop value
  },
  rectangleWithPoints: {
    position: "relative",
  },
  rectangleImage: {
    width: 300,
    height: 150,
  },
  pointsText: {
    position: "absolute",
    top: "70%", // Position the text vertically centered
    left: "45%", // Position the text horizontally centered
    transform: [{ translateX: -50 }, { translateY: -50 }], // Center the text within its container
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_l,
  },
  categoriesText: {
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_xl,
    marginTop: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  categoryCircle: {
    backgroundColor: Color.lightGray, // Greyish background color
    borderRadius: 50, // Circular shape
    marginHorizontal: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  ourWorkText: {
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_xl,
    marginTop: 20,
  },
  ourWorkContainer: {
    marginTop: 20,
  },
  ourWorkImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ourWorkImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default HomeRE;
