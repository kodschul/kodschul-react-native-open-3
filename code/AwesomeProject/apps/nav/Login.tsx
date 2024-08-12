import {View, Text} from 'react-native-ui-lib';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {useAuth} from './auth';

const LoginScreen = ({route, navigation}) => {
  const [username, setUsername] = useState('');

  const {setLoggedIn, setUsername: setLoggedInUsername} = useAuth();

  const signIn = () => {
    setLoggedInUsername(username);
    setLoggedIn(true);
  };

  return (
    <View flex-1 center backgroundColor="white">
      <Text>Hi User</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{
          backgroundColor: '#eee',
          minWidth: '80%',
          paddingVertical: 10,
          marginVertical: 20,
        }}
      />

      <Button title="Sign in" onPress={signIn} />
    </View>
  );
};

export default LoginScreen;
