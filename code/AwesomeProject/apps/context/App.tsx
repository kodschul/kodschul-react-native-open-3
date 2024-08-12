import {View, Text} from 'react-native-ui-lib';
import React, {useState, createContext, useContext} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import {Button} from 'react-native';

import {ThemeContext, ThemeProvider, useTheme} from './theme';

const App = () => {
  const {isDarkMode, setDarkMode} = useTheme();
  return (
    <View
      center
      style={{flex: 1, backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <ComponentA isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <View style={{marginTop: 20}} />
      <ComponentB isDarkMode={isDarkMode} />

      <Button
        title={isDarkMode ? 'Light Mode' : 'Dark mode'}
        onPress={() => setDarkMode(!isDarkMode)}
      />
    </View>
  );
};

const AppContainer = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppContainer;
