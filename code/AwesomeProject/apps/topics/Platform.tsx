import {View, Text} from 'react-native-ui-lib';
import React from 'react';

import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const PlatformApp = () => {
  const itemHeight = 500;
  return (
    <View
      flex-1
      center
      backgroundColor={Platform.OS == 'android' ? 'green' : 'orange'}>
      <Text>Platform</Text>

      <Text>{JSON.stringify({width, height})}</Text>
    </View>
  );
};

export default PlatformApp;
