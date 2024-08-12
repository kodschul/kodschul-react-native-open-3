import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {Button} from 'react-native';
import {useAuth} from './auth';

const Story = ({route, navigation}: any) => {
  return (
    <View flex-1 center backgroundColor="white">
      <Text text70BO>Welcome to Story</Text>

      <Button title="Close Story" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Story;
