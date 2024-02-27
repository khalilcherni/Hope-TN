import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileEdit = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    // Prepare the data to send to the backend
    const profileData = {
      firstName,
      lastName,
      email,
      password,
    };

    // Send a PUT request to update the profile
    fetch("http://localhost:4000/profile/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful update
        Alert.alert("Profile updated successfully");
        navigation.goBack();
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem updating the profile:", error);
        Alert.alert("Error updating profile");
      });
  };

  return (
    <View style={styles.profileEdit}>
      <View style={styles.profileEditChild} />
      <View style={styles.statusBar}>
        {/* Your status bar icons */}
      </View>
      <Image
        style={styles.unsplashjmurdhtm7ngIcon}
        // source={require("../assets/unsplashjmurdhtm7ng1.png")}
      />
      <View style={styles.profileEditItem} />
      <View style={styles.profileEditInner} />
      <View style={styles.rectangleView} />
      <Text style={[styles.username, styles.emailIdTypo]}>Username</Text>
      <Text style={[styles.editProfile, styles.updateTypo]}>Edit Profile</Text>
      <TextInput
        style={[styles.input, styles.emailId]}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.password]}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF', // Set the background color
  },
  editProfile: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#000000', // Set the text color
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000', // Set the text color
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC', // Set the border color
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000000', // Set the text color
  },
  button: {
    backgroundColor: '#007BFF', // Set the button background color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Set the button text color
    fontWeight: 'bold',
  },
});

export default ProfileEdit;
