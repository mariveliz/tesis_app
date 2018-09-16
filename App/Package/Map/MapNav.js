
import React, { Component } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from '../../app.style';

import {
  Text,
  Button,
} from 'native-base'
// create a component
class MapNav extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const profileParam = params ? params.profile : null;

    return (
      <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View style={{ height: "50%" ,width: '100%', backgroundColor:"#fff", justifyContent:"center"}}>
            <Text>Testing a modal with transparent background</Text>
          </View>
      </View>
    );
  }
}

//make this component available to the app
export default MapNav;
