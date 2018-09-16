
import React, { Component } from 'react';
import { PermissionsAndroid,
         AppRegistry,
         View,
         Dimensions,
         Image,
         StyleSheet,
         KeyboardAvoidingView,
         TouchableOpacity,
         Slider,
} from 'react-native';

import {
  Container,
  Content,
  ListItem,
  Header, Left, Body, Right,
  Icon,
  Title,
  Text,
  Button,
  Picker,
  Form,
  Fab,
  CheckBox,
  Switch,
} from 'native-base';


import {
  ScrollView,
} from 'react-native';

import { Animated } from 'react-native';


import firebase from 'react-native-firebase';

import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import styles from '../../app.style';



let { width, height } = Dimensions.get('window');

import {
  Menu,
  MenuProvider,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const { Popover } = renderers
const MenuNav = () => (
  <Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={{}} >
      <Icon type="FontAwesome" name="cogs" style={{fontSize: 38}}/>
    </MenuTrigger>
    <MenuOptions style={[styles.menuOptions]}>
      <View style={{marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold',}}>Distancia máxima</Text>
        <Text style={{fontWeight: 'bold',}}>10KM</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>1</Text>
        <Slider
          value={10}
          minimumValue={1}
          maximumValue={100}
          style={{width: 150}}
         />
         <Text>100</Text>
       </View>

       <View style={{marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
         <Text style={{fontWeight: 'bold',}}>Tarifas</Text>
         <Text style={{fontWeight: 'bold',}}>$5000</Text>
       </View>
       <View style={{flex: 1, flexDirection: 'row'}}>
         <Text>$0</Text>
         <Slider
           value={0}
           minimumValue={0}
           maximumValue={100}
           style={{width: 150}}
          />
          <Text>+$50000</Text>
        </View>

        <View style={{marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',}}>Previsión</Text>
          <Text style={{fontWeight: 'bold',}}>Fonasa</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Fonasa</Text><Switch value={true} /><Text>Isapre</Text>
        </View>

        <View style={{marginBottom: 10, marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',}}>Atención</Text>
          <Text style={{fontWeight: 'bold',}}>Domicilio</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Domicilio</Text><Switch value={true} /><Text>Consulta</Text>
        </View>

        <View style={{marginBottom: 10, marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold',}}>Qué profesional necesitas?</Text>
          <Text style={{fontWeight: 'bold',}}>Domicilio</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Domicilio</Text><Switch value={true} /><Text>Consulta</Text>
        </View>
    </MenuOptions>
  </Menu>
);

/*const MenuDistance = () => (

);*/

/*
const MenuPricing = () => (
  <Menu rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={{}} >
      <Icon type="FontAwesome" name="dollar-sign" style={{fontSize: 24}}/>
    </MenuTrigger>
    <MenuOptions>
       <MenuOption onSelect={() => this.setPricing(1)}  text='0 a 5000' />
       <MenuOption onSelect={() => this.setPricing(2)}  text='5001 a 10000' />
       <MenuOption onSelect={() => this.setPricing(3)}  text='10001 a 20000' />
       <MenuOption onSelect={() => this.setPricing(4)}  text='sobre 20000' />
    </MenuOptions>
  </Menu>
);
*/

/*
const MenuHealth = () => (
  <Menu rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={{}} >
      <Text>{this.state.health_value}</Text>
    </MenuTrigger>
    <MenuOptions>
       <MenuOption onSelect={() => this.setHealth('Fonasa')}  text='Fonasa' />
       <MenuOption onSelect={() => this.setHealth('Isapre')}  text='Isapre' />
    </MenuOptions>
  </Menu>
);
*/

/*
const MenuAttention = () => (
  <Menu rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={{}} >
      <Text>{this.state.attention_value}</Text>
    </MenuTrigger>
    <MenuOptions>
       <MenuOption onSelect={() => this.setAttention('Domicilio')}  text='Domicilio' />
       <MenuOption onSelect={() => this.setAttention('Consulta')}  text='Consulta' />
    </MenuOptions>
  </Menu>
);
*/
/*
const MenuProfessional = () => (
  <Menu rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={{}} >
      <Text>{this.state.attention_value}</Text>
    </MenuTrigger>
    <MenuOptions>
       <MenuOption onSelect={() => this.setAttention('Domicilio')}  text='Domicilio' />
       <MenuOption onSelect={() => this.setAttention('Consulta')}  text='Consulta' />
    </MenuOptions>
  </Menu>
);
*/

const ASPECT_RATIO = width / height;
const LATITUDE = -33.0222012;
const LONGITUDE = -71.5529779;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; // 0.0421

const CARD_HEIGHT = 150;
const CARD_WIDTH  = 300;

const CARD_IMAGE_HEIGHT = CARD_HEIGHT - 20;
const CARD_IMAGE_WIDTH  = 100;
const CARD_TEXT_HEIGHT  = CARD_HEIGHT - 20;
const CARD_TEXT_WIDTH   = CARD_WIDTH- CARD_IMAGE_WIDTH;

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const lookupDstance = [
    1, 5, 10, 20
]

const cardStyles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    width: CARD_IMAGE_WIDTH - 8,
    height: CARD_IMAGE_HEIGHT - 8,
  },
  textContent: {
    flex: 1,
    height: CARD_TEXT_HEIGHT,
    width: CARD_TEXT_WIDTH,
    padding: 8
  },
  cardtitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

// create a component
class Map extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DetailScreen')}
          title="Info"
          color="#fff"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('routes');
    this.unsubscribe = null;
    this.state = {
      loading: true,
      distance_value:     10,
      pricing_value:      1,
      health_value:       'Fonasa',
      attention_value:    'Domicilio',
      professional_value: 'key1',
      location_latitude:  null,
      location_longitude: null,
      location_error:     null,
      fab_health:         false,
      fab_distance:       false,
      fab_price:          false,
      fab_local_remote:   false,
      fab_professional:   false,
      concat: null,
      x: 'false',
      route_coords: [],
      markers: [],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };

    this.setMenuOptions = this.setMenuOptions.bind(this);

    this.setDirection = this.setDirection.bind(this);
    this.getCards     = this.getCards.bind(this);
  }

  decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {
      // Reset shift, result, and byte
      byte = null;
      shift = 0;
      result = 0;

      do {
        byte = str.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

      shift = result = 0;

      do {
        byte = str.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

      lat += latitude_change;
      lng += longitude_change;

      coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  setDirection(destinationCoordinates){

   if (this.state.location_latitude != null && this.state.location_longitude != null)
    {
      let concatLot = this.state.location_latitude +","+this.state.location_longitude
      this.setState({
        concat: concatLot
      }, () => {
        var latlng = this.state.region.latitude + ',' + this.state.region.longitude;
        latlng = destinationCoordinates.latitude + ',' + destinationCoordinates.longitude;
        this.getDirections(concatLot, latlng);
      });
    }
  }

  setMenuOptions() {
    //MenuDistance  = MenuDistance.bind(this);
    //this.setDistance = this.setDistance.bind(this);

    //MenuPricing  = MenuPricing.bind(this);
    this.setPricing = this.setPricing.bind(this);

    //MenuHealth  = MenuHealth.bind(this);
    this.setHealth = this.setHealth.bind(this);

    //MenuAttention  = MenuAttention.bind(this);
    this.setAttention = this.setAttention.bind(this);

    //MenuProfessional  = MenuProfessional.bind(this);
    this.setProfessional = this.setProfessional.bind(this);
  }

  setDistance(value) {
    this.setState({distance_value: value},
      () => this.getCards()
    );
  }

  setPricing(value) {
    this.setState({pricing_value: value},
      () => this.getCards()
    );
  }

  setHealth(value) {
    this.setState({health_value: value},
      () => this.getCards()
    );
  }
  setAttention(value) {
    this.setState({attention_value: value},
      () => this.getCards()
    );
  }

  setProfessional(value: string) {
    this.setState({professional_value: value},
      function() {this.getCards();}
    );
  }

  urlArgs() {
    var args = '?version=1';
    args = args + '&lat=' + this.state.location_latitude;
    args = args + '&lng=' + this.state.location_longitude;
    return args;
  }

  async getCards() {

      var url      = 'http://192.168.1.38/mockup/ordenes.php';
      url = url + this.urlArgs();
      let resp     = await fetch(url);
      let respJson = await resp.json();
      if(!respJson.data || !respJson.data.length){
        respJson.data = [];
      }
      this.setState({markers: respJson.data});
      return respJson;
  }

  async getDirections(startLoc, destinationLoc, waypoint) {

    if(waypoint)
      waypoint = '&waypoints=optimize:true|' + waypoint;
    else
      waypoint = '';

     try {
       var url = 'https://maps.googleapis.com/maps/api/directions/json' +
                 `?origin=${ startLoc }&destination=${ destinationLoc }${ waypoint }`;
       let resp = await fetch(url);
       let respJson = await resp.json();
       let points = this.decode(respJson.routes[0].overview_polyline.points);
       let coords = points.map((point, index) => {
         return  {
           latitude : point[0],
           longitude : point[1]
         }
       });
       this.setState({route_coords: coords})
       this.setState({x: "true"})
       return coords
     } catch(error) {
       this.setState({x: "error"})
       return error
     }
    }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.setState({
          fab_health: false,
          fab_distance: false,
          fab_price: false,
          fab_local_remote: false,
        fab_professional: false,
    });

    //this.getCards();

    navigator.geolocation.getCurrentPosition(
      (position) => {

        this.setState({
          location_latitude: position.coords.latitude,
          location_longitude: position.coords.longitude,
          location_error: null,
        });
      },
      (error) => this.setState({ location_error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.setState({
          fab_health: false,
          fab_distance: false,
          fab_price: false,
          fab_local_remote: false,
          fab_professional: false,
      });
  }

  onCollectionUpdate = (querySnapshot) => {
    const markers = [];
    querySnapshot.forEach((doc) => {
      const { amount,
              coordinate,
              title,
              description,
              address,
              image } = doc.data();
      markers.push({
        key: doc.id,
        doc, // DocumentSnapshot
        id: doc.id,
        amount,
        coordinate,
        title,
        description,
        address,
        image
      });
    });
    this.setState({
      markers,
      loading: false,
   });
  }

  onValueChange(value: string) {
    this.setState({
      professional_value: value
    });
  }

  hideFabOptions() {
    this.setState({
          fab_health: false,
          fab_distance: false,
          fab_price: false,
          fab_local_remote: false,
          fab_professional: false,
    });
  }

  renderAttentionTitle(value){
    switch(value) {
      case 'Domicilio':
        return <Icon type="FontAwesome" name="home" style={styles.header_icon}/>
      break;

      case 'Consulta':
        return <Icon type="FontAwesome" name="hospital-o" style={styles.header_icon}/>
      break;

      default:
        return <Icon type="FontAwesome" name="address-book" style={styles.header_icon}/>
    }
   return null;
 }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <Container>
        <View >
          <MapView ref={map => this.map = map}
            provider={ PROVIDER_GOOGLE }
            style={ styles.map }
            cacheEnabled={false}
            loadingEnabled={true}
            followsUserLocation={false}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            initialRegion={ this.state.region }
          >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[cardStyles.markerWrap]}>
                  <Animated.View style={[cardStyles.ring]} />
                  <View style={cardStyles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
            <Polyline
              coordinates={this.state.route_coords}
              strokeWidth={3}
              strokeColor="black"/>
          </MapView>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.animation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            style={cardStyles.scrollView}
            contentContainerStyle={cardStyles.endPadding}
          >
            {this.state.markers.map((marker, index) => (
              <View style={cardStyles.card} key={index}>
                <Image
                  source={marker.image}
                  style={cardStyles.cardImage}
                  resizeMode="cover"
                />
                <View style={cardStyles.textContent}>
                  <Text numberOfLines={1} style={cardStyles.cardtitle}>{marker.title}</Text>
                  <Text numberOfLines={1} style={cardStyles.cardDescription}>
                    {marker.description}
                  </Text>
                  <Text numberOfLines={3} style={cardStyles.cardDescription}>
                    {marker.address}
                  </Text>
                  <Button small block warning
                      onPress={() => this.props.navigation.navigate('DetailScreen', {
                        setDirection: this.setDirection.bind(this),
                        detail: marker
                  })}>
                    <Text>Ver detalle</Text>
                  </Button>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
          <View style={styles.map_nav}  >
            <Button small block success>
              <Text>Generar ruta masiva</Text>
            </Button>
          </View>
        </View>
     </Container>
    );
  }
}

//make this component available to the app
export default Map;
