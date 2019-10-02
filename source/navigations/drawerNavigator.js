import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SideMenu from '../components/common/SideMenu';
import { AppStack } from './stackNavigator';

const { width } = Dimensions.get('window');

export const drawerNavigator = createDrawerNavigator(
  {
    App: AppStack
  },
  {
    drawerWidth: width * 0.8,
    drawerPosition: 'left',
    contentComponent: SideMenu
  }
);
