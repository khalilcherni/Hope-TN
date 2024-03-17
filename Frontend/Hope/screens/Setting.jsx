import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, Share, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const { email } = JSON.parse(userData);
          setUserEmail(email);
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, [isFocused]);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { 
          text: 'Accept', 
          onPress: () => {
            AsyncStorage.clear(); // Clear user data from AsyncStorage
            navigation.navigate('SignIn'); // Navigate to the sign-in page
          }
        }
      ],
      { cancelable: false }
    );
  };

  const onShare = async () => {
    const url = 'https://www.youtube.com/@BugNinza';
    try {
      const result = await Share.share({
        message: 'Bug Ninza: \n' + url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type of:', result.activityType);
        } else {
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.setting}>
      <View style={[styles.settingChild, styles.settingLayout]} />
      <View style={[styles.settingItem, styles.settingLayout]} />
      <View style={styles.statusBar} />
      <Image
        style={[styles.profilImage,]}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <Pressable
        style={[styles.arrowLeft, styles.notchIconLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </Pressable>
      <Pressable onPress={onShare}>
        <Image
          style={[styles.shareIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </Pressable>
      <Text style={[styles.favorites, styles.eventsFlexBox]}>Favorites</Text>
      <Text style={[styles.logout, styles.eventsFlexBox]} onPress={handleLogout}>
        Log Out
      </Text>
      <Text style={[styles.preferences, styles.eventsTypo]}>Preferences</Text>
      <Text style={[styles.favourite, styles.favouritePosition]}>Favourite</Text>
      <Text style={[styles.darkmode, styles.eventsFlexBox]}>Darkmode</Text>
      <View style={[styles.rectangle36Copy5Parent, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Group, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Container, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
     
        <Text style={[styles.editProfile, styles.profileColor]}  onPress={handleEditProfilePress}>Edit Profile</Text>
      
      <Image
        style={styles.translateIcon}
        resizeMode="cover"
        source={require('../assets/2.png')}
      />
    

      <Image
        style={[styles.umoonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <Image
        style={[styles.heartIcon, styles.favouritePosition]}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <Text style={[styles.profile, styles.profileClr]}>{userEmail}</Text>
      <View style={[styles.rectangleView, styles.settingLayout]} />
      <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      <Image
        style={[styles.editDuotoneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <Text style={[styles.editProfile1, styles.settingInnerLayout]} />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.rectangle36Copy5} />
        <Image
          style={styles.rightIcon}
          contentFit="cover"
          source={require("../assets/2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
left:10,
    flex: 1,
  top:0,
  
  width: 420,
  position: "absolute",
    // Center items horizontally
  },
  settingLayout: {
    width: 420,
   
    position: "absolute",
  },
  notchIconLayout: {
    height: 30,
    position: "absolute",
  },
  iconLayout1: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  eventsFlexBox: {
    textAlign: "left",
    color: Color.lightBlack,
  },
  eventsTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  favouritePosition: {
    top: 319,
    position: "absolute",
  },
  groupLayout: {
    opacity: 0.65,
    width: 14,
    height: 14,
    position: "absolute",
  },
  settingInnerLayout: {
    width: 155,
    position: "absolute",
  },

  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  settingChild: {
    backgroundColor: Color.colorDarkcyan,
    height:188,
    left: -12,
    top: 0,
    width:360
    

  },
  settingItem: {
    top: 361,
    left: -23,
    backgroundColor: Color.colorGainsboro_100,
    height: 29,
  },

  statusBar: {
    right: 4,
    left: -15,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },

  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft: {
    left: 10,
    width: 26,
    top: 45,
  },
  bellIcon: {
    transform: [{ scale: 1.5 }], // Adjust the scale value as needed
    top: 58,
    left: 325,
    height: 16, // Adjust the height to make the icon smaller
    width: 16, // Adjust the width to make the icon smaller
    position: "absolute",
  },
  favorites: {
    top: 464,
    left: 60,
    display: "none",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  logout: {
    top: 399,
    left: 47,
   
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  preferences: {
    top: 366,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    left: 17,
    textAlign: "left",
    color: Color.lightBlack,
    position: "absolute",
  },
  favourite: {
    left: 45,
    textAlign: "left",
    color: Color.lightBlack,
 
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  darkmode: {
    top: 436,
    left: 45,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangle36Copy5: {
    width: 14,
    height: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rightIcon: {
    top: 2,
    left: 4,
    width: 7,
    height: 10,
    position: "absolute",
  },
  rectangle36Copy5Parent: {
    top: 411,
    left: 338,
    opacity: 0.65,
  },
  rectangle36Copy5Group: {
    top: 324,
    left: 338,
    opacity: 0.65,
  },
  rectangle36Copy5Container: {
    top: 443,
    left: 338,
  },
  settingInner: {
    top: 225,
    left: 115,
    borderRadius: 5,
    backgroundColor: Color.colorGainsboro_100,
    height: 29,
  },
  editProfile: {
    top: 475,
    left: 24,
    left: 45,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  profileClr: {
    color: Color.lightBlack,
    textAlign: "left",
    position: "absolute",
  },
  translateIcon: {
    top: 400,
    width: 22,
    height: 22,
    left: 17,
    position: "absolute",
  },
  umoonIcon: {
    top: 435,
    left: 17,
    overflow: "hidden",
  },
  heartIcon: {
    left: 19,
    height: 19,
    width: 19,
    
    overflow: "hidden",
  },
  profile: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: 'center', // Center text horizontally
    position: 'absolute',
    top: 50, // Adjust top position as needed
  },
  rectangleView: {
    top: 266,
    backgroundColor: Color.colorGainsboro_100,
    height: 32,
    left:-8,
  },
  events: {
    top: 271,
    left: 19,
    width: 88,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    textAlign: "left",
    color: Color.lightBlack,
    height: 19,
    position: "absolute",
  },
  editDuotoneIcon: {
    top: 475,
    left: 13,
  },
  editProfile1: {
    top: 470,
    left: 40,
    height: 17,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  groupView: {
    top: 479,
    left: 338,
  },
  shareIcon: {
    top: 50,
    left: 345,
    height: 16, // Adjust the height to make the icon smaller
    width: 16, // Adjust the width to make the icon smaller
    position: "absolute",// Adjust the right position to position the icon between the bell icon and the favorites text
    zIndex: 1,
  },
  profilImage: {
    top: 99,
    left: 135,
    width: 122,
    height: 122,
    position: "absolute",
  },
  
});

export default Setting;