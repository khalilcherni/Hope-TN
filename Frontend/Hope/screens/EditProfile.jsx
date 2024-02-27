import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'; // Import Axios

const ProfileEdit = () => {
  const navigation = useNavigation();
  const [profileId, setProfileId] = useState(1); // Assuming the default profile ID is 1
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
      <View style={styles.profileEditChild} />
      <View style={styles.statusBar}>
        {/* Your status bar icons */}
      </View>
      <View style={styles.profileLayout}>
        {/* Profile layout */}
      </View>
      <Text style={[styles.emailIdTypo, styles.username]}>Username</Text>
      <Text style={[styles.updateTypo, styles.editProfile]}>Edit Profile</Text>
      <TextInput
        style={[styles.input, styles.emailId]}
        placeholder="Enter your email"
        value={profileData.email}
        onChangeText={(text) => setProfileData({...profileData, email: text})}
      />
      <TextInput
        style={[styles.input, styles.password]}
        placeholder="Enter your password"
        secureTextEntry
        value={profileData.password}
        onChangeText={(text) => setProfileData({...profileData, password: text})}
      />
      <Pressable style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profileEdit: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    padding: 20,
  },
  profileEditChild: {
    backgroundColor: "#008080",
    width: 390,
    height: 188,
    position: "absolute",
    top: 0,
    left: -24,
  },
  statusBar: {
    backgroundColor: "#F0F0F0",
    height: 44,
    position: "absolute",
    top: 0,
    left: -15,
    right: 4,
    overflow: "hidden",
  },
  profileLayout: {
    backgroundColor: "#F0F0F0",
    height: 40,
    position: "absolute",
    top: 0,
    left: 0,
  },
  emailIdTypo: {
    color: "#333333",
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "left",
    top: 20,
    left: 17,
  },
  updateTypo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "left",
    top: 20,
    left: 17,
  },
  input: {
    borderColor: "#CCCCCC",
    borderRadius: 5,
    borderWidth: 1,
    color: "#333333",
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 5,
    justifyContent: "center",
    height: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  editProfile: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 20,
  },
  password: {
    marginBottom: 0,
  },
});

export default ProfileEdit;
