
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import styles from '../../app.style';
import {Toast} from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';


const onAttempLogin = (props) => {
  Toast.show({
   text: "Inciando ...",
   position: "bottom"
 });

 props.navigation.navigate('MapScreen')
}

// create a component
class Signin extends Component {
  render() {
    this.nav = this.props.navigation;
    return (
      <View style={styles.content}>
          <StatusBar barStyle="light-content"/>
          <TextInput style = {styles.input}
                      autoCapitalize="none"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      autoCorrect={false}
                      keyboardType='email-address'
                      returnKeyType="next"
                      placeholder='Usuario'
                      placeholderTextColor='rgba(225,225,225,0.7)'/>

          <TextInput style = {styles.input}
                     returnKeyType="go" ref={(input)=> this.passwordInput = input}
                     placeholder='Password'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     secureTextEntry/>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => onAttempLogin(this.props)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Signin;
