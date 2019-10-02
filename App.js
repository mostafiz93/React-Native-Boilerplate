import { createAppContainer } from 'react-navigation';

import { switchNavigator } from './source/navigations/switchNavigator';

console.disableYellowBox = true;

const App = createAppContainer(switchNavigator);

export default App;
