/**
 * @file: Timer.js
 * @description: WebView to load web pages.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */

'use strict';

/* @flow */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from '../../constants';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import moment from 'moment';
import PropTypes from 'prop-types';

type Props = {
  startTime: number,
  style: View.propTypes.style,
  onFinish: PropTypes.func.isRequired,
};

type State = {
  startTime: number
};

class Timer extends React.Component<Props, State> {
  timer: number;
  mixin: [TimerMixin];
  constructor(props: Object) {
    super(props);
    this.state = {
      startTime: props.startTime
    };
  }

  componentWillMount() {
    this.runTimer();
  }

  componentWillUnmount() {
    this.clearInterval(this.timer);
  }

  /*
  * @function : Start time before component mount.
  */

  runTimer = () => {
    let self = this;
    let runTime = new Date().getTime();
    this.timer = this.setInterval(() => {
      if (self.state.startTime - 1 < 1) {
        self.props.onFinish();
        self.clearInterval(this.timer);
        self.setState({ startTime: 0 });
        return;
      }
      let duration = moment.duration(moment(new Date().getTime(), 'x').diff(moment(runTime, 'x')));
      let mins = duration.asSeconds().toFixed(0);
      self.setState({ startTime: self.props.startTime - mins });
    }, 1000);
  };

  render() {
    const { style } = this.props;
    let time = this.state.startTime;
    let minutes = Math.floor(time / 60);
    return (
      <View style = {style}>
        <Text style = {styles.timeremaining}>
          {('0' + (time - minutes * 60)).slice(-2)} {'seconds remaining'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeremaining: {
    color: Constants.Colors.AccentColor,
    ...Constants.Fonts.tinyLargeBold,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 30,
    alignSelf: 'center',
    backgroundColor: Constants.Colors.Transparent,
    marginLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5
  }
});

ReactMixin(Timer.prototype, TimerMixin);
export default Timer;