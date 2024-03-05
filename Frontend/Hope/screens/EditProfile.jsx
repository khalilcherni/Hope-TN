import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';

const PasswordInput = ({ value, onChangeText }) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.passwordInputContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible}
      />
      <Pressable
        style={styles.visibilityButton}
        onPress={togglePasswordVisibility}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          // source={require("../assets/backleft.png")}
          // source={require("../assets/iyess.png")}
        />
      </Pressable>
    </View>
  );
};

const ProfileEdit = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const updateUserEmail = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const userDataParsed = JSON.parse(userData);
        userDataParsed.email = email;
        await AsyncStorage.setItem('user', JSON.stringify(userDataParsed));
        Alert.alert("Success", "Email updated successfully!");
      }
    } catch (error) {
      console.error('Error updating user email:', error);
      Alert.alert("Error", "Failed to update email. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/aaa.jpg")}
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
        <PasswordInput
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.updateButton} onPress={updateUserEmail}>
          <Text style={styles.updateButtonText}>Update</Text>
        </Pressable>
      </View>
      <Pressable style={styles.backIcon} onPress={() => navigation.navigate("Setting")}>
        <Image
          style={styles.icon}
          source={require("../assets/aaa.jpg")}
        />
      </Pressable>
      <Image
        style={styles.shareIcon}
        source={require("../assets/aaa.jpg")}
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#209FA6",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 45,
    width: "100%",
    marginBottom: 40,
  },
  passwordInputContainer: {
    position: "relative",
    width: "100%",
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: "#209FA6",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 45,
    width: "100%",
    marginBottom: 40,
  },
  visibilityButton: {
    position: "absolute",
    right: 10,
    top: "15%",
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
