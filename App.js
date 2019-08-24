/**
 * React Native Boilerplate
 * Developed By: Dubin Labs Ltd.
 * Author: Nayeem Reza || Mostafiz Rahman
 * https://github.com/mostafiz93/RNBoilerplate
 */

import { createAppContainer } from 'react-navigation';

import { switchNavigator } from './source/navigations/switchNavigator';

console.disableYellowBox = true;

const App = createAppContainer(switchNavigator);

export default App;
