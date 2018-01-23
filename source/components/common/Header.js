/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import Styles from '../../styles/Header';
import { secondaryColor } from '../../const/colors';

const Header = (props) => (
  <View style={Styles.viewStyle}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('DrawerOpen')}
      style={Styles.menuButton}
    >
      <Icon name="md-menu" size={25} color={secondaryColor} align="right" />
    </TouchableOpacity>

    <Text style={Styles.textStyle}>{props.headerText}</Text>

    <TouchableOpacity
      onPress={() => props.navigation.navigate('Notification')}
      style={Styles.notificationButton}
    >
      <Icon name="md-notifications" size={25} color={secondaryColor} align="right" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'HEADER',
};

export default Header;
