import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar } from 'react-native'
import { withNavigation } from 'react-navigation'

export class AuthLoadiing extends Component {
  constructor(props) {
    super(props);
    this.authenticate();
  }

  authenticate() {
    const isAuth = this.props.user ? this.props.user.isLoggedIn: false;
    this.props.navigation.navigate(isAuth ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default withNavigation(AuthLoadiing)
