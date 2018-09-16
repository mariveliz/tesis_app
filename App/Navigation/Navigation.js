import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AuthLoadingNavigator from './AuthLoadingNavigator';
import LoggedInStackNavigator from './LoggedInStackNavigator';
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator';
import PopupStackNavigator from './PopupStackNavigator';

const AppNavigator = createSwitchNavigator(
  {
    AuthLoadingNavigator: AuthLoadingNavigator,
    LoggedInStackNavigator: { screen: LoggedInStackNavigator },
    NotLoggedInStackNavigator: { screen: NotLoggedInStackNavigator },
    PopupStackNavigator: { screen: PopupStackNavigator },
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoadingNavigator'
  }
);

export default AppNavigator;
