import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Language = ({ onLanguageChange }) => {
  const languages = [
    { name: '', code: 'en' },
    { name: '', code: 'fr' },
    { name: '', code: 'ar' },
  ];

  const selectLanguage = (languageCode) => {
    onLanguageChange(languageCode); // Pass the selected language code to the parent component
  };

  return (
    <View style={styles.container}>
      {languages.map((language, index) => (
        <View key={index} style={styles.languageContainer}>
          <Text
            style={styles.languageText}
            onPress={() => selectLanguage(language.code)}
          >
            {language.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  languageContainer: {
    marginLeft: 10,
  },
  languageText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default Language;
