import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import {Button} from 'react-native';
import {useAuth} from './auth';
import DummyComponent from './DummyComponent';

const Home = ({route, navigation}) => {
  const {username} = useAuth();
  return (
    <View flex-1 center backgroundColor="white">
      <Text text70BO>Welcome back {username}</Text>

      <DummyComponent />

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('PROFILE', {username})}
      />
    </View>
  );
};

export default Home;
