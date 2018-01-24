/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { AppRegistry, Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SplashScreen from './source/components/SplashScreen';
import Home from './source/components/Home';
import Login from './source/components/authentication/Login';

const { width } = Dimensions.get('window');

const Stack = {
  SplashScreen: {
    screen: SplashScreen,
  },
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
};

const DrawerRoutes = {
  SplashScreen: {
    screen: StackNavigator(Stack, { initialRouteName: 'SplashScreen' }),
  },
};

const RNBoilerplate = StackNavigator(
  {
    Drawer: {
      name: 'Drawer',
      screen: DrawerNavigator(DrawerRoutes, {
        drawerWidth: width * 0.7,
        // contentComponent: SideMenu,
      }),
    },
    ...Stack,
  },
  {
    drawerWidth: 300,
    headerMode: 'none',
  },
);

export default RNBoilerplate;

AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
