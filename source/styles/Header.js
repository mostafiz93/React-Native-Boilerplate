/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#222222',
    height: 90,
    elevation: 0,
    position: 'relative',
  },
  textStyle: {
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white',
    marginBottom: 35,
  },
  menuButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 47,
    left: 15,
  },
  notificationButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 47,
    right: 15,
  },
});
