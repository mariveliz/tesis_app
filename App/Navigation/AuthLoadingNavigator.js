import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import firebase from 'react-native-firebase';

export default class AuthLoadingNavigator extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loading: false,
          user,
        });
        this.props.navigation.navigate('LoggedInStackNavigator');
      } else {
        this.props.navigation.navigate('NotLoggedInStackNavigator');
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
