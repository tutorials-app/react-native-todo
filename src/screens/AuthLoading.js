import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import AuthLoading from '../containers/AuthLoading'

export default class AuthLoadingScreen extends Component {

  render() {
    return (
      <View>
        <AuthLoading />
      </View>
    );
  }
}