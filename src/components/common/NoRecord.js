/**
 * @file: NoRecord.js
 * @description: Show when we dont have any records.
 * @date: 03.Jan.2018
 * @author: Manish Budhiraja
 */
/* @flow */

'use strict';

import React from 'react';
import { StyleSheet, View, Text as DefaultText, Image } from 'react-native';
import Constants from '../../constants';
import Text from './Text';

type Props = {
  headerInfo: string,
  info: string,
  image: ?Object,
  container: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  headerStyle: DefaultText.propTypes.style,
  infoStyle: DefaultText.propTypes.style,
};

const NoRecord = (props: Props) => {
  const { container, headerStyle, infoStyle, imageStyle, image, info, headerInfo } = props;
  return (
    <View style = {[styles.container, container]}>
      {image &&
      <View>
        <Image style = {[styles.imageStyle,imageStyle]} source = {image}/>
      </View>
      }
      <Text style = {[styles.headerStyle, headerStyle]}>{headerInfo}</Text>
      <Text style = {[styles.infoStyle,infoStyle]}>{info}</Text>
    </View>
  );
};

NoRecord.defaultProps = {
  headerInfo : 'No Record Found.',
  info: '',
  container: {},
  textStyle: {},
  headerStyle:{},
  image : null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  headerStyle: {
    textAlign: 'center',
    color: Constants.Colors.Black,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    ...Constants.Fonts.contentBold,
  },
  infoStyle: {
    textAlign: 'center',
    color: Constants.Colors.LightBlack,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1,
    ...Constants.Fonts.contentBold
  },
  imageStyle:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    height : Constants.BaseStyle.DEVICE_WIDTH/100*70,
    width : Constants.BaseStyle.DEVICE_WIDTH/100*70
  }
});

export default NoRecord;
