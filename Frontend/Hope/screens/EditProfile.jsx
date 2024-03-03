import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ProfileEdit = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const updateUserEmail = async () => {
    try {
      // Code to update the user's email in AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      Alert.alert('Success', 'Email updated successfully!');
    } catch (error) {
      console.error('Error updating email:', error);
      Alert.alert('Error', 'Failed to update email.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={styles.editProfileContainer}>
        <Text style={styles.editProfile}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <Pressable style={styles.passwordVisibilityButton} onPress={togglePasswordVisibility}>
            <MaterialIcons name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={24} color="#209FA6" />
          </Pressable>
        </View>
        <Pressable style={styles.updateButton} onPress={updateUserEmail}>
          <Text style={styles.updateButtonText}>Update</Text>
        </Pressable>
      </View>
      <Pressable style={styles.backIcon} onPress={() => navigation.navigate("Setting")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backleft.png")}
        />
      </Pressable>
      <Image
        style={styles.shareIcon}
        contentFit="cover"
        source={require("../assets/share.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#209FA6",
    alignItems: "center",
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 155,
  },
  editProfileContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 250,
    width: "100%",
    flex: 1,
  },
  editProfile: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#209FA6",
    marginBottom: 15,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  input: {
    borderWidth: 1,
    borderColor: "#209FA6",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 45,
    width: "100%",
    marginBottom: 20,
    fontFamily: FontFamily.poppinsRegular,
  },
  passwordInputContainer: {
    position: 'relative',
    width: '100%',
  },
  passwordInput: {
    paddingRight: 40,
  },
  passwordVisibilityButton: {
    position: 'absolute',
    right: 10,
    top: 8,
    zIndex: 1,
  },
  updateButton: {
    backgroundColor: "#209FA6",
    borderRadius: 12,
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FontFamily.poppinsBold,
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  icon: {
    height: 26,
    width: 26,
  },
  shareIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    height: 26,
    width: 25,
  },
});

export default ProfileEdit;
