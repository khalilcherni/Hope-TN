import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SendMail = ({ route }) => {
  const { email } = route.params;

  useEffect(() => {
    const sendConfirmationEmail = async () => {
      try {
        const response = await fetch('http://192.168.1.201:4000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to_email: email,
            subject: 'Donation Confirmation',
            message: 'Thank you for your donation!',
          }),
        });

        console.log('Response Status:', response.status);

        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending confirmation email:', error);
      }
    };

    sendConfirmationEmail();
  }, [email]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction Complete</Text>
      <Text style={styles.emailText}>
        Your transaction is complete. We have sent a confirmation email to {email}.
      </Text>
      <Text style={styles.thankYouText}>
        "Thank you for your generous donation! Your payment is a powerful step towards creating positive change and making a meaningful impact on the lives of those in need."
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  thankYouText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default SendMail;
