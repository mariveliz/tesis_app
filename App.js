
import React from 'react';
import {AppRegistry, Platform, View} from 'react-native';
import {Root, Text} from 'native-base';
import { MenuProvider } from 'react-native-popup-menu';

import AppNavigator from './App/Navigation/Navigation'



type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <MenuProvider>
        <Root>
          <AppNavigator/>
        </Root>
      </MenuProvider>
    );
  }
}
