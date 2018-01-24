/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import {
  Text,
  View,
  Image,
  Modal,
  DatePickerAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Form, Button, Item, Input, Container, Content, Picker } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Styles from '../../styles/Authentication';
import { MONTHS } from '../../const/strings';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: undefined,
      weight: undefined,
      date: undefined,
      year: undefined,
      month: undefined,
      registerFullName: undefined,
      registerContactNo: undefined,
      registerPassword: undefined,
      registerRePassword: undefined,
    };

    this.handleRegister = this.handleRegister.bind(this);
    this.onValueChangeGender = this.onValueChangeGender.bind(this);

    this.inputs = {};
  }

  onValueChangeGender(value) {
    this.setState({
      gender: value,
    });
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  handleRegister() {
    const PhoneNumberPattern = /01\d{9}$/;
    const {
      gender,
      weight,
      date,
      year,
      month,
      registerFullName,
      registerContactNo,
      registerPassword,
      registerRePassword,
    } = this.state;

    if (!registerFullName) {
      alert('Error! Your Name is Required!');
      return;
    } else if (!registerContactNo) {
      alert('Error! Contact Number is Required!');
      return;
    } else if (!registerPassword) {
      alert('Error! Password is Required!');
      return;
    } else if (!registerRePassword) {
      alert('Error! Retype Password is Required!');
      return;
    } else if (!date) {
      alert('Error! Please Input your Date of Birth!');
      return;
    } else if (!weight) {
      alert('Error! Please Input your Weight!');
      return;
    } else if (!gender) {
      alert('Error! Please Select your Gender!');
      return;
    } else if (registerRePassword !== registerPassword) {
      alert("Error! Passwords don't match!");
      return;
    } else if (!PhoneNumberPattern.test(registerContactNo)) {
      alert('Your Contact No. is not valid!');
      return;
    }

    this.props.handleCreateAccount(registerContactNo, registerPassword);
    // this.setState(
    //   {
    //     registerModalVisible: !registerModalVisible,
    //     signInPressed: true,
    //   },
    //   this.handleLogin,
    // );
  }

  renderDatePicker = async () => {
    try {
      const {
        action, year, month, day,
      } = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'default',
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.log(day, month, year);
        this.setState({ date: day, month, year });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {
    const {
      weight,
      gender,
      date,
      year,
      month,
      registerFullName,
      registerContactNo,
      registerPassword,
      registerRePassword,
    } = this.state;

    const { visible, handleCreateAccount } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={handleCreateAccount}
      >
        <ScrollView
          style={{
            backgroundColor: '#F0F5F6',
            paddingLeft: 20,
            paddingTop: 30,
            paddingRight: 20,
            paddingBottom: 20,
          }}
        >
          <Content
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View style={Styles.imageView}>
              <Image style={Styles.image} source={require('../../assets/images/logo.png')} />
            </View>

            <Form>
              <TextField
                label="Name"
                value={registerFullName}
                onChangeText={(value) => this.setState({ registerFullName: value })}
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
                label="Mobile No"
                value={registerContactNo}
                onChangeText={(value) => this.setState({ registerContactNo: value })}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.focusNextField('three');
                }}
                returnKeyType="next"
                ref={(input) => {
                  this.inputs['two'] = input;
                }}
              />

              <TouchableOpacity onPress={this.renderDatePicker}>
                <View style={Styles.DoBView}>
                  {date && (
                    <View style={{ marginTop: -15 }}>
                      <Text style={{ fontSize: 12, opacity: 0.8, paddingBottom: 5 }}>
                        Date of Birth
                      </Text>
                      <Text style={[Styles.DoBText, { color: '#464646', opacity: 1 }]}>
                        {`${date} ${MONTHS[month]} ${year}`}
                      </Text>
                    </View>
                  )}
                  {!date && <Text style={Styles.DoBText}>Date of Birth</Text>}
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 10 }} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={Styles.halfItem}>
                  <TextField
                    label="Weight"
                    value={weight}
                    onChangeText={(value) => this.setState({ weight: value })}
                    blurOnSubmit={false}
                    onSubmitEditing={() => {
                      this.focusNextField('four');
                    }}
                    returnKeyType="next"
                    ref={(input) => {
                      this.inputs['three'] = input;
                    }}
                  />
                </View>

                <View style={Styles.halfPicker}>
                  <Picker
                    placeholder="Gender"
                    supportedOrientations={['portrait', 'landscape']}
                    mode="dropdown"
                    selectedValue={gender}
                    onValueChange={this.onValueChangeGender}
                  >
                    <Item label="Gender" value="undefined" />
                    <Item label="Male" value="Male" />
                    <Item label="Female" value="Female" />
                  </Picker>
                </View>
              </View>
              <TextField
                label="Password"
                secureTextEntry
                value={registerPassword}
                onChangeText={(value) => this.setState({ registerPassword: value })}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.focusNextField('five');
                }}
                returnKeyType="next"
                ref={(input) => {
                  this.inputs['four'] = input;
                }}
              />
              <TextField
                label="Retype Password"
                secureTextEntry
                value={registerRePassword}
                onChangeText={(value) => this.setState({ registerRePassword: value })}
                blurOnSubmit
                onSubmitEditing={this.handleRegister}
                returnKeyType="done"
                ref={(input) => {
                  this.inputs['five'] = input;
                }}
              />
              <View style={{ marginTop: 20 }} />
              <Button style={Styles.button} block info onPress={this.handleRegister}>
                <Text style={Styles.buttonText}>REGISTER</Text>
              </Button>
              <View style={{ marginTop: 50 }} />
            </Form>
          </Content>
        </ScrollView>
      </Modal>
    );
  }
}
