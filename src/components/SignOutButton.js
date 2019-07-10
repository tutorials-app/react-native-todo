import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

export class SignOutButton extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signOut();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{marginRight: 10}}>
        <Button
          onPress={() => this.onSignOut()}
          title="Sign out"
          color="#000"
        />
      </View>
    )
  }
}

export default withNavigation(SignOutButton)
