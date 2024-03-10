import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'; // Import the ToggleSwitch component

const Language = ({ onLanguageChange }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([
    { name: 'English', code: 'en', isEnabled: true },
    { name: 'French', code: 'fr', isEnabled: false },
    { name: 'Arabic', code: 'ar', isEnabled: false }, // Add Arabic as another language option
  ]);

  const toggleLanguage = (index) => {
    const updatedLanguages = selectedLanguages.map((lang, i) => {
      if (i === index) {
        return { ...lang, isEnabled: true };
      } else {
        return { ...lang, isEnabled: false };
      }
    });
    setSelectedLanguages(updatedLanguages);
    const selectedLanguage = updatedLanguages.find(lang => lang.isEnabled);
    onLanguageChange(selectedLanguage.code); // Pass the language code to the parent component
  };

  return (
    <View style={styles.container}>
      {selectedLanguages.map((language, index) => (
        <View key={index} style={styles.languageContainer}>
          <Text style={styles.languageText}>{language.name}</Text>
          <ToggleSwitch
            isOn={language.isEnabled}
            onColor="#209FA6"
            offColor="gray"
            label=""
            size="medium"
            onToggle={() => toggleLanguage(index)}
          />
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
  },
});

export default Language;
