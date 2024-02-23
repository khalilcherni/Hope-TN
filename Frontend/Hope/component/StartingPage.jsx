import React from 'react';
import { View, Image } from 'react-native';

const StartingPage = () => {
  return (
    <View>
      <Image source={require('./path/to/logo.png')} />
    </View>
  );
};

export default StartingPage;
