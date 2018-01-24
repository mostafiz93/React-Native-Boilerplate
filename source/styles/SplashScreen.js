/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  splashScreenImage: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    opacity: 1,
  },
  splashScreenContainer: {
    position: 'absolute',
    bottom: 30,
    marginLeft: width * 0.5 - 20,
  },
});
