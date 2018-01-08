/*
 * @file: StarRating.js
 * @description: Contains star rating component.
 * @date: 08.Jan.2017
 * @author: Manish Budhiraja
 * */

/* @flow */

'use strict';

import React from 'react';
import { View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';
import _ from 'lodash';

type Props = {
  rating: number,
  max: number,
  editable: boolean,
  onRate: PropTypes.func,
  starStyle: Image.propTypes.style,
  style: TouchableWithoutFeedback.propTypes.style,
  starChecked: PropTypes.object,
  starUnchecked: PropTypes.object
};

type State = {
  rating: number
};

export default class StarRating extends React.Component<Props, State> {
  static defaultProps = {
    rating: 0,
    max: 5,
    editable: true,
    style: {},
    starStyle: {},
    starChecked: {}, // image
    starUnchecked: {} // image
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      rating: this.props.rating
    };
  }

  /*
  * @function : Trigger when user tap on rate icons . accepts numbers only.
  */

  onRate = (rating: number) => {
    this.setState({ rating });
    if (_.isFunction(this.props.onRate)) {
      this.props.onRate(rating);
    }
  };

  /*
  * @function : Render the stars.
  */

  renderIcons = () => {
    let { max, editable, starChecked, starUnchecked } = this.props;
    let starStyle = [styles.starStyle, this.props.starStyle];
    let icons = _.map(max, (rateIcon, i) => {
      return (
        <TouchableWithoutFeedback
          disabled = {!editable}
          key = {i}
          style = {styles.starContainerStyle}
          onPress = {() => this.onRate(i)}
        >
          <Image style = {starStyle} source = {this.state.rating >= i ? starChecked : starUnchecked} />
        </TouchableWithoutFeedback>
      );
    });
    return icons;
  };

  render() {
    const containerStyle = [styles.container, this.props.style];
    return <View style = {containerStyle}>{this.renderIcons}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  starStyle: {
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH / 100 * 0.5,
    marginVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 0.5,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2
  },
  starContainerStyle: {
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2
  }
});
