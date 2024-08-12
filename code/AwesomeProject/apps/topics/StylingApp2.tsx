import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import {View, Text} from 'react-native-ui-lib';

const StylingApp2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        marginL-100
        marginT-100
        width={200}
        height={400}
        backgroundColor="white">
        <Text text50M green10>
          This is a dummy text
        </Text>
        <View
          absB
          width={100}
          height={100}
          backgroundColor="blue"
          style={{
            right: -50,
            bottom: -50,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});

export default StylingApp2;
