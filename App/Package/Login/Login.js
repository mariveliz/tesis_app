
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import styles from '../../app.style';
import Signin from './Signin';

// create a component
class Login extends Component {
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}></View>
          <View style={styles.formContainer}>
            <Signin navigation={this.props.navigation} />
          </View>
        </KeyboardAvoidingView>
        );
    }
}
//make this component available to the app
export default Login;
