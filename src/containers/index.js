// @flow

/* "javascript.validate.enable": false,
"flow.useNPMPackagedFlow": true*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Timer } from '../components/common';
//import { Logger } from '../utilities';

type Props = {
  navigation: any
};

export default class NextFoodie extends React.Component<Props, void> {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>{'Welcome to React Native!'}</Text>
        <Avatar user = {{ role: '1', photo: '' }} />
        <Timer startTime = {30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
