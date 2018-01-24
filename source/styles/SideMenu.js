/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { Dimensions } from 'react-native';
import { moderateScale } from '../helpers/Scale';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  headerContainer: {
    position: 'relative',
    borderBottomWidth: 0.5,
    borderColor: '#DDD',
    paddingBottom: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    position: 'relative',
  },
  navItemStyle: {
    paddingTop: moderateScale(20),
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTextStyle: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(18),
  },
  navIconStyle: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain',
  },
  navSectionStyle: {
    marginLeft: moderateScale(10),
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerImageStyle: {
    flex: 1,
    width: moderateScale(50),
    height: moderateScale(50),
  },
  footerImageStyle: {
    flex: 1,
    width: width * 0.35,
    height: height * 0.05,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  headerText: {
    color: '#464646',
    fontSize: width * 0.04,
  },
  headerTextView: {
    marginLeft: width * 0.03,
    marginTop: width * 0.03,
    width: width * 0.46,
  },
  footerText: {
    position: 'absolute',
    bottom: height * 0.075,
    right: 10,
    color: 'gray',
    fontSize: width * 0.03,
    opacity: 0.4,
  },
  myProfileImageStyle: {
    height: width * 0.17,
    width: width * 0.17,
    borderRadius: width * 0.17 / 2,
    borderWidth: 0,
    borderColor: '#FFFFFF',
  },
  myProfileImageViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: width * 0.19,
    width: width * 0.19,
    borderRadius: width * 0.19 / 2,
    borderWidth: 1.5,
    borderColor: '#0fc9ff',
    backgroundColor: '#FFFFFF',
    marginLeft: width * 0.03,
    marginTop: width * 0.03,
    elevation: 1,
  },
};
