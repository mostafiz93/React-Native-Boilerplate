/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { Text, View, Image, Modal, AsyncStorage, NetInfo, ToastAndroid } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Picker } from 'native-base';
import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import SnackBar from 'react-native-snackbar-component';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Styles from '../../styles/Home';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };

  constructor(props) {
    super(props);

    this.state = {
      NetConnected: true,
      signInPressed: false,
      visibleSnackBar1: false,
      registerModalVisible: false,
    };

    this.focusNextField = this.focusNextField.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);

    this.inputs = {};
  }

  componentWillMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (isConnected) this.setState({ NetConnected: true });
      else this.setState({ NetConnected: false });
    });
    function handleFirstConnectivityChange(isConnected) {
      if (isConnected) this.setState({ NetConnected: true });
      else this.setState({ NetConnected: false });
    }
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange.bind(this),
    );
  }

  async saveUser(user) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  focusNextField(id) {
    this.inputs[id].wrappedInstance.focus();
  }

  handleLogin(contactNo, password) {
    ToastAndroid.show(`Welcome ${contactNo} - ${password}`, ToastAndroid.LONG);

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  handleCreateAccount(contactNo, password) {
    if (contactNo && password) {
      this.handleLogin(contactNo, password);
    }
    const { registerModalVisible } = this.state;
    this.setState({ registerModalVisible: !registerModalVisible });
  }

  render() {
    const {
      visibleSnackBar1, NetConnected, signInPressed, registerModalVisible,
    } = this.state;

    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: '#F0F5F6',
          alignItems: 'center',
        }}
      >
        <SnackBar
          visible={visibleSnackBar1}
          textMessage="Sorry, Contact Number and Password Did'nt Match!"
          actionHandler={() => {
            this.setState({ visibleSnackBar1: false });
          }}
          actionText="Ok"
        />
        {NetConnected &&
          !signInPressed && (
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
              <LoginForm
                handleLogin={this.handleLogin}
                handleCreateAccount={this.handleCreateAccount}
              />
              <RegistrationForm
                visible={registerModalVisible}
                handleCreateAccount={this.handleCreateAccount}
              />
            </Content>
          )}
        {signInPressed && (
          <View style={Styles.container}>
            <Spinner isVisible size={100} type="Bounce" color="#0fc9ff" />
          </View>
        )}
        {!NetConnected && (
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={Styles.imageView}>
              <Image style={Styles.image} source={require('../../assets/images/logo.png')} />
            </View>
            <View style={Styles.alertCard}>
              <Text style={Styles.alertCardText}>
                You have no data connection available on your phone. Please connect to WiFi or
                Mobile Data.
              </Text>
            </View>
            <View style={{ marginTop: 30 }} />
          </Content>
        )}
      </Container>
    );
  }
}

LogIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};
