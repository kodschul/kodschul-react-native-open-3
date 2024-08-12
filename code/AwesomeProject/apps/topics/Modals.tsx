import {View, Text} from 'react-native-ui-lib';
import React, {useState} from 'react';
import {Button, Alert} from 'react-native';

import Modal from 'react-native-modal';

const Modals = () => {
  const [isVisible, setVisible] = useState(false);

  const handlePayNow = () => {
    const res = Alert.prompt(
      'How much do you want to pay?',
      'Pay at least 1000€',
      amount => {
        if (amount != '1000') {
          Alert.alert("You're too cheap, your phone will break in 3s!");
        } else {
          setVisible(false);
        }
      },
    );
  };

  return (
    <View flex-1 center backgroundColor="green">
      <Text>Modals</Text>

      <Button
        title="Warn ME!"
        onPress={() =>
          Alert.alert('Title', 'Warning abcd', [
            {
              text: 'Click me',
              onPress: () => console.warn('WARNING'),
              style: 'default',
            },
          ])
        }
      />

      <Button title="Click ME!" onPress={() => setVisible(true)} />

      <Modal
        isVisible={isVisible}
        // style={{width: 400, height: 400}}

        backdropColor="black"
        backdropOpacity={0.5}
        onBackButtonPress={() => setVisible(false)}
        // presentationStyle="formSheet"
        onBackdropPress={() => console.warn('PAY BEFORE!')}
        onDismiss={() => setVisible(false)}>
        <View center style={{backgroundColor: 'red'}}>
          <View width={300} center height={300} backgroundColor="grey">
            <Text>You've been hacked!</Text>

            <Button title="Pay Now" onPress={handlePayNow} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
