/*
 * @file: Loader.js
 * @description: Top header component for showing statusbar, back button, title etc
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 * */

import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';


/* @flow */

type Props = {
};

type State = {
  visible: boolean
};

class Loader extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  componentDidMount() {
    let context = this;
    context.setTimeout(() => {
      context.setState({
        visible: false
      });
    }, 1000);
  }

  render() {
    return <Spinner visible = {this.state.visible} />;
  }
}

ReactMixin(Loader.prototype, TimerMixin);

module.exports = Loader;
