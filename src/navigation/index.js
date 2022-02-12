import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import UserNavigation from './UserNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    UserNavigation : UserNavigation,
  },
  {
    initialRouteName: 'UserNavigation',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;