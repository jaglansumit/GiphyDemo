import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';

const UserNavigation = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default UserNavigation;
