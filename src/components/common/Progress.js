/**
 * @file: Progress.js
 * @description: Progress while loading pages.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */
/* @flow */

'use strict';

import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

const mapStateToProps = state => ({
  visible: state.app.isLoading
});

export default connect(mapStateToProps)(Spinner);
