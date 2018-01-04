/*
 * @file: StarRating.js
 * @description: Contains star rating component.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 * */

"use strict";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Alert,
  Linking,
  Platform
} from "react-native";
import React, { Component } from "react";
import Constants from "../../constants";

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating ? this.props.rating : 0,
      max: this.props.max ? this.props.max : 5,
      iconWidth: this.props.iconWidth? this.props.iconWidth:Platform.OS==="ios"?(Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.8):(Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.8),
      iconHeight: this.props.iconHeight? this.props.iconHeight: Platform.OS==="ios"?(Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.8):(Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.8),
      iconSelected: this.props.iconSelected? this.props.iconSelected: Constants.Images.ic_small_star,
      iconUnselected: this.props.iconUnselected? this.props.iconUnselected: Constants.Images.ic_small_grey_star,
      editable: this.props.editable != null ? this.props.editable : false
    };
  }

  _onRate(rating) {
    this.setState({ rating });
    if (this.props.onRate) {
      this.props.onRate(rating);
    }
  }
  render() {
    var icons = [];
    for (let i = 1; i <= this.state.max; i++) {
      icons.push(
        <TouchableWithoutFeedback
          disabled={!this.state.editable}
          key={i}
          style={{ height: this.state.iconHeight, width: this.state.iconWidth }}
          onPress={() => this._onRate(i)}
        >
          <Image
            style={{
              height: this.state.iconHeight,
              width: this.state.iconWidth,
              ...this.props.iconStyle,
              marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH / 100 * 0.5,
              marginVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 0.5
            }}
            source={
              this.state.rating >= i
                ? this.state.iconSelected
                : this.state.iconUnselected
            }
          />
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={[this.props.style, { flexDirection: "row" }]}>
        {icons}
      </View>
    );
  }
}
