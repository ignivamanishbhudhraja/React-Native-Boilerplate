/**
 * @file: Timer.js
 * @description: WebView to load web pages.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */


'use strict';

import React, { PropTypes,Component } from "react";
import { View, Text,StyleSheet } from "react-native";
import Constants from "../../constants";
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin'; 
import moment from 'moment';

class Timer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.startTime
    }; 
  }

  componentDidMount() {  
    let self = this;
    let runTime = (new Date()).getTime();
    this.timer = this.setInterval(()=>{
      if(self.state.startTime-1 < 1){
        self.props.timeUp();
        self.clearInterval(this.timer);
        self.setState({startTime:0})
        return;
      }
      let duration = moment.duration(moment((new Date()).getTime(),'x').diff(moment(runTime,'x')));
      let mins = duration.asSeconds().toFixed(0);
      self.setState({startTime: self.props.startTime - mins});
    },1000);
  }

  componentWillUnmount () {
    this.clearInterval(this.timer);
  }

  render() {
    const { title,textLeft,textRight } = this.props
    let time = this.state.startTime;
    let minutes = Math.floor(time / 60);
    return(
      <View style={this.props.style}>
        <Text style={styles.timeremaining}>
          {('0' + (time - minutes * 60)).slice(-2)} seconds remaining
        </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    borderWidth:1,
    alignSelf:"center", 
    borderColor:Constants.Colors.AccentColor, 
    borderRadius:((Constants.BaseStyle.DEVICE_WIDTH/100)*15),
    width:(Constants.BaseStyle.DEVICE_WIDTH/100)*30,
    height:(Constants.BaseStyle.DEVICE_WIDTH/100)*30,
    alignItems:"center",
    justifyContent:"center"
  },
  time:{
    textAlign:"center",
    padding:0,
    backgroundColor:"transparent",
    margin:0,
    color:Constants.Colors.Black,
    ...Constants.Fonts.normal
  },
  subText: {
    textAlign:"center",
    padding:0,
    margin:0,
    backgroundColor:"transparent",
    color:Constants.Colors.Black,
    ...Constants.Fonts.smallSize
  },
  timeremaining: {
    color: Constants.Colors.AccentColor,
    ...Constants.Fonts.tinyLargeBold,
    width:(Constants.BaseStyle.DEVICE_WIDTH/100)*30,
    alignSelf:"center",
    backgroundColor:Constants.Colors.Transparent,
    marginLeft:(Constants.BaseStyle.DEVICE_WIDTH/100)*5,
  },
})
Timer.PropTypes = {
   startTime: PropTypes.string.isRequired,
};

ReactMixin(Timer.prototype, TimerMixin);
export default Timer;