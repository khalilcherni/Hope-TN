// startingPage.jsx
import React from "react";
import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartingPage = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("OnboardingPage");
  };

  return (
    <View style={styles.startingPage}>
      <TouchableOpacity onPress={handleStart} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.removebg1Icon}
            // source={require("../assets/donnation.png")}
          />
        </View>
        <Text style={styles.logoText}> Click here to Start </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  startingPage: {
    backgroundColor: "#209FA6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#209FA6",
    padding: 10,
  },
  removebg1Icon: {
    width: 200,
    height: 200,
  },
  logoText: {
    fontSize: 20,
    color: "#fff", // Adjusted text color to match background color
    marginTop: 20,
  },
});

export default StartingPage;
