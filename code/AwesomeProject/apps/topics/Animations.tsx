import {View, Text} from 'react-native-ui-lib';
import React, {useState} from 'react';

import * as Animatable from 'react-native-animatable';
import {ImageBackground, Pressable} from 'react-native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Animations = () => {
  const [isVisible, setVisible] = useState(true);

  const {top, bottom, left, right} = useSafeAreaInsets();

  console.log({top, bottom, left, right});

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1697996067551-afe67fa5197b?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={{flex: 1, paddingTop: top, paddingBottom: bottom}}>
      <Animatable.Text
        animation={'bounce'}
        style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
        Animations
      </Animatable.Text>
    </ImageBackground>
  );
};

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <Animations />
    </SafeAreaProvider>
  );
};

export default AppContainer;
