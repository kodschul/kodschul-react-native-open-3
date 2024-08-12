import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Story from './Story';

const Stories = ({
  stories,
  isLoading,
  isFetching,
  fetchMore,
  handleStoryPressed,
}) => {
  if (isLoading) {
    return (
      <View style={{flexDirection: 'row'}}>
        {isLoading && (
          <View
            style={{justifyContent: 'center', width: '100%', minHeight: 80}}>
            <ActivityIndicator />
          </View>
        )}
      </View>
    );
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={stories}
      keyExtractor={item => item.image}
      renderItem={({item, index}) => (
        <Story
          image={item.image}
          label={item.label}
          onPress={() => handleStoryPressed(item, index)}
        />
      )}
      onEndReached={isFetching ? undefined : fetchMore}
      ListFooterComponent={
        isFetching ? (
          <View
            style={{
              minHeight: 130,
              justifyContent: 'center',
              marginHorizontal: 20,
              paddingBottom: 20,
            }}>
            <ActivityIndicator />
          </View>
        ) : undefined
      }
      style={{flexGrow: 0}}
      contentContainerStyle={{flexGrow: 0}}
    />
  );
};

export default Stories;
