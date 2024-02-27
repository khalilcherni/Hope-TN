import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";

const ProfileEdit = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdateProfile = () => {
    // Assuming you have logic here to update the profile
    // For demonstration purposes, let's just log the updated profile details
    console.log("Updated Profile:");
    console.log("Username:", username);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);

    // You can replace this with your actual logic to update the profile
    // For example:
    // navigation.navigate('Profile'); // Navigate to the profile screen after updating
  };

  return (
    <View style={styles.profileEdit}>
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
        //   source={require("../assets/notch.png")}
        />
        {/* Other status icons */}
      </View>
      <Image
        style={styles.unsplashjmurdhtm7ngIcon}
        // source={require("../assets/unsplashjmurdhtm7ng1.png")}
      />
      <TextInput
        style={[styles.input, styles.username]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={[styles.editProfile, styles.updateTypo]}>Edit Profile</Text>
      <TextInput
        style={[styles.input, styles.phoneNumber]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={[styles.input, styles.emailId]}
        placeholder="Email I’d"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.password]}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={[styles.update, styles.updateButton]} onPress={handleUpdateProfile}>
        <Text style={[styles.update, styles.updateTypo]}>Update</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    notchIconLayout: {
      height: 30,
      position: "absolute",
    },
    lightSpaceBlock: {
      marginLeft: 4,
      height: 14,
    },
    timeLightLayout: {
      height: 21,
      position: "absolute",
      overflow: "hidden",
    },
    profileLayout: {
      height: 40,
      position: "absolute",
    },
    emailIdTypo: {
      textAlign: "left",
      color: Color.lightBlack,
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      fontSize: FontSize.smallNormalBold_size,
      position: "absolute",
    },
    updateTypo: {
      color: Color.lightWhite,
      fontSize: FontSize.size_mini,
      left: 151,
      textAlign: "left",
      position: "absolute",
    },
    yanchuiTypo: {
      fontFamily: FontFamily.poppinsRegular,
      fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
      textAlign: "left",
      color: Color.lightBlack,
      position: "absolute",
    },
    profileEditChild: {
      left: -24,
      backgroundColor: Color.colorDarkcyan,
      width: 390,
      height: 188,
      top: 0,
      position: "absolute",
    },
    notchIcon: {
      right: 0,
      left: 0,
      maxWidth: "100%",
      top: 0,
      overflow: "hidden",
    },
    networkSignalLight: {
      width: 20,
      height: 14,
    },
    wifiSignalLight: {
      width: 16,
    },
    batteryLight: {
      width: 25,
    },
    statusIcons: {
      top: 16,
      right: 14,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
    },
    indicatorIcon: {
      top: 8,
      right: 71,
      width: 6,
      height: 6,
      position: "absolute",
    },
    timeLight: {
      top: 12,
      borderRadius: Border.br_xl,
      width: 54,
      left: 21,
    },
    statusBar: {
      right: 4,
      left: -15,
      height: 44,
      top: 0,
      position: "absolute",
      overflow: "hidden",
    },
    unsplashjmurdhtm7ngIcon: {
      top: 117,
      left: 124,
      width: 142,
      height: 142,
      position: "absolute",
    },
    profileEditItem: {
      top: 321,
      left: 18,
      width: 318,
      borderWidth: 1,
      borderColor: Color.colorDarkgray,
      borderStyle: "solid",
      backgroundColor: Color.colorSilver,
      borderRadius: Border.br_5xs,
      height: 40,
    },
    profileEditInner: {
      top: 403,
      width: 318,
      borderWidth: 1,
      borderColor: Color.colorDarkgray,
      borderStyle: "solid",
      backgroundColor: Color.colorSilver,
      borderRadius: Border.br_5xs,
      height: 40,
      left: 21,
    },
    rectangleView: {
      top: 485,
      width: 318,
      borderWidth: 1,
      borderColor: Color.colorDarkgray,
      borderStyle: "solid",
      backgroundColor: Color.colorSilver,
      borderRadius: Border.br_5xs,
      height: 40,
      left: 21,
    },
    username: {
      top: 298,
      left: 17,
    },
    editProfile: {
      top: 55,
      fontWeight: "600",
      fontFamily: FontFamily.poppinsSemiBold,
    },
    phoneNumber: {
      top: 462,
      left: 36,
      display: "none",
    },
    emailId: {
      top: 380,
      left: 21,
    },
    password: {
      top: 454,
      left: 21,
    },
    profileEditChild1: {
      top: 672,
      left: 40,
      borderRadius: Border.br_3xs,
      backgroundColor: Color.colorGray_200,
      width: 283,
    },
    update: {
      top: 681,
      fontWeight: "700",
      fontFamily: FontFamily.poppinsBold,
    },
    yanchui: {
      top: 332,
      left: 31,
      fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    },
    changePicture: {
      top: 259,
      left: 149,
    },
    yanchuigmailcom: {
      top: 413,
      left: 31,
      fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    },
    evftbyvvcd: {
      top: 494,
      left: 34,
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    arrowLeft: {
      left: 25,
      top: 51,
      width: 26,
    },
    ushareAltIcon: {
      top: 58,
      left: 325,
      width: 17,
    },
    profileEdit: {
      backgroundColor: Color.lightWhite,
      flex: 1,
      height: 800,
      overflow: "hidden",
      width: "100%",
    },
  });
  