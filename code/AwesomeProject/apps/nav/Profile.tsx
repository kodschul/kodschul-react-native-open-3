import {View, Text} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useAuth} from './auth';

const ProfileScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}) => {
  const {username} = useAuth();

  return (
    <View flex-1 center backgroundColor="white">
      <Text>Hello {username}, here is your profile!</Text>

      <Button
        title="Open my story"
        onPress={() => navigation.navigate('STORY')}
      />
    </View>
  );
};

export default ProfileScreen;
