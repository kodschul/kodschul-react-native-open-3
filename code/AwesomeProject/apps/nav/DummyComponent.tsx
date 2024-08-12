import {View, Text} from 'react-native';
import React from 'react';
import {navigate} from './navigation';

const DummyComponent = () => {
  return (
    <View>
      <Text onPress={() => navigate('PROFILE')}>Press me to go to Profile</Text>
    </View>
  );
};

export default DummyComponent;
