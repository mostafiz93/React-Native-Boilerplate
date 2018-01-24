/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { ScrollView, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from '../../styles/SideMenu';

const { width } = Dimensions.get('window');

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.headerContainer}>
            <View style={Styles.myProfileImageViewStyle}>
              <Image
                style={Styles.myProfileImageStyle}
                source={require('../../assets/images/logo.png')}
              />
            </View>
            <View style={Styles.headerTextView}>
              <Text style={Styles.headerText}>MD. Nayeem Reza</Text>
              <Text style={[Styles.headerText, { fontSize: width * 0.045 }]}>Age: 25</Text>
            </View>
          </View>
          <View>
            <View style={Styles.navSectionStyle}>
              <TouchableOpacity onPress={console.log('Home Page')}>
                <View style={Styles.navItemStyle}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../assets/images/logo.png')}
                  />
                  <Text style={Styles.navTextStyle}>Home</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={console.log('Screen A')}>
                <View style={[Styles.navItemStyle, { paddingTop: 40 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../assets/images/logo.png')}
                  />
                  <Text style={Styles.navTextStyle}>Screen A</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={console.log('Scrren B')}>
                <View style={[Styles.navItemStyle, { paddingTop: 40 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../assets/images/logo.png')}
                  />
                  <Text style={Styles.navTextStyle}>Screen B</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={console.log('Screen C')}>
                <View style={[Styles.navItemStyle, { paddingTop: 40 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../assets/images/logo.png')}
                  />
                  <Text style={Styles.navTextStyle}>Screen C</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={console.log('SignOut')}>
                <View style={[Styles.navItemStyle, { paddingTop: 40 }]}>
                  <Image
                    style={Styles.navIconStyle}
                    source={require('../../assets/images/logo.png')}
                  />
                  <Text style={Styles.navTextStyle}>SignOut</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SideMenu;
