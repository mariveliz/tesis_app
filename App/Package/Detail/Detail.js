
import React, { Component } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from '../../app.style';

import {
  Text,
  Button,
} from 'native-base'
// create a component
class Detail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const detail = params ? params.detail : null;

    return (
      <View style={{flex: 1}}>
        <View style={Detailstyles.container}>
          <Image
            resizeMode="contain"
            source={detail.image}
            style={Detailstyles.banner} />
        </View>
        <View style={Detailstyles.container}>
          <Text>{detail.description}</Text>
          <Text>{detail.title}</Text>
        </View>
        <View style={[Detailstyles.container,  {justifyContent: 'space-between',}]}>
          <Button block danger
            onPress={() => this.props.navigation.goBack()}
            >
            <Text>Finalizar ruta</Text>
          </Button>
          <Button block warning
            onPress={() => {
                this.props.navigation.state.params.setDirection(detail.coordinate);
                this.props.navigation.goBack();
              }}
            >
            <Text>Ir a la dirección</Text>
          </Button>
          <Button block
            onPress={() => this.props.navigation.goBack()}
            >
          <Text>Cerrar</Text>
          </Button>
        </View>
      </View>
    );
  }
}

var Detailstyles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

//make this component available to the app
export default Detail;
