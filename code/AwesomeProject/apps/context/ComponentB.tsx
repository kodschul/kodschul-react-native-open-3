import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {useTheme} from './theme';

const ComponentB = () => {
  const {isDarkMode} = useTheme();
  return (
    <View
      width={200}
      height={200}
      backgroundColor={isDarkMode ? '#353535a4' : 'silver'}>
      <Text color={isDarkMode ? 'white' : 'black'}>ComponentB</Text>
    </View>
  );
};

export default ComponentB;
