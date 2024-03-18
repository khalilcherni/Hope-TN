import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsAndPrivacy = () => {
  const navigation = useNavigation();

  const handleAccept = () => {
    // Navigate to Home screen when terms accepted
    navigation.navigate('Home');
  };

  const handleDecline = () => {
    // Navigate back to Sign Up screen when terms declined
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Terms & Privacy</Text>
        <Text style={styles.description}>
        At our charity organization, we prioritize integrity and transparency. We strive to ensure that every donation and contribution goes directly toward making a positive impact on those in need. However, it's essential to acknowledge that, despite our best efforts, fraudulent activities may occur. We remain vigilant in our efforts to prevent scams and misuse of funds, but we cannot guarantee complete immunity from such incidents. By choosing to support our cause, you acknowledge and accept this inherent risk. 
        Your trust and cooperation are invaluable as we work together to create a better world for those less fortunate.
        At our charity organization, we prioritize integrity and transparency. We strive to ensure that every donation and contribution goes directly toward making a positive impact on those in need. However, it's essential to acknowledge that, despite our best efforts, fraudulent activities may occur. We remain vigilant in our efforts to prevent scams and misuse of funds, but we cannot guarantee complete immunity from such incidents. By choosing to support our cause, you acknowledge and accept this inherent risk. 
        Your trust and cooperation are invaluable as we work together to create a better world for those less fortunate.
         
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleAccept}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 5,
    marginTop: 40,
    marginBottom:80,
    flexGrow: 1,
    marginRight:10,
    marginLeft:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  acceptButton: {
    marginRight: 10,
    backgroundColor: '#209FA6',
  },
  declineButton: {
    marginLeft: 10,
    backgroundColor: '#209FA6',
  },
});

export default TermsAndPrivacy;
