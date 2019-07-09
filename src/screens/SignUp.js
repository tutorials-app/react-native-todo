import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import SignUpForm from '../components/SignUpForm'

export default class SignUp extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Sign Up',
      headerRight: (
        <View style={{marginRight: 10}}>
          <Button
            onPress={() => navigation.navigate('SignIn')}
            title="Sign In"
          />
        </View>
      ),
      /* the rest of this config is unchanged */
    };
  };

  render() {
    return (
      <View>
        <SignUpForm />
      </View>
    )
  }
}
