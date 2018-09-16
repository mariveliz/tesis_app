import { createStackNavigator } from 'react-navigation';
import LoggedInStackNavigator from './LoggedInStackNavigator';
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator';
import PopupStackNavigator from './PopupStackNavigator';

const AppNavigator = createStackNavigator(
  {
    LoggedInStackNavigator: { screen: LoggedInStackNavigator },
    PopupStackNavigator: { screen: PopupStackNavigator },
    NotLoggedInStackNavigator: { screen: NotLoggedInStackNavigator },
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoggedInStackNavigator'
  }
);

export default AppNavigator;
