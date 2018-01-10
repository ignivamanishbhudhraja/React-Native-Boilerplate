/*
 * @file: ModalTimePicker.js
 * @description: Contains time picker modal.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 * */

/* @flow */

'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  DatePickerIOS,
  TimePickerAndroid
} from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';
import Text from './Text';

type Props = {
  closePicker: PropTypes.func.isRequired,
  open: boolean
};

type State = {
  date: PropTypes.object,
  date2: PropTypes.object,
  open: boolean,
  timeZoneOffsetInHours: number
};

export default class DateTimePicker extends React.Component<Props, State> {
  static defaultProps = {
    open: false,
    date: new Date(),
    date2: new Date()
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      date: new Date(),
      date2: new Date(),
      open: props.open,
      timeZoneOffsetInHours: 6
    };
  }

  // Default render function
  render() {
    return (
      <View style = {styles.mainViewContainer}>
        <View style = {styles.modalContainer}>
          <View style = {styles.modalButtonsContainer}>
            <TouchableOpacity style = {styles.container} onPress = {() => this.props.closePicker(null)}>
              <Text style = {styles.cancelButton}>{'Cancel'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style = {styles.container}
              onPress = {() => {
                this.props.closePicker(this.state.date);
              }}
            >
              <Text style = {styles.doneButton}>{'Done'}</Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.picker}>
            {Platform.OS === 'ios' ? (
              <DatePickerIOS
                date = {this.state.date}
                mode = "time"
                timeZoneOffsetInMinutes = {this.state.timeZoneOffsetInHours * 60}
                onDateChange = {date => this.setState({ date: date })}
                minuteInterval = {10}
              />
            ) : (
              <TimePickerAndroid
                date = {this.state.date}
                mode = "time"
                timeZoneOffsetInMinutes = {this.state.timeZoneOffsetInHours * 60}
                onDateChange = {date => this.setState({ date: date })}
                minuteInterval = {10}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainViewContainer: {
    position: 'absolute',
    bottom: 0,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT
  },
  modalContainer: {
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 30,
    position: 'absolute',
    bottom: 0
  },
  cancelButton: {
    textAlign: 'left',
    marginLeft: 15,
    color: Constants.Colors.Black
  },
  doneButton: {
    textAlign: 'right',
    marginRight: 15,
    color: Constants.Colors.Black
  },
  picker: {
    backgroundColor: Constants.Colors.White
  }
});
