import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Package/Login/Login';

// Manifest of possible screens
export default StackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
})
