import {View, Text, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
      }}>
      <View>
        <Image
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png',
          }}
          style={{
            width: 140,
            height: 40,
          }}
          resizeMode="cover"
        />
        {/* <Text style={{position: 'absolute', top: -20}}>by @franznkemaka</Text> */}
      </View>

      <View style={{flexDirection: 'row'}}>
        <Icon name="heart" size={30} style={{marginRight: 10}} />
        {/* <Icon3 name="message" size={30} /> */}
      </View>
    </View>
  );
};

export default Header;
