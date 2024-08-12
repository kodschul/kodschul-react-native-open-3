import React, {useEffect, useState} from 'react';
import HomeScreen from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './Profile';
import LoginScreen from './Login';
import {AuthProvider, useAuth} from './auth';
import {Text, View} from 'react-native-ui-lib';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoryScreen from './Story';

import Icon from 'react-native-vector-icons/Feather';
import {navigationRef} from './navigation';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'green'},
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{tabBarIcon: props => <Icon name={'home'} {...props} />}}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{tabBarIcon: props => <Icon name={'user'} {...props} />}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const {isLoggedIn} = useAuth();

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   // await new Promise(r => setTimeout(r, 2000));
  //   setLoading(false);
  // };

  // if (isLoading) {
  //   return (
  //     <View center flex-1 backgroundColor="black">
  //       <Text white>Instagram 2.0</Text>
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn && (
        <AuthStack.Navigator>
          <AppStack.Screen name="LOGIN" component={LoginScreen} />
        </AuthStack.Navigator>
      )}
      {isLoggedIn && (
        <AppStack.Navigator>
          <AppStack.Screen
            name="APP_TABS"
            component={TabStack}
            options={{
              headerShown: false,
            }}
          />
          <AppStack.Screen
            name="STORY"
            component={StoryScreen}
            options={{
              presentation: 'fullScreenModal',
            }}
          />
        </AppStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const AppContainer = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppContainer;
