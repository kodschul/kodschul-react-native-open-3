import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const StylingApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>This is a dummy text</Text>
        <View
          // @ts-ignore
          style={styles.innerBox}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  text: {fontSize: 40, fontWeight: '500'},
  box: {
    backgroundColor: 'green',
    width: 200,
    height: 400,
  },
  innerBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: 'absolute',
    right: -50,
    bottom: -50,
  },
});

export default StylingApp;
