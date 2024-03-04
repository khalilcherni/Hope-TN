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
      <Text style={styles.title}>Terms & Privacy</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla justo nec dictum faucibus. 
        Sed in ante sed libero rutrum consectetur vel et justo. Sed in ante sed libero rutrum consectetur vel et justo.
        We are not responsible for any fraudulent activities carried out by users on this platform. By using this app, you agree to comply with our terms and conditions.
      </Text>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 250,
    flexGrow: 1, 
    marginLeft:10,
    marginRight:10// Added to enable scrolling
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
    backgroundColor: '#FF6347',
  },
});

export default TermsAndPrivacy;
