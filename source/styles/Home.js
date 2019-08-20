/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { StyleSheet } from 'react-native';
import { moderateScale } from '../helpers/Scale';
import { primaryColor } from '../constants/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#F0F5F6',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    margin: moderateScale(10),
  },
  instructions: {
    textAlign: 'center',
    color: primaryColor,
    fontSize: moderateScale(13),
    marginBottom: moderateScale(5),
  },
});
