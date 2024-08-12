import {View, Text} from 'react-native-ui-lib';
import React, {useState} from 'react';
import {
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

const Buttons = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <View flex-1 center backgroundColor="white">
      <View marginT-10>
        <Text onPress={() => console.warn('CLICKED!')}>Click Me</Text>
      </View>

      <Pressable onPress={() => console.warn('PRESSED')}>
        {state => (
          <View
            width={100}
            height={50}
            backgroundColor="red"
            backgroundColor={state.pressed ? 'yellow' : 'purple'}
          />
        )}
      </Pressable>

      <TouchableOpacity
        onPress={() => console.warn('CLICKED')}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}>
        <View
          width={100}
          height={50}
          backgroundColor={pressed ? 'orange' : 'green'}
        />
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.warn('CLICKED')}>
        <View width={100} height={50} backgroundColor="blue" />
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => console.warn('CLICKED')}>
        <View width={100} height={50} backgroundColor="orange" />
      </TouchableWithoutFeedback>

      <View marginT-10>
        <Button title="Press me" onPress={() => console.warn('CLICKED!')} />
      </View>

      <View marginT-30>
        <TouchableOpacity
          onPress={() => console.warn('parent pressed')}
          onLongPress={() => console.warn('onlong pressed')}>
          <View width={200} height={300} style={{backgroundColor: 'cyan'}}>
            <TouchableOpacity onPress={() => console.warn('child pressed')}>
              <View width={100} height={100} backgroundColor="green"></View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
