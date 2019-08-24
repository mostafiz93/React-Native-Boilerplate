import { createStackNavigator } from 'react-navigation';
import { stackNavigatorConfig } from '../configs/navigationConfig';

import SplashScreen from '../components/SplashScreen';
import Home from '../components/Home';
import Login from '../components/authentication/Login';

export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: 'Home'
  }
);

export const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: 'Login'
  }
);
