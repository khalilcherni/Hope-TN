import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'; // Import Axios

const ProfileEdit = () => {
  const navigation = useNavigation();
  const [profileId, setProfileId] = useState(""); // Assuming the default profile ID is 1
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    // Fetch profile data from the server using Axios when the component mounts
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    axios.get("http://localhost:4000/profile/getAll") // Assuming this endpoint returns profile data
      .then(response => {
        // For simplicity, let's assume the first profile is fetched
        setProfileId(response.data[0].id);
        setProfileData(response.data[0]);
      })
      .catch(error => {
        console.error("Error fetching profile data:", error);
      });
  };

  const handleUpdate = () => {
    // Prepare the data to send to the backend
    const updatedProfile = {
      ...profileData,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      email: profileData.email,
      password: profileData.password
    };

    // Send a PUT request to update the profile
    axios.put(`http://localhost:4000/profile/${profileId}`, updatedProfile)
      .then(response => {
        Alert.alert("Profile updated successfully");
        navigation.goBack();
      })
      .catch(error => {
        console.error("Error updating profile:", error);
        Alert.alert("Error updating profile");
      });
  };

  return (
    <View style={styles.profileEdit}>
      <View style={styles.background} />
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backleft.png")}
        />
      </Pressable>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={profileData.firstName}
          onChangeText={(text) => setProfileData({...profileData, firstName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={profileData.lastName}
          onChangeText={(text) => setProfileData({...profileData, lastName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={profileData.email}
          onChangeText={(text) => setProfileData({...profileData, email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={profileData.password}
          onChangeText={(text) => setProfileData({...profileData, password: text})}
        />
        <Pressable style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileEdit: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#008080",
    opacity: 0.5,
  },
  arrowLeft: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 26,
    height: 26,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "#CCCCCC",
    borderRadius: 5,
    borderWidth: 1,
    color: "#333333",
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 5,
    justifyContent: "center",
    height: 40,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ProfileEdit;
