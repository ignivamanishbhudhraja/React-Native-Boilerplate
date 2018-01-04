/**
 * @file: Location.js
 * @description: Search location.
 * @date: 29.09.2017
 * @author: Manish Budhraja
 */
/* @flow */
"use strict";

// Import React & React Native Components, JS Libraries, Other Libraries and Modules.

import React, { Component } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  PixelRatio,
  TouchableOpacity
} from "react-native";
import ReactMixin from "react-mixin";
import TimerMixin from "react-timer-mixin";
import Constants from "../../constants";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastActionsCreators } from "react-native-redux-toast";
import NavigationBar from "react-native-navbar";
import _ from "lodash";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as locationActions from "../../redux/modules/location";
import Geocoder from "react-native-geocoder";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  /*
  */

  getAddress = () => {
    let context = this;
    if (context.state.text.trim().length < 4) {
      context.props.navigation.dispatch(
        ToastActionsCreators.displayInfo(
          "Please enter minimum 4 digit postal code."
        )
      );
      return;
    }
    context.props.locationActions.fetchLocation(context.state.text);
  };

  /**
   * Item press.
   */
  onRequestPress = data => {
    let context = this;
    let { goBack } = this.props.navigation;
    let position = {
      lat: data.latitude,
      lng: data.longitude,
      address:
        data.line_1.capitalizeEachLetter() +
        " " +
        data.line_2.capitalizeEachLetter(),
      postalCode: data.postcode,
      city: data.post_town.capitalizeEachLetter()
    };
    context.props.locationActions.selectedLocation(position);
    goBack();
  };

  /**
   * Render list view
   */
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        hitSlop={Constants.HIT_SLOP}
        style={defaultStyles.row}
        activeOpacity={0.9}
        onPress={() => this.onRequestPress(item)}
      >
        <Text style={{ color: Constants.Colors.Black }} numberOfLines={3}>
          {item.line_1.capitalizeEachLetter() +
            " " +
            item.line_2.capitalizeEachLetter() +
            " " +
            item.post_town.capitalizeEachLetter()}
        </Text>
      </TouchableOpacity>
    );
  };

  // Assign unique value to each row.
  _keyExtractor = (item, index) => item.udprn;

  render() {
    let context = this;
    let { goBack, state, dispatch } = this.props.navigation;
    const titleConfig = {
      title: "Search Location",
      tintColor: "#fff"
    };
    return (
      <View style={[defaultStyles.container]}>
        <NavigationBar
          leftButton={<BackButton onPress={() => goBack()} />}
          title={titleConfig}
        />
        <View style={[defaultStyles.textInputContainer]}>
          <TextInput
            style={defaultStyles.textInputStyle}
            onChangeText={text => context.setState({ text })}
            value={context.state.text}
            onSubmitEditing={() => context.getAddress()}
            placeholder={"Enter postal code here."}
            placeholderTextColor={Constants.Colors.Gray}
            autoCapitalize={"characters"}
            autoCorrect={false}
            autoFocus={true}
            underlineColorAndroid={Constants.Colors.Transparent}
          />
        </View>
        <FlatList
          data={
            context.props.location.addresses.length > 0
              ? context.props.location.addresses
              : []
          }
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    backgroundColor: Constants.Colors.White,
    flex: 1
  },
  inputContainer: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    width: Constants.BaseStyle.DEVICE_WIDTH
  },
  inputStyle: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    paddingHorizontal: Constants.BaseStyle.DEVICE_WIDTH / 100 * 6,
    ...Constants.Fonts.subtitle_bold,
    color: Constants.Colors.White,
    backgroundColor: Constants.Colors.Transparent
  },
  listContainer: {
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH / 100 * 6,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10
  },
  currentContainer: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    borderBottomColor: Constants.Colors.GhostWhite,
    borderBottomWidth: 0.5,
    justifyContent: "center"
  },
  listStyle: {},
  crossIcon: {
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4.2,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
  },
  textStyle: {
    color: Constants.Colors.White,
    ...Constants.Fonts.normal,
    paddingVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 0.2,
    paddingHorizontal: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1
  },
  placeholderStyle: {
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 12,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 12,
    alignSelf: "center",
    borderRadius: Constants.BaseStyle.DEVICE_WIDTH / 100 * 6,
    justifyContent: "center"
  },
  textInputStyle: {
    backgroundColor: "#FFFFFF",
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
    flex: 1
  },
  textInputContainer: {
    backgroundColor: "#C9C9CE",
    height: 44,
    borderTopColor: "#7e7e7e",
    borderBottomColor: "#b5b5b5",
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: "row"
  },
  row: {
    padding: 13,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Constants.Colors.GhostWhite,
    backgroundColor: Constants.Colors.White
  }
};

ReactMixin(Location.prototype, TimerMixin);

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  locationActions: bindActionCreators(locationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
