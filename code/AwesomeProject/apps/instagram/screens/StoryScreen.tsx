import {SafeAreaView, Button, ImageBackground} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StoryScreen = ({route, navigation}) => {
  const [story, setStory] = useState(route?.params?.story);
  const [nextStories, setNextStories] = useState(route?.params?.stories || []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setStory(nextStories[0]);
      setNextStories(nextStories.slice(1));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [nextStories]);

  useEffect(() => {
    setStory(route?.params?.story);
  }, [route?.params?.story]);

  useEffect(() => {
    setNextStories(route?.params?.stories);
  }, [route?.params?.stories]);

  return (
    <ImageBackground
      source={{uri: story?.image.replace('/med', '')}}
      style={{flex: 1, width: '100%'}}>
      <View flex-1 center>
        <Text text70BO black>
          {'Story von: ' + story?.label}
        </Text>

        <Button title="Go back " onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

export default StoryScreen;
