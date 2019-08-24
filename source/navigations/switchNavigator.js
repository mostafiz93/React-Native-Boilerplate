import { createSwitchNavigator } from 'react-navigation';

import { AuthStack } from './stackNavigator';
import { drawerNavigator } from './drawerNavigator';
import SplashScreen from '../components/SplashScreen'

export const switchNavigator = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    // Intro: { screen: IntroSlider },
    App: drawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
