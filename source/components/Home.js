/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import React, { Component } from 'react';
import { Text, View, BackHandler, ToastAndroid } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import Header from './common/Header';
import Styles from '../styles/Home';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      lastPress: undefined,
    };

    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    const currentTime = moment();
    let duration;
    const { lastPress } = this.state;
    if (lastPress) duration = moment.duration(currentTime.diff(lastPress)).asSeconds();
    if (duration < 2.5) {
      BackHandler.exitApp();
    } else {
      this.setState({ lastPress: currentTime });
      ToastAndroid.show('Please tap BACK again to exit!', ToastAndroid.SHORT);
      return true;
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header headerText="HOME" navigation={this.props.navigation} />
        <View style={Styles.content}>
          <Text style={Styles.welcome}>Welcome to React Native Boilerplate!</Text>
          <Text style={Styles.instructions}>Developed By - Durbin Labs Ltd.</Text>
          <Text style={Styles.instructions}>Author - mostafiz93 | uraniumreza</Text>
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
