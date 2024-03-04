import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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
        <Image
          style={styles.rectangleImage}
          resizeMode="cover"
          source={require("../assets/donnation.png")}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Welcome to our Charity App! We're thrilled to have you here.
        🌟 Together, let's make a positive impact on the world.
        Explore, donate, and get involved in meaningful causes.
        Your support means the world to us. Thank you for joining
        our mission to spread kindness and create a brighter future.
      </Text>

      {/* Categories */}
      <Text style={styles.categoriesText}>Categories:</Text>
      <View style={styles.categoriesContainer}>
      <Pressable onPress={() => navigation.navigate("categoriePeopleWhoNeedWater")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/3.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("poorPeople")}>
          <View style={styles.categoryCircle}>
            <Image
              style={styles.categoryImage}
              resizeMode="cover"
              source={require("../assets/4.png")}
            />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Palestine")}>
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
        {/* Add more categories here */}
        {/* Your category Pressables */}
      </View>

      {/* Our Work */}
      <View style={styles.ourWorkContainer}>
        <View style={styles.azCard}>
          <Text style={styles.azText}>
            Charity Work: Making a Difference in the World
            Charity work is more than just giving; it's about making a meaningful impact on the lives of others and creating positive change in the world. Whether it's volunteering time, donating resources, or advocating for a cause, charity work embodies the spirit of compassion and generosity. One of the greatest benefits of engaging in charity work is the profound sense of fulfillment it brings. Knowing that you have contributed to the well-being of others, even in a small way, can provide a deep sense of purpose and satisfaction. Charity work allows individuals to connect with their communities, build meaningful relationships, and foster a sense of belonging.
          </Text>
        </View>
      </View>

      <Text>ifefiobf</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: "center",
    marginTop: 30,
  },
  iconContainer: {
    position: "absolute",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.lightBlack,
    top: 20,
    right: 20,
    width: 60,
    height: 60,
    zIndex: 1,
  },
  profileCircle: {
    zIndex: 2,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    textAlign: "center",
    color: "black",
    fontFamily: FontFamily.kalamRegular,
    fontSize: 16,
    marginTop: 20,
  },
  menuIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 27,
    height: 30,
    zIndex: 1,
  },
  rectangleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  rectangleImage: {
    width: 300,
    height: 150,
    backgroundColor: '#209FA6',
  },
  pointsText: {
    position: "absolute",
    top: "70%",
    left: "45%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_l,
    marginLeft: -50,
    fontSize: 20,
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
    backgroundColor: Color.lightGray,
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  ourWorkContainer: {
    marginTop: 20,
  },
  azCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  azText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
  },
});

export default HomeRE;
