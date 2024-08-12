import React, {useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import StoryScreen from './screens/StoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Story"
          component={StoryScreen}
          options={{headerShown: false, presentation: 'fullScreenModal'}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
