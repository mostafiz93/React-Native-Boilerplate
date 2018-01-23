/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { StyleSheet } from 'react-native';

import { primaryColor, secondaryColor } from '../const/colors';
import { scale, moderateScale, verticalScale } from '../helpers/Scale';

export default StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: primaryColor,
    height: verticalScale(55),
    position: 'relative',
  },
  textStyle: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: moderateScale(18),
    color: secondaryColor,
  },
  menuButton: {
    height: verticalScale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: moderateScale(10),
  },
  notificationButton: {
    height: verticalScale(30),
    width: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: moderateScale(10),
  },
});
