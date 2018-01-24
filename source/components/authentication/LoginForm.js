/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Styles from '../../styles/Authentication';
import Scale, { moderateScale } from '../../helpers/Scale';

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactNo: undefined,
      password: undefined,
    };

    this.focusNextField = this.focusNextField.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);

    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  handleForgotPassword() {
    alert('This functionaly is not available yet!');
  }

  render() {
    const { contactNo, password } = this.state;
    const { handleCreateAccount, handleLogin } = this.props;

    return (
      <View>
        <View style={Styles.imageView}>
          <Image style={Styles.image} source={require('../../assets/images/logo.png')} />
        </View>
        <TextField
          label="Contact No"
          value={contactNo}
          onChangeText={(value) => this.setState({ contactNo: value })}
          keyboardType="numeric"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          returnKeyType="next"
          ref={(input) => {
            this.inputs['one'] = input;
          }}
        />

        <TextField
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(value) => this.setState({ password: value })}
          blurOnSubmit
          onSubmitEditing={() => handleLogin(contactNo, password)}
          returnKeyType="done"
          ref={(input) => {
            this.inputs['two'] = input;
          }}
        />

        <View style={{ marginTop: 20 }} />

        <Button style={Styles.button} block info onPress={() => handleLogin(contactNo, password)}>
          <Text style={Styles.buttonText}>SIGN IN</Text>
        </Button>

        <Text style={Styles.textFP} onPress={this.handleForgotPassword}>
          Forgot Password?
        </Text>

        <View style={Styles.orView}>
          <View style={Styles.leftLine} />
          <Text style={Styles.textOr}>Or</Text>
          <View style={Styles.rightLine} />
        </View>

        <View style={{ marginTop: 10 }} />

        <Button style={Styles.button} block info onPress={handleCreateAccount}>
          <Text style={Styles.buttonText}>CREATE ACCOUNT</Text>
        </Button>
      </View>
    );
  }
}
