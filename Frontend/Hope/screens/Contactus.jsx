import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Accelerometer } from 'expo-sensors';

const Contact = () => {
  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/khalil-cherni-778464266/");
  };

  const openEmail = () => {
    Linking.openURL("mailto:kcherni411@gmail.com");
  };

  const makeCall = () => {
    Linking.openURL("tel:+21655331742");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/21655331742");
  };
  

  const openFacebook = () => {
    Linking.openURL("fb://profile/khalil.cherni.338");
  };
  
  const shakeAnimation = new Animated.Value(0);

  useEffect(() => {
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const acceleration = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
      if (acceleration > 2) { // Adjust the threshold for sensitivity
        Animated.sequence([
          Animated.timing(shakeAnimation, { toValue: 10, duration: 100, easing: Easing.linear, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: -10, duration: 100, easing: Easing.linear, useNativeDriver: true }),
          Animated.timing(shakeAnimation, { toValue: 0, duration: 100, easing: Easing.linear, useNativeDriver: true })
        ]).start();
      }
    });
    return () => subscription.remove();
  }, []);

  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }]
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>
          If you would like to get involved or support our charity efforts, please feel free to contact us through any of the following methods. We welcome your contributions and look forward to hearing from you. You can email us, call us, or reach out through WhatsApp, Facebook, or LinkedIn.
        </Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={openEmail} style={styles.contactItem}>
            <Ionicons name="mail" size={24} color="#007bff" />
            <Text style={styles.contactText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={makeCall} style={styles.contactItem}>
            <Ionicons name="call" size={24} color="#007bff" />
            <Text style={styles.contactText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openWhatsApp} style={styles.contactItem}>
            <Ionicons name="logo-whatsapp" size={24} color="#25d366" />
            <Text style={styles.contactText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openFacebook} style={styles.contactItem}>
            <Ionicons name="logo-facebook" size={24} color="#1877f2" />
            <Text style={styles.contactText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openLinkedIn} style={styles.contactItem}>
            <Ionicons name="logo-linkedin" size={24} color="#007bff" />
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('ChatRoom')}><Text>ChatRoom</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Messages')}><Text>Messages</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Setting')}><Text>Setting</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Setting')}><Text>Setting</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop:300
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
    lineHeight: 24, // Adjust line height for better readability
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "48%",
  },
  contactText: {
    marginLeft: 5,
    color: "#007bff",
    textDecorationLine: "underline",
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Contact;
