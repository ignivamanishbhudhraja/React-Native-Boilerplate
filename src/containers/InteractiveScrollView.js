/**
 * @file: AnimatedView.js
 * @description: Animated view is used for animations in application.
 * @date: 10.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

import React from 'react';
import {
  Text,
  View,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Constants from '../constants';

type State = {
  allowDragging: boolean,
  draggableRange: {
    top: number,
    bottom: number
  }
};

export default class BottomSheet extends React.Component<void,State> {
  _draggedValue: ?number;
  slidingPanel: ?Object;

  constructor(props) {
    super(props);
    this.state = {
      allowDragging : true,
      draggableRange: {
        top: Constants.BaseStyle.DEVICE_HEIGHT/1.08,
        bottom: 180
      }
    };
    this._draggedValue = new Animated.Value(-120);
  }

  _onScroll=({ nativeEvent })=> {
    //console.log("contentOffset==> ", nativeEvent.contentOffset.y)
    if (nativeEvent.contentOffset.y <= 0 || (!this.state.allowDragging)) {
      this.setState({ allowDragging: false });
    }
  }

  _ignoreScrollBehavior=()=> {
    if (this.state.allowDragging) {
      this.setState({ allowDragging: false });
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity onPress = {()=>{
          this.setState({ allowDragging: true });
          this.slidingPanel.transitionTo(0);
        }}>
          <Text>{'Hide Me'}</Text>
        </TouchableOpacity>
        <SlidingUpPanel
          visible = {true}
          allowDragging = {this.state.allowDragging}
          showBackdrop = {false}
          ref = {(c) => this.slidingPanel = c}
          draggableRange = {this.props.draggableRange}
          onDrag = {(v) => this._draggedValue.setValue(v)}>
          <ScrollableTabView locked = {false} style = {styles.panel}>
            <ScrollView
              scrollEventThrottle = {16}
              onScroll = {this._onScroll}
              onTouchMove = {this._ignoreScrollBehavior}
              tabLabel = "React">
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
              <View style = {styles.placeholder} />
            </ScrollView>
            <Text tabLabel = "Flow" />
            <Text tabLabel = "Jest" />
          </ScrollableTabView>
        </SlidingUpPanel>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  },
  panel: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
    position: 'relative'
  },
  placeholder: {
    backgroundColor: Constants.Colors.Red,
    height: 120,
    marginHorizontal: 1,
    marginTop: 20,
    width : Constants.BaseStyle.DEVICE_WIDTH
  },
});