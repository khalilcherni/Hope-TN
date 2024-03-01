import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    Linking.openURL("https://wa.me/your-whatsapp-number");
  };

  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/your-facebook-page");
  };

  return (
    <View style={styles.container}>
        <Text>ueufbbbfuebf</Text>
      <Text style={styles.description}>
        If you would like to get involved or support our charity efforts, please feel free to contact us through any of the following methods:
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact:</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
 
    marginTop:50
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
});

export default Contact;
