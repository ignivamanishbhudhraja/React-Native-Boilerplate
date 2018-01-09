// @flow

/* "javascript.validate.enable": false,
"flow.useNPMPackagedFlow": true*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Timer, NavigationBar } from '../components/common';
//import { Logger } from '../utilities';

type Props = {
  navigation: any
};

export default class NextFoodie extends React.Component<Props, void> {

  onForwordPress=()=>{
    console.log('onForwordPress!');
  }

  onBackPress=()=>{
    console.log('onBackPress!');
  }

  render() {
    const leftButtonConfig = {
      onPress: this.onBackPress,
    };

    const rightButtonConfig = {
      onPress: this.onForwordPress,
      icon : 'angle-right'
    };

    const titleConfig = {
      title: 'Hello, world',
    };
    return (
      <View style = {styles.container}>
        <NavigationBar
          title = {titleConfig}
          leftButton = {leftButtonConfig}
          rightButton = {rightButtonConfig}
        />
        <Text style = {styles.welcome}>
          {'Welcome to React Native!'}
        </Text>
        <Avatar user = {{ role: '1', photo: '' }} />
        <Timer onFinish = {()=>console.log('timer finish')} startTime = {5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
