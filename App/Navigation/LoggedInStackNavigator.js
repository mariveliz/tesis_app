import { StackNavigator } from 'react-navigation';
import MapScreen from '../Package/Map/Map';
import DetailScreen from '../Package/Detail/Detail';

// Manifest of possible screens
export default StackNavigator({
  MapScreen: { screen: MapScreen },
  DetailScreen: { screen: DetailScreen },
}, {
  mode: 'modal',
  headerMode: 'none',
})
