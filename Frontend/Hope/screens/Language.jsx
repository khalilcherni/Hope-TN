import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'; // Import the ToggleSwitch component
import { Color, FontSize, FontFamily } from '../GlobalStyles'; // Import your global styles if needed

const Language = () => {
  const languages = [
    { name: 'English (US)', isEnabled: false },
    { name: 'Arabic', isEnabled: false },
    { name: 'French', isEnabled: false },
  ];

  const [selectedLanguages, setSelectedLanguages] = useState(languages);

  const toggleLanguage = (index) => {
    const updatedLanguages = [...selectedLanguages];
    updatedLanguages[index].isEnabled = !updatedLanguages[index].isEnabled;
    setSelectedLanguages(updatedLanguages);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.title}>Languages</Text>
      </View>
      <View style={styles.bottomHalf}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
  },
  topHalf: {
    height:130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5, // Adjust padding to reduce the size of the background color
  },
  title: {
    fontSize: 24,
    fontFamily: FontFamily.titlePoppinsMedium,
    color: 'white',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  languageText: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.darkGray0,
  },
});

export default Language;
