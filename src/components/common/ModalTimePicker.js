/*
 * @file: ModalTimePicker.js
 * @description: Contains time picker modal.
 * @date: 10.11.2017
 * @author: Ashima Narula
 * */
/* @flow */
"use strict";

import React, { Component } from "react";

import {
  View,
  PickerIOS,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Platform,
  DatePickerIOS
} from "react-native";

import Constants from "../../constants";

export default class ModalTimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      date2: new Date(),
      openTimePicker: this.props.openTimePicker
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.openTimePicker !== nextProps.openTimePicker) {
      this.setState({ openTimePicker: nextProps.openTimePicker });
    }
  }

  // Default render function
  render() {
    return (
      <View style={styles.mainViewContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.props.onHideModalTimePicker()}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                this.props.onHideModalTimePicker();
                this.props.onTimeModalValueChange(this.state.date);
              }}
            >
              <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.picker}>
            {Platform.OS === "ios" ? (
              <DatePickerIOS
                date={this.state.date}
                mode="time"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={date => this.setState({ date: date })}
                minuteInterval={10}
              />
            ) : (
              <TimePickerAndroid
                date={this.state.date}
                mode="time"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={date => this.setState({ date: date })}
                minuteInterval={10}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewContainer: {
    position: "absolute",
    bottom: 0,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT
  },
  modalContainer: {
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 30,
    position: "absolute",
    bottom: 0
  },
  modalButtonsContainer: {
    flexDirection: "row",
    backgroundColor: "white"
  },
  cancelButton: {
    textAlign: "left",
    marginLeft: 15,
    color: Constants.Colors.Black
  },
  doneButton: {
    textAlign: "right",
    marginRight: 15,
    color: Constants.Colors.Black
  },
  picker: {
    backgroundColor: Constants.Colors.White
  }
});
