import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {Button} from 'react-native';
import {useTheme} from './theme';

const ComponentA = () => {
  const {isDarkMode, setDarkMode} = useTheme();
  return (
    <View
      width={200}
      height={200}
      backgroundColor={isDarkMode ? '#353535a4' : 'silver'}>
      <Text color={isDarkMode ? 'white' : 'black'}>ComponentA</Text>

      <Button
        title={isDarkMode ? 'Light Mode' : 'Dark mode'}
        onPress={() => setDarkMode(!isDarkMode)}
      />
    </View>
  );
};

export default ComponentA;
