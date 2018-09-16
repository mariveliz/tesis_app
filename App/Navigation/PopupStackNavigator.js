import { StackNavigator } from 'react-navigation';
import MapNav from '../Package/Map/MapNav';

// Manifest of possible screens
export default StackNavigator({
  MapNav: { screen: MapNav },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle:{
      backgroundColor:"transparent",
      opacity:0.99
  }
})
