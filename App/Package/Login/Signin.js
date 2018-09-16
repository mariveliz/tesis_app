
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import styles from '../../app.style';
import {Toast} from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

import firebase from 'react-native-firebase';


// create a component
class Signin extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.onAttempLogin     = this.onAttempLogin.bind(this);
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loading: false,
          user,
        });
        this.props.navigation.navigate('MapScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onAttempLogin = (props) => {
    const { email, password } = this.state;

    Toast.show({
      text: "Autenticando ...",
      position: "bottom"
    });

    if(email.length && password.length) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        props.navigation.navigate('MapScreen')
      })
      .catch((error) => {
        Toast.show({
          text: "Usuario desconocido ...",
          position: "bottom"
        });
        const { code, message } = error;
      });
    }
  }

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
                      onChangeText = {email => this.setState({email})}
                      placeholderTextColor='rgba(225,225,225,0.7)'/>

          <TextInput style = {styles.input}
                     returnKeyType="go" ref={(input)=> this.passwordInput = input}
                     onChangeText = {password => this.setState({password})}
                     placeholder='Password'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     secureTextEntry/>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onAttempLogin(this.props)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//make this component available to the app
export default Signin;
