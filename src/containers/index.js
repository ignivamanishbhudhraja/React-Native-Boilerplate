
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Avatar } from './components/common';

type Props = {
  
};

type State = {
  
};

export default class FlowExample extends React.Component<Props, State> {

  multiply = (n1: number, n2: number): number => {
    return n1 * n2;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{multiply("14", 14)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});