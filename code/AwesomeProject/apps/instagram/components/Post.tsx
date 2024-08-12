import {View, Text, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

const Post = ({
  avatar,
  image,
  username,
  likedByAvatars,
  likedByUsernames,
  likesCount,
  caption,
}: any) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: avatar, width: 50, height: 50}}
            style={{width: 30, height: 30, borderRadius: 30, marginRight: 10}}
          />

          <Text style={{fontWeight: 'bold', fontSize: 16}}>{username}</Text>
        </View>

        <View>
          <Icon name="more-horizontal" size={25} />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Image
          source={image}
          style={{width: null, height: 400, resizeMode: 'cover'}}
        />
      </View>

      <View style={{marginTop: 10, marginHorizontal: 15, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="heart" size={26} style={{marginRight: 15}} />
          <Icon name="message-circle" size={26} style={{marginRight: 15}} />
          <Icon name="send" size={26} style={{marginRight: 3}} />
        </View>
        <Icon name="bookmark" size={30} />
      </View>

      {likesCount !== 0 && (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            alignItems: 'center',
            marginTop: 5,
          }}>
          {likedByAvatars?.map?.((avatar, i) => (
            <Image
              key={avatar}
              source={{uri: avatar}}
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: 'white',
                marginLeft: i == 0 ? 0 : -10,
              }}
            />
          ))}

          <Text style={{marginLeft: 10, maxWidth: '80%'}}>
            Liked by{' '}
            <Text style={{fontWeight: 'bold'}}>{likedByUsernames}</Text> and{' '}
            <Text style={{fontWeight: 'bold'}}>{likesCount} others</Text>
          </Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{username}</Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{marginLeft: 10, maxWidth: '50%'}}>
          {caption}
        </Text>
      </View>
    </View>
  );
};

export default Post;
