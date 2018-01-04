import Constants from '../../src/constants';
import { Platform } from "react-native";

const NAV_BAR_HEIGHT = Constants.BaseStyle.DEVICE_HEIGHT === 812 ? 84 : 64;
const STATUS_BAR_HEIGHT = 0;

module.exports = {
  navBarContainer: {
    backgroundColor: Constants.Colors.PrimaryColor,
    ...Platform.select({
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 8
      },
      ios: {
        height: NAV_BAR_HEIGHT
      }
    }),
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 101
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: Constants.Colors.White,
  },
  navBar: {
    ...Platform.select({
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 6
      },
      ios: {
        height: NAV_BAR_HEIGHT
      }
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 101
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  navBarButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT === 812 ? Constants.BaseStyle.DEVICE_HEIGHT / 100 * 4.6 : Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3
  },
  navBarTitleText: {
    color: Constants.Colors.White,
    ...Constants.Fonts.contentBold,
  },
};
