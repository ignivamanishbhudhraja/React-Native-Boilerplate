/**
 * @file: Location.js
 * @description: Search location.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */
'use strict';

import React from 'react';
import { View } from 'react-native';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationActions from '../../redux/modules/location';

type Props = {
  navigation: Object
};

class Location extends React.Component<Props> {
  render() {
    return <View />;
  }
}

ReactMixin(Location.prototype, TimerMixin);

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  locationActions: bindActionCreators(locationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
