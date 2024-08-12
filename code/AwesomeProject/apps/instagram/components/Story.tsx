import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Story = ({image, label, onPress}) => {
  const [isOpened, setOpened] = useState(false);

  const handlePress = () => {
    setOpened(true);
    onPress({image, label});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: !isOpened ? '#E5008E' : 'silver',
            borderWidth: 2,

            padding: 5,
            borderRadius: 70,
          }}>
          <Image
            source={{uri: image, width: 100, height: 100}}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
            }}
          />
        </View>

        <Text numberOfLines={1} style={{marginTop: 10, maxWidth: 70}}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
