/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { StyleSheet } from 'react-native';

import { primaryColor, secondaryColor } from '../const/colors';

export default StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: primaryColor,
    height: 55,
    elevation: 0,
    position: 'relative',
  },
  textStyle: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    color: secondaryColor,
  },
  menuButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
  },
  notificationButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },
});
